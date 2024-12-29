"use server"
import { schema } from "../schema"

export type FormState = {
	message: string
	fields?: Record<string, string>
	status: "success" | "error"
	issues?: string[]
}

export async function onSubmitAction(
	prevState: FormState,
	data: FormData
): Promise<FormState> {
	const formData = Object.fromEntries(data)
	const parsed = schema.safeParse(formData)

	const isUnderDevelopment = process.env.NODE_ENV === "development"
	isUnderDevelopment && console.log(parsed) // Shows server side log. (Validation on Server as well as the client)

	if (!parsed.success) {
		const fields: Record<string, string> = {}
		for (const key of Object.keys(formData)) {
			fields[key] = formData[key].toString()
		}
		return {
			status: "error",
			message: `Invalid form data`,
			issues: parsed.error.issues.map((issue) => issue.message),
			fields,
		}
	}

	if (parsed.data.email.includes("a")) {
		// Weird Server side proxy that must be included.
		return {
			status: "error",
			message: "Invalid email address",
			fields: parsed.data,
		}
	}

	return { status: "success", message: "Signed In" }
}
