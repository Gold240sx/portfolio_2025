"use client"

import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { useTheme } from "@/lib/hooks/useTheme"
import { Button } from "@/components/ui/button"

interface ContactFormData {
	name: string
	email: string
	message: string
}

export function ContactForm() {
	const { theme } = useTheme()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormData>()

	const onSubmit = (data: ContactFormData) => {
		console.log(data)
		// Handle form submission
	}

	return (
        (<motion.form
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-6"
			style={{
				background: theme.colors.secondary,
				padding: "2rem",
				borderRadius: "1rem",
				border: `1px solid ${theme.colors.border}`,
			}}>
            <div>
				<label
					htmlFor="name"
					className="block text-sm font-medium mb-2"
					style={{ color: theme.colors.text }}>
					Name
				</label>
				<input
					{...register("name", { required: "Name is required" })}
					className="w-full p-3 rounded-lg"
					style={{
						background: theme.colors.primary,
						color: theme.colors.text,
						border: `1px solid ${theme.colors.border}`,
					}}
				/>
				{errors.name && (
					<span className="text-red-500 text-sm">
						{errors.name.message}
					</span>
				)}
			</div>
            <div>
				<label
					htmlFor="email"
					className="block text-sm font-medium mb-2"
					style={{ color: theme.colors.text }}>
					Email
				</label>
				<input
					{...register("email", {
						required: "Email is required",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
							message: "Invalid email address",
						},
					})}
					className="w-full p-3 rounded-lg"
					style={{
						background: theme.colors.primary,
						color: theme.colors.text,
						border: `1px solid ${theme.colors.border}`,
					}}
				/>
				{errors.email && (
					<span className="text-red-500 text-sm">
						{errors.email.message}
					</span>
				)}
			</div>
            <div>
				<label
					htmlFor="message"
					className="block text-sm font-medium mb-2"
					style={{ color: theme.colors.text }}>
					Message
				</label>
				<textarea
					{...register("message", {
						required: "Message is required",
					})}
					rows={5}
					className="w-full p-3 rounded-lg"
					style={{
						background: theme.colors.primary,
						color: theme.colors.text,
						border: `1px solid ${theme.colors.border}`,
					}}
				/>
				{errors.message && (
					<span className="text-red-500 text-sm">
						{errors.message.message}
					</span>
				)}
			</div>
            <Button
				type="submit"
				className="w-full"
				style={{
					background: theme.colors.accent,
					color: theme.colors.primary,
				}}>
				Send Message
			</Button>
        </motion.form>)
    );
}
