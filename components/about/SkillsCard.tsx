"use client"

import { useTheme } from "@/lib/hooks/useTheme"

const SKILLS = ["React", "Node.js", "TypeScript", "AWS", "Next.js", "GraphQL"]

export function SkillsCard() {
	const { theme } = useTheme()

	return (
		<div
			className="p-6 rounded-xl card"
			style={{
				background: theme.colors.secondary,
				border: `1px solid ${theme.colors.border}`,
			}}>
			<h2
				className="text-2xl font-semibold mb-4"
				style={{ color: theme.colors.text }}>
				Skills
			</h2>
			<div className="grid grid-cols-2 gap-8">
				{SKILLS.map((skill) => (
					<div
						key={skill}
						className="p-3 rounded-lg text-center button-secondary button-shadow"
						style={{
							// background: theme.colors.primary,
							color: theme.colors.text,
							// border: `1px solid ${theme.colors.border}`,
						}}>
						{skill}
					</div>
				))}
			</div>
		</div>
	)
}
