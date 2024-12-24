import "./globals.css"
import "./styles/nuemorphic.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/lib/context/ThemeContext"
import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { NavigationProvider } from "@/lib/hooks/useNavigation"

import { LoadingIndicator } from "@/components/layout/LoadingIndicator"
import Navbar from "@/components/layout/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My Professional Portfolio"
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={inter.className}>
				<ThemeProvider>
					<NavigationProvider>
						<LoadingIndicator />
						<ThemeSwitcher />
						{/* <Navbar /> */}
						{children}
					</NavigationProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
