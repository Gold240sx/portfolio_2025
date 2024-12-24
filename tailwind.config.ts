import type { Config } from "tailwindcss"

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				// Backgrounds
				"primary-gradient":
					"linear-gradient(270deg, #FF32EB 0%, #FF824C 63%, #FFCD4C 100%)",
				"light-blue-gradient":
					"linear-gradient(to bottom right, #5CC8FC, #34ACFF)",
				"dark-blue-gradient":
					"linear-gradient(to bottom right, #45F2BE, #6CC7DB)",
				"dark-gradient":
					"linear-gradient(to bottom right, #A2DB01, #ADCC01, #6D9301)",
				// Shines
				"light-shine":
					"20px 13px 60px #ffac0b80, -10px -5px 90px #ff51e378, 0px 4px 25px #00000040",
				// "linear-gradient(180deg, #FF32EB 0%, #FF824C 63%, #FFCD4C 100%)",
				"light-blue-shine":
					"20px 13px 120px #ffa800, -10px -5px 120px #5cebff, 0px 4px 25px #00000040, 0px 0px 22.9px 2px #ffffff54",
				// "linear-gradient(180deg, #00C8F4 0%, #FFE500 100%)",
				"dark-blue-shine":
					"20px 13px 120px #ffe500b2, -10px -5px 120px #00c8f4, 0px 4px 25px #00000040, 0px 0px 22.9px 2px #ffffff54",
				// "linear-gradient(180deg, #00C8F4 0%, #FFE500 100%)",
				"dark-shine":
					"20px 13px 120px #34a300b2, -10px -5px 120px #e6ff52b2, 0px 4px 25px #00000040, 0px 0px 22.9px 2px #ffffff54",
				// "linear-gradient(180deg, #E6FF52 0%, #34A300 100%)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					"1": "hsl(var(--chart-1))",
					"2": "hsl(var(--chart-2))",
					"3": "hsl(var(--chart-3))",
					"4": "hsl(var(--chart-4))",
					"5": "hsl(var(--chart-5))",
				},
			},
			keyframes: {
				"accordion-down": {
					from: {
						height: "0",
					},
					to: {
						height: "var(--radix-accordion-content-height)",
					},
				},
				"accordion-up": {
					from: {
						height: "var(--radix-accordion-content-height)",
					},
					to: {
						height: "0",
					},
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({
			addVariant,
		}: {
			addVariant: (name: string, selector: string) => void
		}) {
			addVariant("light-blue", ".light-blue &")
			addVariant("dark-blue", ".dark-blue &")
			addVariant("light-hc", ".light-hc &")
			addVariant("dark-hc", ".dark-hc &")
		},
	],
}
export default config
