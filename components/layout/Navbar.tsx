"use client"
import React from "react"
import { useRouter } from "next/navigation"
import useViewTransition from "@/hooks/useViewTransition"
import Detect from "@/components/detect"

const Navbar: React.FC = () => {
	const { isViewTransition } = useViewTransition()

	const router = useRouter()

	const viewNavigate = (route: string) => {
		return isViewTransition
			? document.startViewTransition(() => {
					router.push(route)
			  })
			: router.push(route)
	}

	return (
		<nav className="w-full bg-white/50 text-black h-fit grid place-items-center p-4">
			<div className="flex flex-col justify-center gap-y-2 gap-4">
				<div className="flex justify-center gap-x-4">
					<button
						className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black/90 transition-colors"
						onClick={() => viewNavigate("/")}>
						Home
					</button>
					<button
						className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black/90 transition-colors"
						onClick={() => viewNavigate("/about")}>
						About
					</button>
					<button
						className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black/90 transition-colors"
						onClick={() => viewNavigate("/portfolio")}>
						Portfolio
					</button>
					<button
						className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-black/90 transition-colors"
						onClick={() => viewNavigate("/contact")}>
						Contact
					</button>
				</div>
				<Detect />
			</div>
		</nav>
	)
}

export default Navbar
