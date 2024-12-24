"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useTheme } from "@/lib/hooks/useTheme"
import { useNavigation } from "@/lib/hooks/useNavigation"

export function HeroSection() {
	const { theme } = useTheme()
	const { navigate, isPending } = useNavigation()

	return (
		<div className="fixed h-screen w-full flex items-center justify-center">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="text-center">
				<h1
					className="text-6xl font-bold mb-6 text-center"
					style={{ color: theme.colors.text }}>
					John Doe
				</h1>
				<p
					className="text-xl mb-8 text-center"
					style={{ color: theme.colors.text }}>
					Full Stack Developer
				</p>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					className="mx-auto px-8 py-3 rounded-lg flex group items-center gap-2"
					style={{
						background: theme.colors.accent,
						color: theme.colors.primary,
						opacity: isPending ? 0.7 : 1,
						cursor: isPending ? "wait" : "pointer",
					}}
					onClick={() => navigate("/about")}
					disabled={isPending}>
					About Me{" "}
					<ArrowRight className="w-4 h-4 flex !group-hover:pl-6" />
				</motion.button>
			</motion.div>
		</div>
	)
}
