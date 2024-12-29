"use client"
import TerminalContact from "@/components/hover.dev/terminalContactForm"
import { useRef, useState } from "react"

export default function ContactPage() {
	const [isMaximized, setIsMaximized] = useState(false)
	const [isMinimized, setIsMinimized] = useState(false)
	const launchpadButtonRef = useRef<HTMLButtonElement>(null)

	return (
		<div>
			<TerminalContact
				onClose={() => {}}
				isMaximized={isMaximized}
				setIsMaximized={setIsMaximized}
				isMinimized={isMinimized}
				setIsMinimized={setIsMinimized}
				launchpadButtonRef={launchpadButtonRef}
				onMinimize={() => {
					setTimeout(() => {
						launchpadButtonRef.current?.focus()
					}, 100)
				}}
			/>
		</div>
	)
}
