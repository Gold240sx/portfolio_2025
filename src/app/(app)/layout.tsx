import React, { ReactNode } from "react"
import type { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"
import { CSPostHogProvider } from "@/context/providers"
import { Toaster } from "@/components/shadcn/toaster"
import { applicationName, appConfig } from "@/app-config"
import { BreakpointOverlay } from "@/components/breakpoint-overlay"
const { mode } = appConfig
import "fumadocs-ui/style.css"
import "@/styles/styles.css"
import RoundedDrawerNav from "../components/layout/roundedDrawerNav"
import Footer from "../components/layout/footer/footer"
import SiteParams from "@/data/_SiteParams"
import Image from "next/image"
import MainLogoInvert from "@/assets/branding/MainLogo_Invert.svg"
import FuzzyOverlay from "@/components/hover.dev/fuzzyOverlay"
import styles from "./bubble.module.css"
import NewsBanner from "../components/myComponents/Navbar/newsBanner"
import TextCycle from "../components/hover.dev/textCycle"

export const metadata: Metadata = {
	title:
		process.env.NODE_ENV === "development"
			? `DEV - ${applicationName} `
			: applicationName,
	icons: [
		{ rel: "icon", type: "image/png", sizes: "48x48", url: "/favicon.ico" },
	],
	keywords:
		"Web App Development, Web Development, Web Design, Web Development Company, Web Development Services, Web Development Agency, American Web Development Company, American Web Development Services, American Web Development Agency",
	description: "Michael Martell Portfolio",
	openGraph:
		mode === "comingSoon"
			? {
					title: "MichaelMartell.com",
					description:
						"Michael Martell's personal portfolio website. Coming soon!",
					url: "https://michaelmartell.com",
					siteName: "Michael Martell",
					type: "website",
					images: [
						{
							url: "https://wdcstarterkit.com/starterkitcard.png",
							secureUrl:
								"https://wdcstarterkit.com/starterkitcard.png",
							width: 800,
							height: 418,
							alt: "The MichaelMartell.com social media card image",
						},
					],
				}
			: undefined,
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	const { isUnderDevelopment } = SiteParams

	return (
		<html lang="en" suppressHydrationWarning>
			<body className="min-h-screen h-fit bg-background antialiased relative">
				<NextTopLoader />
				<CSPostHogProvider>
					{isUnderDevelopment && (
						<div className="relative overflow-hidden h-screen">
							<NewsBanner
								props={{
									newsBanner: {
										newsBannerText:
											"Some really cool stuff is in the works. Stay tuned! In the meantime, check out my outgoing porfolio located at:",
										newsBannerLink:
											"https://michael-martell.com",
										newsBannerButtonText:
											"michael-martell.com.",
										newsBannerOpen: true,
										hiddenOnHome: false,
									},
								}}
							/>
							<div className="flex-grow max-w-screen flex-col w-full h-full bg-neutral-950 text-white text-6xl font-semibold text-center place-items-center justify-center flex">
								<Image
									alt="Main Logo"
									className="animate-pulse w-48"
									src={MainLogoInvert}
									width={200}
									height={200}
								/>
								<div className="grid flex-wrap mt-10 text-4xl">
									<h2 className="text-center text-5xl font-thin text-teal-300 cursor-pointer">
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
								</div>
								<TextCycle
									className="text-3xl text-zinc-600"
									phrases={[
										"COMING SOON!",
										"Working on it!",
										"Cool stuff in the works!",
									]}
								/>
							</div>
							<FuzzyOverlay />
						</div>
					)}
					{!isUnderDevelopment && (
						<div className="flex-grow w-full h-full bg-black text-white text-6xl font-semibold text-center place-items-center justify-center flex">
							<RoundedDrawerNav>{children}</RoundedDrawerNav>
						</div>
					)}
				</CSPostHogProvider>
				<BreakpointOverlay />
				<Toaster />
			</body>
		</html>
	)
}
