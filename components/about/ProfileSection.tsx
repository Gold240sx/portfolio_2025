"use client"

import Image from "next/image"
import { useTheme } from "@/lib/hooks/useTheme"
import { SkillsCard } from "./SkillsCard"

export function ProfileSection() {
	const { theme } = useTheme()

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			<div className="relative h-[400px] rounded-2xl overflow-hidden">
				<Image
					src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
					alt="Profile"
					priority={true}
					fill
					className="object-cover"
				/>
			</div>
			<div>
				<h1
					className="text-4xl font-bold mb-6"
					// style={{ color: theme.colors.text }}
				>
					About Me
				</h1>
				<p
					className="text-lg mb-6 leading-relaxed"
					style={{ color: theme.colors.text }}>
					Im a passionate Full Stack Developer with over 5 years of
					experience building modern web applications. I specialize in
					React, Node.js, and cloud technologies.
				</p>
				<SkillsCard />
				<div
					className="card-transparent w-[600px] h-[300px] border p-4 absolute -m-20 mr-[500px]"
					style={{}}>
					hello
				</div>
			</div>
		</div>
	)
}
