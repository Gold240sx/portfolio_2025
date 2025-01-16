"use client"
import React, { FC, useState, Suspense, useRef, useEffect } from "react"
import "@/styles/styles.css"
import Image from "next/image"
import MainLogoInvert from "@/assets/branding/MainLogo_Invert.svg"
import NewsBanner from "@/app/components/myComponents/Navbar/newsBanner"
import TextCycle from "@/app/components/hover.dev/textCycle"
import Modal from "@/components/Modal"
import { BsFillGrid3X3GapFill, BsSpotify } from "react-icons/bs"
import { Button } from "@/components/shadcn/button"
import { ArrowRight, Mail } from "lucide-react"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/shadcn/tooltip"
import Socials from "../components/myComponents/Footer/socials"
import Loading from "./loading"
import { useSearchParams } from "next/navigation"
import WebPlayback from "../../components/WebPlayback"

const Home: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isMinimized, setIsMinimized] = useState<boolean>(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [showPlayer, setShowPlayer] = useState(false)
	const onClose = () => setIsOpen(false)
	const launchpadButtonRef = useRef<HTMLButtonElement>(null)
	const searchParams = useSearchParams()
	const token = searchParams.get("token")
	const playlistId = "4xyCnJzHbTWO4pvVjErj0D"

	useEffect(() => {
		// Check if we have a token
		if (token) {
			setIsLoggedIn(true)
		}
	}, [token])

	const handleLogin = () => {
		window.location.href = "/api/auth/spotify"
	}

	const handlePlayerClick = () => {
		if (token) {
			// If user is authenticated, just show the player
			setShowPlayer(true)
		} else {
			// If not authenticated, redirect to Spotify auth
			window.location.href = "/api/auth/spotify"
		}
	}

	return (
		<Suspense fallback={<Loading />}>
			<div className="flex flex-col min-h-screen overflow-auto">
				<NewsBanner
					props={{
						newsBanner: {
							newsBannerText:
								"Some really cool stuff is in the works. Stay tuned! In the meantime, check out my 2022 porfolio located at:",
							newsBannerLink: "https://michael-martell.com",
							newsBannerButtonText: "michael-martell.com.",
							newsBannerOpen: true,
							hiddenOnHome: false,
						},
					}}
				/>
				<main className="flex-1 flex flex-col items-center justify-center px-4 py-8 pb-32 bg-neutral-950">
					<Image
						alt="Main Logo"
						className="animate-pulse w-48 mb-10"
						src={MainLogoInvert}
						width={200}
						height={200}
					/>
					<div className="grid gap-6 text-center mb-8">
						<h2 className="text-4xl md:text-5xl font-thin text-teal-300">
							{Array.from("MichaelMartell.com").map(
								(char, idx) => (
									<span
										key={idx}
										className="inline-block hover:text-white hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer">
										{char}
									</span>
								)
							)}
						</h2>
						<TextCycle
							className="text-3xl text-zinc-800 uppercase"
							phrases={[
								"React Developer",
								"Swift Developer",
								"Designer and Artist",
							]}
						/>
					</div>
					<div className="flex flex-col items-center gap-8">
						<div className="flex flex-col sm:flex-row gap-4 items-center">
							{!isMinimized && (
								<Button
									className="group text-lg text-white bg-zinc-900 hover:bg-zinc-800"
									variant="secondary"
									onClick={() => setIsOpen(true)}>
									<Mail
										className="-ms-1 me-2 opacity-60"
										size={16}
									/>
									Contact Me
									<ArrowRight
										className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
										size={9}
									/>
								</Button>
							)}
							<Button
								className="group text-lg bg-[#1DB954] hover:bg-[#1ed760] text-black"
								onClick={handlePlayerClick}>
								<BsSpotify className="-ms-1 me-2" size={20} />
								My Recent Favorites
							</Button>
						</div>
						<div className="flex flex-wrap justify-center gap-4">
							<Socials />
						</div>
					</div>
					{isMinimized && (
						<TooltipProvider>
							<Tooltip delayDuration={400}>
								<TooltipTrigger asChild>
									<button
										ref={launchpadButtonRef}
										onClick={() => setIsOpen(true)}
										className="mt-4 w-fit pointer-events-auto bg-white/50 hover:scale-125 hover:-translate-y-1.5 uppercase transition-all duration-150 ease-in text-black font-bold p-1.5 !rounded-[.8rem] overflow-hidden focus:outline-none focus:ring-2 focus:ring-teal-500">
										<BsFillGrid3X3GapFill className="text-4xl text-white" />
									</button>
								</TooltipTrigger>
								<TooltipContent
									className="dark rounded-[8px] py-2 text-lg tracking-wider text-white font-light border-black bg-neutral-900"
									showArrow={true}>
									Launchpad
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					)}
				</main>
				<div className="fixed bottom-0 w-full">
					{token && showPlayer && (
						<div className="absolute bottom-0 left-0 right-0">
							<WebPlayback
								token={token}
								playlistId={playlistId}
							/>
						</div>
					)}
				</div>
				<Modal
					isOpen={isOpen}
					setIsOpen={setIsOpen}
					onClose={onClose}
					isMinimized={isMinimized}
					setIsMinimized={setIsMinimized}
					launchpadButtonRef={launchpadButtonRef}
				/>
			</div>
		</Suspense>
	)
}

export default Home
