"use client"

import { motion } from "framer-motion"

import Image from "next/image"
import { type Project } from "@/lib/types"
import { FaStar, FaGithub, FaExternalLinkAlt } from "react-icons/fa"

interface ProjectCardProps {
	project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
			<div className="relative h-48">
				<Image
					src={project.image}
					alt={project.title}
					fill
					className="object-cover"
				/>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-bold mb-2">{project.title}</h3>
				<p className="text-gray-600 dark:text-gray-300 mb-4">
					{project.description}
				</p>
				<div className="flex flex-wrap gap-2 mb-4">
					{project.technologies.map((tech: string) => (
						<span
							key={tech}
							className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded">
							{tech}
						</span>
					))}
				</div>
				<div className="flex justify-between items-center">
					<div className="flex items-center">
						{[...Array(project.rating)].map((_, i) => (
							<FaStar key={i} className="text-yellow-400" />
						))}
					</div>
					<div className="flex gap-4">
						{project.github && (
							<a
								href={project.github}
								target="_blank"
								rel="noopener noreferrer">
								<FaGithub className="text-xl hover:text-blue-500" />
							</a>
						)}
						{project.demo && (
							<a
								href={project.demo}
								target="_blank"
								rel="noopener noreferrer">
								<FaExternalLinkAlt className="text-xl hover:text-blue-500" />
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
import { projects } from "@/lib/data/projects"

interface PortfolioGridProps {
	searchQuery: string
	selectedTech: string[]
	sortBy: "recent" | "rated"
}

export function PortfolioGrid({
	searchQuery,
	selectedTech,
	sortBy,
}: PortfolioGridProps) {
	const filteredProjects = projects
		.filter((project) => {
			const matchesSearch =
				project.title
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) ||
				project.description
					.toLowerCase()
					.includes(searchQuery.toLowerCase())
			const matchesTech =
				selectedTech.length === 0 ||
				project.technologies.some((tech) => selectedTech.includes(tech))
			return matchesSearch && matchesTech
		})
		.sort((a, b) => {
			if (sortBy === "recent") {
				return new Date(b.date).getTime() - new Date(a.date).getTime()
			}
			return b.rating - a.rating
		})

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{filteredProjects.map((project, index) => (
				<motion.div
					key={project.id}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.1 }}>
					<ProjectCard project={project} />
				</motion.div>
			))}
		</div>
	)
}
