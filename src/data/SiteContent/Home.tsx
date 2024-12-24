import { GrEmergency } from 'react-icons/gr'
import { BiReceipt } from 'react-icons/bi'
// import { IoStorefrontOutline, IoRibbonOutline } from "react-icons/io"
import { FaRegHandshake } from 'react-icons/fa'
import { MdOutlineMilitaryTech } from 'react-icons/md'
import { SiCashapp } from 'react-icons/si'
import { SiZelle } from 'react-icons/si'
// import { IoLogoVenmo } from "react-icons/io"
import { FaCcPaypal } from 'react-icons/fa'
import { FaMoneyCheck } from 'react-icons/fa'
import { FaCcAmex } from 'react-icons/fa'
import { FaCcDiscover } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { FaCcVisa } from 'react-icons/fa'
import { IoMdCash } from 'react-icons/io'

const Home = {
  hero: {
    page1: [
      'Professional Repair',
      'Speedy Installation',
      'Superior Quality',
      'Multi-Point Inspection',
    ],
  },
  about: {
    sectionTitle: "DAVID'S GARAGE PRO",
    sectionSubtitle: 'Servicing 100 mile radius of St. Paul, MN',
    sectionText: `Local Garage Door Services in St. Louis Park, MN.
David's Garage Pro has proudly served the St. Louis Park and surrounding areas since 2010. Our owner, David, is a long-time resident of the Twin Cities and is committed to providing excellent customer service and top-quality workmanship. 

At David's Garage Pro, we specialize in garage door repairs, installations, and maintenance for both residential and commercial properties. If we can't assist you with a particular service, we will gladly refer you to a trusted expert who can. Our team is highly skilled, professional, and dedicated to ensuring your complete satisfaction. 

As a business, we are fully insured, and we provide workman's compensation for our team. Our service area covers a wide range of neighborhoods in and around St. Louis Park. Whether you need garage door repairs, replacements, or maintenance, we're here to help keep your garage doors in top shape.`,
    subsribeCallToActionLabel: 'Subscribe for the latest news, promotions and updates',
  },
  service: {
    serviceHours: {
      sectionTitle: 'Service Hours',
      serviceHoursSummary: `Monday - Friday: 7:00 AM - 7:00 PM
						Saturday: 8:00 AM - 5:00 PM
						Sunday: Closed`,
      serviceHoursComplete: {
        monday: '8:00 AM - 6:00 PM',
        tuesday: '8:00 AM - 6:00 PM',
        wednesday: '8:00 AM - 6:00 PM',
        thursday: '8:00 AM - 6:00 PM',
        friday: '8:00 AM - 6:00 PM',
        saturday: 'Closed',
        sunday: 'By Appointment',
      },
    },
    serviceArea: {
      sectionTitle: 'Service Area',
      sectionSubtitle: 'We service the following areas:',
      sectionDescription: 'We service a 100-mile radius of St. Paul, MN',
      areas: [
        'Minneapolis',
        'St. Paul',
        'Maple Grove',
        'Hopkins',
        'Eden Prairie',
        'Burnsville',
        'Osseo',
        'Stillwater',
        'Inver Grove Heights',
        'Forest Lake',
        'Bayport',
        'Circle Pines',
        'Afron',
        'Minnentonka',
        'Lakeville',
        'Vermillion',
        'Andover',
        'Elk River',
        'Savage',
        'Spring Lake Park',
        'Anoka',
        'Hastings',
        'Shakopee',
        'Willernie',
        'Lonk Lake',
        'Chanhasen',
        'St. Paul Park',
        'Champlin',
        'Mendota',
        'Lake Elmo',
        'Hudson',
        'Lakeland',
        'Cottage Grove',
      ],
    },
    paymentDisclaimer: `We even work with insurance companies!`,
    paymentOptions: [
      {
        name: 'Cash',
        icon: IoMdCash,
      },
      {
        name: 'Visa',
        icon: FaCcVisa,
      },
      {
        name: 'Mastercard',
        icon: FaCcMastercard,
      },
      {
        name: 'Discover',
        icon: FaCcDiscover,
      },
      {
        name: 'American Express',
        icon: FaCcAmex,
      },
      {
        name: 'Personal Check',
        icon: FaMoneyCheck,
      },
      {
        name: 'Paypal',
        icon: FaCcPaypal,
      },
      {
        name: 'Cash App',
        icon: SiCashapp,
      },
      // {
      // 	name: "Venmo",
      // 	icon: IoLogoVenmo,
      // },
      {
        name: 'Zelle',
        icon: SiZelle,
      },
    ],
  },
  warranties: {
    sectionTitle: 'Our Warranty',
    image: 'https://i.ibb.co/7yZz1ZL/Icon-1.png',
    installation: `All of our work is backed by a lifetime labor warranty covering 
					any defects in the installation of the product. `,
    manufacturer: `In addition, we work with the manufacturer on your behalf to 
					uphold all the manufacture’s warranties so that if anything were wrong with 
					the product, your covered there too, freeing you from any hassle of talking 
					to customer service reps on the phone, and escalating service charges. We 
					make it easy so you can feel as good as your garage door looks, and works!`,
    productsCallToActionLabel: {
      button: 'Click To View',
      rest: 'the products we carry.',
      link: '/products',
    },
  },
  why: {
    sectionTitle: `Why Choose David's Garage Pro?`,
    sectionDescription: [
      `David's Garage Pro is a dedicated team of bonded and insured technicians provides exceptional residential and commercial garage renovation & repair services in St. Paul & Minneapolis, MN and the surrounding areas. With personalized solutions and affordable pricing, we prioritize your comfort and budget.`,
      `Our lifetime labor warranty options and discounts for seniors, the military, and law enforcement make our high-quality services accessible to all. Experience honest and reliable service and a comfortable home with David's Garage Pro. Don't wait—call now or fill out our form 
						to request a call back and see the David's Garage Pro difference for yourself.`,
    ],
    callToActionButtonText: 'Contact Us Today',
    whyPoints: [
      {
        // icon: IoRibbonOutline,
        icon: FaMoneyCheck,
        title: 'Lifetime Labor Warranty',
      },
      {
        icon: MdOutlineMilitaryTech,
        title: 'Military & Law Enforcement Discounts',
      },
      {
        icon: FaRegHandshake,
        title: 'Honest and Personalized Solutions',
      },
      {
        // icon: IoStorefrontOutline,
        icon: FaRegHandshake,
        title: 'Locally and Family Owned since 2016',
      },
      {
        icon: BiReceipt,
        title: 'Bonded and Insured Technicians',
      },
      {
        icon: GrEmergency,
        title: '24/7 Emergency Services',
      },
    ],
  },
  // reviews: {
  // 	sectionTitle: "Reviews",
  // 	reviewData: {
  // 		average: 4,
  // 		totalCount: 1624,
  // 		counts: [
  // 			{ rating: 5, count: 1019 },
  // 			{ rating: 4, count: 162 },
  // 			{ rating: 3, count: 97 },
  // 			{ rating: 2, count: 199 },
  // 			{ rating: 1, count: 147 },
  // 		],
  // 		featured: [
  // 			{
  // 				id: 1,
  // 				rating: 5,
  // 				content: `<p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>`,
  // 				author: "Emily Selman",
  // 				avatarSrc:
  // 					"https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
  // 			},
  // 		],
  // 	},
  // },
}

export default Home
