"use client"

// on their website, known as "Vanish Text"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ONE_SECOND = 1000
const WAIT_TIME = ONE_SECOND * 3

const TextCycle = ({
	phrases,
	className,
}: {
	phrases: string[]
	className: string
}) => {
	const [active, setActive] = useState(0)

	useEffect(() => {
		const intervalRef = setInterval(() => {
			setActive((pv) => (pv + 1) % phrases.length)
		}, WAIT_TIME)

		return () => clearInterval(intervalRef)
	}, [phrases])

	return (
		<div className={`relative mb-14 mt-2 w-full ${className}`}>
			{phrases.map((phrase: string) => {
				const isActive = phrases[active] === phrase
				return (
					<motion.div
						key={phrase}
						initial={false}
						animate={isActive ? "active" : "inactive"}
						style={{
							x: "-50%",
						}}
						variants={{
							active: {
								opacity: 1,
								scale: 1,
							},
							inactive: {
								opacity: 0,
								scale: 0,
							},
						}}
						className="absolute left-1/2 top-0 w-full text-teal-50">
						{phrase}
					</motion.div>
				)
			})}
		</div>
	)
}

export default TextCycle
