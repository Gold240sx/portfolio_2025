import { NextRequest, NextResponse } from "next/server"

const CRON_JOB_SECRET = process.env.CRON_JOB_SECRET

export async function POST(request: NextRequest) {
	try {
		// Get authorization header
		const authHeader = request.headers.get("authorization")
		if (!authHeader || authHeader !== `Bearer ${CRON_JOB_SECRET}`) {
			return NextResponse.json(
				{ message: "Unauthorized" },
				{ status: 401 }
			)
		}

		return NextResponse.json({ message: "Method worked" }, { status: 200 })
	} catch (error) {
		console.error("Error:", error)
		return NextResponse.json(
			{ message: "Internal server error" },
			{ status: 500 }
		)
	}
}
