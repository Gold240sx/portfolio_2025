"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Palette } from "lucide-react"
import { themes, Theme } from "../app/styles/themes"
import { useTheme } from "@/lib/hooks/useTheme"
import { Button } from "./ui/button"

export function ThemeSwitcher() {
	const { theme, setTheme, cycleTheme } = useTheme()
	const [isOpen, setIsOpen] = React.useState(true)

	return (
		<div className="fixed top-4 right-4 z-50">
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle theme selector">
				<Palette className="h-[1.2rem] w-[1.2rem]" />
			</Button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -10 }}
						transition={{ duration: 0.2 }}
						style={{
							background: theme.colors.secondary,
						}}
						className="absolute right-0 mt-2 p-2  bg-background border border-border rounded-full shadow-lg ease-in-out duration-300 transition-all">
						<div className="grid grid-cols-6 gap-2 !min-w-[300px]">
							{themes.map((t: Theme) => (
								<ThemeOption
									key={t.id}
									theme={t}
									isSelected={theme.id === t.id}
									onClick={() => setTheme(t)}
								/>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

interface ThemeOptionProps {
	theme: Theme
	isSelected: boolean
	onClick: () => void
}

function ThemeOption({ theme, isSelected, onClick }: ThemeOptionProps) {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={onClick}
			className="relative w-8 h-8 rounded-full overflow-hidden shadow-md shadow-black/30"
			style={{
				background: theme.colors.accent,
			}}
			aria-label={`Select ${theme.name} theme`}>
			{isSelected && (
				<motion.div
					layoutId="selectedRing"
					className="absolute inset-0 border-2 border-primary rounded-full"
					initial={false}
					transition={{ type: "spring", stiffness: 300, damping: 30 }}
				/>
			)}
		</motion.button>
	)
}
