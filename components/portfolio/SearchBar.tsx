"use client"

import { Search } from "lucide-react"
import { useTheme } from "@/lib/hooks/useTheme"

interface SearchBarProps {
	value: string
	onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
	const { theme } = useTheme()

	return (
		<div className="relative">
			<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
			<input
				type="text"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder="Search projects..."
				className="w-full pl-12 pr-4 py-3 rounded-lg"
				style={{
					background: theme.colors.secondary,
					color: theme.colors.text,
					border: `1px solid ${theme.colors.border}`,
				}}
			/>
		</div>
	)
}
