"use server"
import { schema } from "../schema"
// import { SignUp } from './signUp'

export type FormState = {
	message: string
	fields?: Record<string, string>
	status: "success" | "error" | ""
	issues?: string[]
}

export async function onSubmitAction(
	prevState: FormState,
	data: FormData
): Promise<FormState> {
	const formData = Object.fromEntries(data)
	const parsed = schema.safeParse(formData)

	console.log("Parsed", parsed)

	const isUnderDevelopment = process.env.NODE_ENV === "development"
	// isUnderDevelopment &&
	// Shows server side log. (Validation on Server as well as the client)

	const issues = parsed.error?.issues.map((issue) => issue.message)

	if (!parsed.success) {
		const fields: Record<string, string> = {}
		for (const key of Object.keys(formData)) {
			fields[key] = formData[key].toString()
		}
		return {
			status: "error",
			message: `Invalid form data`,
			issues,
			fields,
		}
	}

	if (parsed.data.email.includes("a") && isUnderDevelopment) {
		console.log("is under development")
		// Weird Server side proxy that must be included, but this test by default is only to show where server side validation is done.
		return {
			status: "error",
			message: "Invalid email address",
			fields: parsed.data,
		}
	}

	try {
		// const result = await SignUp(parsed.data)
		const result = {
			success: false,
			error: "Need to modify 'app/sign-up/actions/signUp.tsx' function according to Payload requirements.",
		}
		if (!result.success) {
			return {
				status: "error",
				message: result.error?.toString() || "An error occurred",
			}
		}
		return { status: "success", message: "Creating Account" }
	} catch (error) {
		return { status: "error", message: "An unknown error occurred" }
	}
}
