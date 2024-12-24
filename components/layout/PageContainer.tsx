"use client"

import { motion } from "framer-motion"
import { useTheme } from "@/lib/hooks/useTheme"
import { useNavigation } from "@/lib/hooks/useNavigation"
import { ReactNode } from "react"
import Navbar from "./Navbar"

interface PageContainerProps {
	children: ReactNode
	className?: string
}

export function PageContainer({
	children,
	className = "",
}: PageContainerProps) {
	const { theme } = useTheme()
	const { isPending } = useNavigation()

	return (
		<main
			className={`min-h-screen w-full transition-colors duration-300 ${className}`}
			style={{
				background: theme.background,
				opacity: isPending ? 0.7 : 1,
			}}>
			<Navbar />
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}>
				{children}
				{/* <div
					className="m-0 transition-all ease-in-out !duration-300"
					style={{
						background: theme.backgroundOverlay,
						width: "100vw",
						height: "100vh",
					}}></div> */}
			</motion.div>
		</main>
	)
}
