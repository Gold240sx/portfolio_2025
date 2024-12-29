"use client"
import React, { FC, useState, Suspense, useRef } from "react"
import "@/styles/styles.css"
import Image from "next/image"
import MainLogoInvert from "@/assets/branding/MainLogo_Invert.svg"
import NewsBanner from "@/app/components/myComponents/Navbar/newsBanner"
import TextCycle from "@/app/components/hover.dev/textCycle"
import styles from "./styles/bubble.module.css"
import Modal from "@/components/Modal"
import { BsFillGrid3X3GapFill } from "react-icons/bs"
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

const Home: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [isMinimized, setIsMinimized] = useState<boolean>(false)
	const onClose = () => setIsOpen(false)
	const launchpadButtonRef = useRef<HTMLButtonElement>(null)

	return (
		<Suspense fallback={<Loading />}>
			<div className="flex flex-col h-full">
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
				<div className="relative h-full flex-col bg-neutral-950 text-white text-6xl font-semibold text-center place-items-center justify-center flex">
					<Image
						alt="Main Logo"
						className="animate-pulse w-48"
						src={MainLogoInvert}
						width={200}
						height={200}
					/>
					<div className="grid flex-wrap mt-10 z-50 cursor-pointer text-3xl text-zinc-600 space-y-3 pb-6">
						<h2 className="hoverText text-center text-5xl font-thin text-teal-300 pb-2">
							{"MichaelMartell.com"
								.split("")
								.map((child, idx) => (
									<span
										className={styles.hoverText}
										key={idx}>
										{child}
									</span>
								))}
						</h2>
						COMING SOON!
					</div>
					<TextCycle
						className="text-3xl !text-zinc-800 uppercase"
						phrases={[
							"React Developer",
							"Swift Developer",
							"Designer and Artist",
						]}
					/>
					{!isMinimized && (
						<Button
							className="group text-lg bg-zinc-900 hover:bg-zinc-800"
							variant="secondary"
							onClick={() => setIsOpen(true)}>
							<Mail
								className="-ms-1 me-2 opacity-60 font-semibold text-lg"
								size={16}
								strokeWidth={3}
								aria-hidden="true"
							/>
							Contact Me
							<ArrowRight
								className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5 !group-hover:translate-y-0.5 font-semibold text-lg"
								size={9}
								strokeWidth={3}
								aria-hidden="true"
							/>
						</Button>
					)}
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
									className="dark rounded-[8px] py-2 text-lg tracking-wider text-white font-light border-black"
									showArrow={true}>
									Launchpad
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
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
				<div className="absolute bottom-0 right-4 p-4 flex gap-4 text-white text-xs">
					<Socials />
				</div>
			</div>
		</Suspense>
	)
}

export default Home
