"use client"

import { useState } from "react"
import { PageContainer } from "@/components/layout/PageContainer"
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid"
import { SearchBar } from "@/components/portfolio/SearchBar"

interface PortfolioFiltersProps {
	selectedTech: string[]
	onTechChange: (tech: string[]) => void
	sortBy: "recent" | "rated"
	onSortChange: (sort: "recent" | "rated") => void
}

export function PortfolioFilters({
	selectedTech,
	onTechChange,
	sortBy,
	onSortChange,
}: PortfolioFiltersProps) {
	const toggleTech = (tech: string) => {
		const newSelectedTech = selectedTech.includes(tech)
			? selectedTech.filter((t) => t !== tech)
			: [...selectedTech, tech]
		onTechChange(newSelectedTech)
	}

	return (
		<div>
			{/* Render tech filters */}
			<div>
				{selectedTech.map((tech, index) => (
					<button key={index} onClick={() => toggleTech(tech)}>
						{tech}
					</button>
				))}
			</div>
			{/* Render sort options */}
			<div>
				<button
					onClick={() => onSortChange("recent")}
					className={sortBy === "recent" ? "active" : ""}>
					Recent
				</button>
				<button
					onClick={() => onSortChange("rated")}
					className={sortBy === "rated" ? "active" : ""}>
					Rated
				</button>
			</div>
		</div>
	)
}

export default function Portfolio() {
	const [searchQuery, setSearchQuery] = useState("")
	const [selectedTech, setSelectedTech] = useState<string[]>([])
	const [sortBy, setSortBy] = useState<"recent" | "rated">("recent")

	return (
		<PageContainer>
			<div className="max-w-7xl mx-auto px-4 py-20">
				<div className="space-y-8">
					<SearchBar value={searchQuery} onChange={setSearchQuery} />
					<PortfolioFilters
						selectedTech={selectedTech}
						onTechChange={setSelectedTech}
						sortBy={sortBy}
						onSortChange={setSortBy}
					/>
					{/* <PortfolioGrid
						searchQuery={searchQuery}
						selectedTech={selectedTech}
						sortBy={sortBy}
					/> */}
				</div>
			</div>
		</PageContainer>
	)
}
