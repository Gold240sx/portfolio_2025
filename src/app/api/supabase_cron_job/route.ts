import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Validate environment variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const CRON_JOB_SECRET = process.env.CRON_JOB_SECRET

if (!SUPABASE_URL || !SUPABASE_KEY || !CRON_JOB_SECRET) {
	throw new Error("Missing required environment variables")
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const CRON_JOB_RUN_MIN_DAYS = 2
const CRON_JOB_RUN_MAX_DAYS = 6

const moods = [
	"happy",
	"sad",
	"mad",
	"angry",
	"expressive",
	"thankful",
	"inquisitive",
	"excited",
	"grateful",
	"interested",
	"amazed",
	"introspective",
	"energized",
	"sleepy",
	"depressed",
	"hungry",
	"cold",
	"hot",
	"jealous",
]

function getRandomMood(currentMood: string): string {
	const availableMoods = moods.filter((mood) => mood !== currentMood)
	const randomIndex = Math.floor(Math.random() * availableMoods.length)
	return availableMoods[randomIndex]
}

function getRandomTimeToday(): string {
	const now = new Date()
	const randomHour = Math.floor(Math.random() * 24)
	const randomMinute = Math.floor(Math.random() * 60)
	const randomSecond = Math.floor(Math.random() * 60)
	return new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		randomHour,
		randomMinute,
		randomSecond
	).toISOString()
}

async function getDaysSinceLastAction(): Promise<number> {
	try {
		const { data, error } = await supabase
			.from("updates")
			.select("last_update")
			.order("last_update", { ascending: false })
			.limit(1)
			.single()

		if (error) {
			console.error("Error fetching last update:", error)
			throw new Error("Database error while checking last update")
		}

		if (!data) return Infinity // If no records exist

		const lastUpdate = new Date(data.last_update)
		const now = new Date()
		const diffInHours =
			(now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60)

		// Convert hours to days (rounding up after 24 hours)
		// e.g., 23:59 = 1 day, 24:01 = 2 days
		return Math.ceil(diffInHours / 24)
	} catch (error) {
		console.error("Error in getDaysSinceLastAction:", error)
		throw error
	}
}

async function shouldUpdate(
	isTestCall: boolean
): Promise<{ shouldRun: boolean; daysSinceLastAction: number }> {
	try {
		if (isTestCall) return { shouldRun: true, daysSinceLastAction: 0 }

		const daysSinceLastAction = await getDaysSinceLastAction()

		// If it's been less than 2 days, don't run
		if (daysSinceLastAction < CRON_JOB_RUN_MIN_DAYS) {
			return { shouldRun: false, daysSinceLastAction }
		}

		// If it's been 5 or more days, must run
		if (daysSinceLastAction >= CRON_JOB_RUN_MAX_DAYS) {
			return { shouldRun: true, daysSinceLastAction }
		}

		// Between 2-4 days: equal probability each day
		const probability =
			1 / (CRON_JOB_RUN_MAX_DAYS - CRON_JOB_RUN_MIN_DAYS + 1)
		return {
			shouldRun: Math.random() < probability,
			daysSinceLastAction,
		}
	} catch (error) {
		console.error("Error in shouldUpdate:", error)
		throw error
	}
}

async function determineAction(): Promise<"create" | "update"> {
	const { count, error } = await supabase
		.from("updates")
		.select("*", { count: "exact", head: true })

	if (error) {
		throw new Error("Failed to get total row count")
	}

	if (count === 0) return "create"

	// 2/3 chance for update, 1/3 for create
	return Math.random() < 2 / 3 ? "update" : "create"
}

export async function POST(request: NextRequest) {
	try {
		// Authorization check
		const authHeader = request.headers.get("authorization")
		if (!authHeader || authHeader !== `Bearer ${CRON_JOB_SECRET}`) {
			return NextResponse.json(
				{ message: "Unauthorized - Invalid or missing credentials" },
				{ status: 401 }
			)
		}

		// Check for test call
		const isTestCall = request.headers.get("x-test-call") === "true"
		const { shouldRun, daysSinceLastAction } =
			await shouldUpdate(isTestCall)

		if (!shouldRun) {
			return NextResponse.json({
				message: "Action was not ran",
				daysSinceLastAction,
				nextGuaranteedRun: CRON_JOB_RUN_MAX_DAYS - daysSinceLastAction,
			})
		}

		const randomDateTime = getRandomTimeToday()
		const action = await determineAction()

		if (action === "create") {
			const { data: newRow, error: insertError } = await supabase
				.from("updates")
				.insert({
					current_mood: getRandomMood("neutral"),
					last_update: randomDateTime,
					created_at: randomDateTime,
					updated_at: randomDateTime,
				})
				.select()

			if (insertError) {
				console.error("Error creating new row:", insertError)
				throw new Error("Failed to create new row")
			}

			return NextResponse.json({
				message: `Action successful - Created new row`,
				data: newRow,
				daysSinceLastAction,
			})
		} else {
			// Get random existing row
			const { data: existingRow, error: selectError } = await supabase
				.from("updates")
				.select("*")
				.limit(1)
				.single()

			if (selectError) {
				console.error("Error selecting random row:", selectError)
				throw new Error("Failed to select random row")
			}

			const { data: updatedRow, error: updateError } = await supabase
				.from("updates")
				.update({
					current_mood: getRandomMood(existingRow.current_mood),
					last_update: randomDateTime,
					updated_at: randomDateTime,
				})
				.eq("id", existingRow.id)
				.select()

			if (updateError) {
				console.error("Error updating row:", updateError)
				throw new Error("Failed to update row")
			}

			return NextResponse.json({
				message: `Action successful - Updated existing row`,
				data: updatedRow,
				daysSinceLastAction,
			})
		}
	} catch (error) {
		console.error("Error in POST handler:", error)
		return NextResponse.json(
			{
				message: "Internal server error",
				error: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 }
		)
	}
}
