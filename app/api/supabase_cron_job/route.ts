import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// View the latest update
// Pick a random time of day
// ensure that the update occurs between 2 and 5 days after the last update
// if the last update was 5 days ago, force an update
// pick a random mood from the list
// update the row with the new mood and the current date and time OR
// create a new row with the new mood and the current date and time

// Validate environment variables
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
const CRON_JOB_SECRET = process.env.CRON_JOB_SECRET

if (!SUPABASE_URL || !SUPABASE_KEY || !CRON_JOB_SECRET) {
	throw new Error("Missing required environment variables")
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

const CRON_JOB_RUN_MIN_DAYS = 2
const CRON_JOB_RUN_MAX_DAYS = 5

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
	const randomTime = new Date(
		now.getFullYear(),
		now.getMonth(),
		now.getDate(),
		randomHour,
		randomMinute,
		randomSecond
	)
	return randomTime.toISOString()
}

async function shouldUpdate(): Promise<boolean> {
	try {
		const { data, error } = await supabase
			.from("updates")
			.select("last_update")
			.order("last_update", { ascending: false })
			.limit(1)
			.single()

		if (error) {
			console.error("Error fetching last update:", error)
			return false
		}

		if (!data) return true // First run

		const lastUpdate = new Date(data.last_update)
		const now = new Date()
		const daysSinceLastUpdate =
			(now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60 * 24)

		if (daysSinceLastUpdate >= CRON_JOB_RUN_MAX_DAYS) {
			return true // Force update on day 5
		}

		const probability =
			(daysSinceLastUpdate - CRON_JOB_RUN_MIN_DAYS + 1) /
			(CRON_JOB_RUN_MAX_DAYS - CRON_JOB_RUN_MIN_DAYS + 1)
		return Math.random() < probability
	} catch (error) {
		console.error("Error in shouldUpdate:", error)
		return false
	}
}

export async function POST(request: NextRequest) {
	try {
		const authHeader = request.headers.get("authorization")
		if (!authHeader || authHeader !== `Bearer ${CRON_JOB_SECRET}`) {
			return NextResponse.json(
				{ message: "Unauthorized" },
				{ status: 401 }
			)
		}

		const shouldUpdateNow = await shouldUpdate()
		if (shouldUpdateNow) {
			const randomDateTime = getRandomTimeToday()
			const { data: updatesTable, error: getUpdatesError } =
				await supabase
					.from("updates")
					.select("*")
					.order("last_update", { ascending: false })
					.limit(1)
					.single()

			if (getUpdatesError) {
				console.error("Error fetching row:", getUpdatesError)
				return NextResponse.json(
					{
						message: "Database error",
						error: getUpdatesError.message,
					},
					{ status: 500 }
				)
			}

			if (updatesTable) {
				const { data: updatedRow, error: updateError } = await supabase
					.from("updates")
					.update({
						current_mood: getRandomMood(updatesTable.current_mood),
						last_update: randomDateTime,
						updated_at: randomDateTime,
					})
					.eq("id", updatesTable.id)
					.select()

				if (updateError) {
					console.error("Error updating row:", updateError)
					return NextResponse.json(
						{ message: "Update error", error: updateError.message },
						{ status: 500 }
					)
				}

				return NextResponse.json({
					message: "Row updated successfully",
					data: updatedRow,
				})
			} else {
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
					console.error("Error inserting row:", insertError)
					return NextResponse.json(
						{ message: "Insert error", error: insertError.message },
						{ status: 500 }
					)
				}

				return NextResponse.json({
					message: "New row created",
					data: newRow,
				})
			}
		} else {
			return NextResponse.json({ message: "Skipped update for today." })
		}
	} catch (error) {
		console.error("Error:", error)
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		)
	}
}
