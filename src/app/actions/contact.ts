"use server"

import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL!,
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function submitContactForm(formData: {
	name: string
	email: string
	message: string
}) {
	try {
		const { error } = await supabase.from("contact_form").insert([
			{
				...formData,
				sent_from: "contact_form",
				created_at: new Date().toISOString(),
			},
		])

		if (error) throw error
		return { success: true }
	} catch (err) {
		console.error("Error submitting form:", err)
		return {
			success: false,
			error: "Failed to send message. Please try again.",
		}
	}
}
