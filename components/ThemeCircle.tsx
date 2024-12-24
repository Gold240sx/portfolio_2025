import { cn } from "@/lib/utils"
import { Theme } from "@/app/styles/themes"
import { motion } from "framer-motion"

interface ThemeCircleProps {
	theme: Theme
	isSelected: boolean
	onClick: () => void
}

export function ThemeCircle({ theme, isSelected, onClick }: ThemeCircleProps) {
	return (
		<motion.button
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			onClick={onClick}
			className="relative w-10 h-10 rounded-full cursor-pointer border-2 border-zinc-400"
			style={{
				background: theme.colors.accent,
			}}>
			{isSelected && (
				<motion.div
					layoutId="theme-selection-ring"
					className="absolute inset-0 rounded-full ring-2 ring-offset-2 ring-offset-background ring-primary"
					initial={false}
					transition={{
						type: "spring",
						bounce: 0.2,
						duration: 0.6,
					}}>
					HC
				</motion.div>
			)}
		</motion.button>
	)
}
