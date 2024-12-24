"use client"

import { PageContainer } from "@/components/layout/PageContainer"
import { ContactForm } from "@/components/contact/ContactForm"

const ContactInfo = () => {
	return (
		<div className="space-y-4">
			<h1 className="text-4xl font-bold">Contact Me</h1>
			<p className="text-lg">
				Im available for freelance work. If you have a project in mind
				or need help with anything, feel free to contact me.
			</p>
			<div className="flex gap-4">
				<a
					href="mailto:johndoe@gmail.com"
					className="text-blue-500 hover:underline">
					email me
				</a>
				<a
					href="tel:+1234567890"
					className="text-blue-500 hover:underline">
					call me
				</a>
			</div>
		</div>
	)
}

export default function Contact() {
	return (
		<PageContainer>
			<div className="max-w-7xl mx-auto px-4 py-20">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
		</PageContainer>
	)
}
