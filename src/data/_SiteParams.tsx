import Home from './SiteContent/Home'
import { FooterNavigation } from './SiteContent/FooterNavigation'
import { AiFillInstagram } from 'react-icons/ai'
import { BsGithub, BsGoogle, BsMeta } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { StaticImageData } from 'next/image'
import { F } from 'node_modules/fumadocs-core/dist/page-tree-r8qjoUla'

type SiteParamsType = {
  title: string
  description: string
  companyName: string
  siteUrl: string
  siteLogo: string
  phoneNo: string
  googleReviewScore: number
  googleReviewCount: number
  googleReviewLink: string
  devMode: boolean
  adminContext?: {
    adminEmail?: string
    clerkAdminRole?: string
    clerkAdminOrg?: string
  }
  usefulLinks: {
    calendly: string
    calendlyChromeExtension: string
    email: string
    googleMyBusiness: string
    zoom: string
    stripe: string
    stripeActivate: string
  }
  SiteContent: {
    pages: {
      Home: typeof Home
    }
    footerNavigation: {
      navItems: {
        name: string
        href: string
        icon: StaticImageData
      }[]
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
  description: 'COMING SOON!',
  companyName: "David's Garage Pro",
  siteUrl: 'https://davidsgarage.pro',
  siteLogo: 'https://i.ibb.co/XZSdzyW/David-s-Garage-Badge.png',
  phoneNo: '(651) 417-2840',
  googleReviewScore: 4.6,
  googleReviewCount: 225,
  googleReviewLink: 'https://g.co/kgs/MVWdAS1',
  devMode: false,
  adminContext: {
    adminEmail: '240designworks@gmail.com',
    clerkAdminRole: 'org:admin',
    clerkAdminOrg: '2024-Portfolio',
  },
  usefulLinks: {
    calendly: 'https://calendly.com/event_types/user/me',
    calendlyChromeExtension:
      'https://chromewebstore.google.com/detail/calendly-meeting-scheduli/cbhilkcodigmigfbnphipnnmamjfkipp?hl=en&pli=1',
    email: 'https://www.microsoft365.com',
    googleMyBusiness:
      "https://www.google.com/maps/place/David's+Urgent+Garage+Door/@45.0073347,-93.2018237,9z/data=!4m8!3m7!1s0x87f62bc6c92a6b23:0x5a34ec3fc21eb41!8m2!3d45.0073347!4d-93.2018237!9m1!1b1!16s%2Fg%2F11qp315hv8?entry=ttu",
    zoom: 'https://zoom.us/',
    stripe: 'https://dashboard.stripe.com/',
    stripeActivate: 'https://dashboard.stripe.com/account/onboarding/bank-account',
  },
  SiteContent: {
    pages: {
      Home,
    },
    ...FooterNavigation,
  },
  storeConfig: {
    CURRENCY: 'usd',
    // Set your amount limits: Use float for decimal currencies and
    // Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.
    MIN_AMOUNT: 10.0,
    MAX_AMOUNT: 5000.0,
    AMOUNT_STEP: 5.0,
  },
}

export default SiteParams
