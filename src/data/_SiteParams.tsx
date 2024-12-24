import Home from "./SiteContent/Home"
import { FooterNavigation } from "./SiteContent/FooterNavigation"
import { AiFillInstagram } from "react-icons/ai"
import { BsGithub, BsGoogle, BsMeta } from "react-icons/bs"
import { ImLinkedin } from "react-icons/im"
import { StaticImageData } from "next/image"
import { F } from "node_modules/fumadocs-core/dist/page-tree-r8qjoUla"

type SiteParamsType = {
	title: string
	description: string
	companyName: string
	siteUrl: string
	siteLogo: string
	phoneNo: string
	googleReviewScore?: number
	googleReviewCount?: number
	googleReviewLink?: string
	devMode: boolean
	isUnderDevelopment?: boolean
	adminContext?: {
		adminEmail?: string
	}
	usefulLinks: {
		email: string
		stripe: string
		stripeActivate: string
	}
	SiteContent: {
		pages: {
			Home: typeof Home
		}
		footerNavigation: {
			navItems:
				| {
						name: string
						href: string
						icon: StaticImageData
				  }[]
				| {}
		}
	}
	storeConfig: {
		CURRENCY: string
		MIN_AMOUNT: number
		MAX_AMOUNT: number
		AMOUNT_STEP: number
	}
}

const SiteParams: SiteParamsType = {
	title: "DAVID'S GARAGE PRO",
	description: "COMING SOON!",
	companyName: "David's Garage Pro",
	siteUrl: "https://davidsgarage.pro",
	siteLogo: "https://i.ibb.co/XZSdzyW/David-s-Garage-Badge.png",
	phoneNo: "(651) 417-2840",
	googleReviewScore: 4.6,
	googleReviewCount: 225,
	googleReviewLink: "https://g.co/kgs/MVWdAS1",
	devMode: false,
	isUnderDevelopment: true,
	adminContext: {
		adminEmail: "240designworks@gmail.com",
	},
	usefulLinks: {
		email: "https://www.microsoft365.com",
		stripe: "https://dashboard.stripe.com/",
		stripeActivate:
			"https://dashboard.stripe.com/account/onboarding/bank-account",
	},
	SiteContent: {
		pages: {
			Home,
		},
		footerNavigation: {
			navItems: FooterNavigation,
		},
	},
	storeConfig: {
		CURRENCY: "usd",
		// Set your amount limits: Use float for decimal currencies and
		// Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.
		MIN_AMOUNT: 10.0,
		MAX_AMOUNT: 5000.0,
		AMOUNT_STEP: 5.0,
	},
}

export default SiteParams
