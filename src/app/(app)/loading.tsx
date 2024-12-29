"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Loading() {
	const [count, setCount] = useState(3)

	useEffect(() => {
		const timer = setInterval(() => {
			setCount((prev) => (prev > 0 ? prev - 1 : 0))
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	return (
		<div className="h-screen w-screen flex items-center justify-center bg-neutral-950">
			<motion.div
				initial={{ scale: 0.5, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.5, opacity: 0 }}
				className="text-center">
				<motion.div
					key={count}
					initial={{ scale: 1.5, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.5, opacity: 0 }}
					className="text-8xl font-bold text-teal-300 mb-4">
					{count || "🚀"}
				</motion.div>
				<motion.p
					animate={{ opacity: [0.5, 1, 0.5] }}
					transition={{ repeat: Infinity, duration: 1.5 }}
					className="text-zinc-500 text-xl">
					Loading awesome stuff...
				</motion.p>
			</motion.div>
		</div>
	)
}
