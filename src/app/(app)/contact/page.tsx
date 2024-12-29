"use client"
import TerminalContact from "@/components/hover.dev/terminalContactForm"
import { useState } from "react"

export default function ContactPage() {
	const [isMaximized, setIsMaximized] = useState(false)
	const [isMinimized, setIsMinimized] = useState(false)

	return (
		<div>
			<TerminalContact
				onClose={() => {}} // Add appropriate close handler if needed
				isMaximized={isMaximized}
				setIsMaximized={setIsMaximized}
				isMinimized={isMinimized}
				setIsMinimized={setIsMinimized}
			/>
		</div>
	)
}
