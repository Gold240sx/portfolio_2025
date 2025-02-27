import {
	Body,
	Column,
	Container,
	Head,
	Hr,
	Html,
	Img,
	Link,
	Preview,
	Row,
	Section,
	Text,
} from "@react-email/components"

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
	// dev code
} else {
	// production code
}
const baseUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "https://stacklistPro.dev/"

// Update the Logo URL to the base URL before deployment.
const logoUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: ""
const recieptNumber = "123456789"
const accountId = "123456789"
type ProductsMapType = {
	name: string
	description: string
	price: string
	icon: string
	renews: string
}

const productPurchases = process.env.PRODUCT_PURCHASES
	? JSON.parse(process.env.PRODUCT_PURCHASES)
	: {
			products: [
				{
					name: "StackListPro",
					description:
						"StackListPro Subscription (Monthly - Single Dev) - Configurations addon, guides, and more!",
					price: "$14.99",
					renews: "July 1, 2024",
					icon: `${logoUrl}/static/stackListPro/StackSquare.png`,
				},
				{
					name: "Next.js (14)",
					description:
						"Next.Js 14 - Complete interlocking Code base Stack Platform. Access to all Frameworks Stack Bases (React, Angular, Vue, etc.).",
					price: "$29.99",
					icon: `${logoUrl}/static/stackListPro/NextJS.png`,
				},
				{
					name: "Tailwind CSS - SASS Interworking",
					description: "Tailwind CSS (v3)",
					price: "$14.95",
					icon: `${logoUrl}/static/stackListPro/TailwindSass.png`,
				},
				{
					name: "Shadcn / Aceturnity Integration",
					description: "ShadCn / Aceturnity integration.",
					price: "$4.99",
					icon: `${logoUrl}/static/stackListPro/ShadAce.png`,
				},
				{
					name: "Charts Megapack",
					description:
						"Charting Megapack - All charts in one package.",
					price: "$69.99",
					icon: `${logoUrl}/static/stackListPro/Charts.png`,
				},
				{
					name: "Clerk Customer Authentication Package",
					description:
						"Customer Authentication Package / Schema for production database deployment configuration.",
					price: "$19.99",
					icon: `${logoUrl}/static/stackListPro/ClerkLogo.png`,
				},
				{
					name: "Clerk Business Authentication Package",
					description:
						"Business Authentication Package / Schema for production database deployment configuration.",
					price: "$39.99",
					icon: `${logoUrl}/static/stackListPro/ClerkLogo.png`,
				},
				{
					name: "XataDB Integration",
					description:
						"Xata Integration for your website. Includes all necessary documentation + packages for including Auth, CRUD, and more.",
					price: "$39.99",
					icon: `${logoUrl}/static/stackListPro/XataDB.png`,
				},
				{
					name: "Stripe Integration",
					description:
						"Stripe Integration for your website. Interlocking docs meshes perfect with all our frameworks options we provide.",
					price: "$39.99",
					icon: `${logoUrl}/static/stackListPro/Stripe.png`,
				},
				{
					name: "React Email / Resend Integration",
					description:
						"React Email / Resend Email Integration. Full documentation - Docs.",
					price: "$39.99",
					icon: `${logoUrl}/static/stackListPro/ReactEmailResend.png`,
				},
				{
					name: "Payload CMS (v3) Integration",
					description: "Payload CMS Integration.",
					price: "$16.95",
					icon: `${logoUrl}/static/stackListPro/Payload.png`,
				},
			],
	  }

export const StackListProReceiptEmail = () => (
	<Html>
		<Head />
		<Preview>StackListPro Receipt</Preview>
		<Body style={main}>
			<Container style={container}>
				<Section>
					<Row>
						<Column>
							<Img
								src={`${logoUrl}/static/StackListLogo.png`}
								width="199"
								height="84"
								alt="StackListPro Logo"
							/>
						</Column>

						<Column align="right" style={tableCell}>
							<Text style={heading}>Receipt</Text>
						</Column>
					</Row>
				</Section>
				<Section>
					<Text style={cupomText}>
						Access your downloads here:{" "}
						<Link href={`${baseUrl}receipts/${recieptNumber}`}>
							My StackList Library
						</Link>
					</Text>
				</Section>
				<Section style={informationTable}>
					<Row style={informationTableRow}>
						<Column colSpan={2}>
							<Section>
								<Row>
									<Column style={informationTableColumn}>
										<Text style={informationTableLabel}>
											STACKLIST ID
										</Text>
										<Link
											style={{
												...informationTableValue,
												color: "#15c",
												textDecoration: "underline",
											}}>
											alan.turing@gmail.com
										</Link>
									</Column>
								</Row>

								<Row>
									<Column style={informationTableColumn}>
										<Text style={informationTableLabel}>
											INVOICE DATE
										</Text>
										<Text style={informationTableValue}>
											18 Jan 2023
										</Text>
									</Column>
								</Row>

								<Row>
									<Column style={informationTableColumn}>
										<Text style={informationTableLabel}>
											ORDER ID
										</Text>
										<Link
											style={{
												...informationTableValue,
												color: "#15c",
												textDecoration: "underline",
											}}>
											ML4F5L8522
										</Link>
									</Column>
									<Column style={informationTableColumn}>
										<Text style={informationTableLabel}>
											DOCUMENT NO.
										</Text>
										<Text style={informationTableValue}>
											186623754793
										</Text>
									</Column>
								</Row>
							</Section>
						</Column>
						<Column style={informationTableColumn} colSpan={2}>
							<Text style={informationTableLabel}>BILLED TO</Text>
							<Text style={informationTableValue}>
								Visa .... 7461 (Apple Pay)
							</Text>
							<Text style={informationTableValue}>
								Alan Turing
							</Text>
							<Text style={informationTableValue}>
								2125 Chestnut St
							</Text>
							<Text style={informationTableValue}>
								San Francisco, CA 94123
							</Text>
							<Text style={informationTableValue}>USA</Text>
						</Column>
					</Row>
				</Section>
				<Section style={productTitleTable}>
					<Text style={productsTitle}>STACKLIST PRODUCT(S)</Text>
				</Section>
				{productPurchases.products.map(
					(product: ProductsMapType, index: number) => (
						<Section key={index}>
							<Row>
								<Column style={{ width: "64px" }}>
									<Img
										src={product.icon}
										width="64"
										height="64"
										alt="HBO Max"
										style={productIcon}
									/>
								</Column>
								<Column style={{ paddingLeft: "22px" }}>
									<Text style={productTitle}>
										{product.name}
									</Text>
									<Text style={productDescription}>
										{product.description}
									</Text>
									<Text style={productDescription}>
										{product.renews && (
											<>
												Renews on{" "}
												<span style={supStyle}>
													{product.renews}
												</span>
											</>
										)}
									</Text>
									<Link
										href={`${baseUrl}/account/${accountId}/subscriptions/${product.name}`}
										style={productLink}
										data-saferedirecturl="https://www.google.com/url?q=https://userpub.itunes.apple.com/WebObjects/MZUserPublishing.woa/wa/addUserReview?cc%3Dus%26id%3D1497977514%26o%3Di%26type%3DSubscription%2520Renewal&amp;source=gmail&amp;ust=1673963081204000&amp;usg=AOvVaw2DFCLKMo1snS-Swk5H26Z1">
										Write a Review
									</Link>
									<span style={divisor}>|</span>
									<Link
										href="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/reportAProblem?a=1497977514&amp;cc=us&amp;d=683263808&amp;o=i&amp;p=29065684906671&amp;pli=29092219632071&amp;s=1"
										style={productLink}
										data-saferedirecturl="https://www.google.com/url?q=https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/reportAProblem?a%3D1497977514%26cc%3Dus%26d%3D683263808%26o%3Di%26p%3D29065684906671%26pli%3D29092219632071%26s%3D1&amp;source=gmail&amp;ust=1673963081204000&amp;usg=AOvVaw3y47L06B2LTrL6qsmaW2Hq">
										Report a Problem
									</Link>
								</Column>

								<Column
									style={productPriceWrapper}
									align="right">
									<Text style={productPrice}>
										{product.price}
									</Text>
								</Column>
							</Row>
							<Hr style={productPriceLine} />
						</Section>
					)
				)}
				<Section align="right">
					<Row>
						<Column style={tableCell} align="right">
							<Text style={productPriceTotal}>SUBTOTAL</Text>
						</Column>
						<Column style={productPriceVerticalLine}></Column>
						<Column style={productPriceLargeWrapper}>
							<Text style={productPriceLarge}>$251.83</Text>
						</Column>
					</Row>
				</Section>
				<Section align="right">
					<Row>
						<Column style={tableCell} align="right">
							<Text style={productPriceTotal}>TAXES (10%)</Text>
						</Column>
						<Column style={productPriceVerticalLine}></Column>
						<Column style={productPriceLargeWrapper}>
							<Text style={productPriceLarge}>$25.18</Text>
						</Column>
					</Row>
				</Section>
				<Section align="right">
					<Row>
						<Column style={tableCell} align="right">
							<Text style={productPriceTotal}>TOTAL</Text>
						</Column>
						<Column style={productPriceVerticalLine}></Column>
						<Column style={productPriceLargeWrapper}>
							<Text style={productPriceLarge}>$277.01</Text>
						</Column>
					</Row>
				</Section>
				<Hr style={productPriceLineBottom} />
				<Section>
					<Row>
						<Column align="center" style={block}>
							<Img
								src={`${logoUrl}/static/stackListPro/StackListLogo.png`}
								width="240"
								height="114"
								alt="Apple Card"
							/>
						</Column>
					</Row>
				</Section>
				<Section>
					<Row>
						<Column align="center" style={ctaTitle}>
							<Text style={cupomText}>
								Access your downloads here:{" "}
								<Link
									href={`${baseUrl}receipts/${recieptNumber}`}>
									My StackList Library
								</Link>
							</Text>
						</Column>
					</Row>
				</Section>

				<Text style={footerTextCenter}>
					{" "}
					You have the option to stop receiving email receipts for
					your subscription renewals. If you have opted out, you can
					still view your receipts in your account under Purchase
					History. To manage receipts or to opt in again, go to{" "}
					<Link href="https://finance-app.itunes.apple.com/account/subscriptions?unsupportedRedirectUrl=https://apps.apple.com/US/invoice">
						Account Settings.
					</Link>
				</Text>
				<Section>
					<Row>
						<Column align="center" style={footerIcon}>
							<Img
								src={`${logoUrl}/static/stackListPro/StackSquare.png`}
								width="26"
								height="26"
								alt="Apple Card"
							/>
						</Column>
					</Row>
				</Section>
				<Text style={footerLinksWrapper}>
					<Link href="https://www.stacklistPro.dev/legal/accountSummary">
						Account Settings
					</Link>{" "}
					•{" "}
					<Link href="https://www.stacklistPro.dev/terms-conditions">
						Terms of Sale
					</Link>{" "}
					•{" "}
					<Link href="https://www.stacklistPro.dev/privacy/">
						Privacy Policy{" "}
					</Link>
				</Text>
				<Text style={footerCopyright}>
					Copyright © StackListPro Inc. <br />{" "}
					<Link href="https://www.stacklistPro.dev/legal/">
						All rights reserved
					</Link>
				</Text>
			</Container>
		</Body>
	</Html>
)

export default StackListProReceiptEmail

const main = {
	fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
	backgroundColor: "#ffffff",
}

const resetText = {
	margin: "0",
	padding: "0",
	lineHeight: 1.4,
}

const container = {
	margin: "0 auto",
	padding: "20px 0 48px",
	width: "660px",
	maxWidth: "100%",
}

const tableCell = { display: "table-cell" }

const heading = {
	fontSize: "32px",
	fontWeight: "300",
	color: "black",
}

const cupomText = {
	textAlign: "center" as const,
	margin: "36px 0 40px 0",
	fontSize: "14px",
	fontWeight: "500",
	color: "#111111",
}

const supStyle = {
	fontWeight: "300",
}

const informationTable = {
	borderCollapse: "collapse" as const,
	borderSpacing: "0px",
	color: "rgb(51,51,51)",
	backgroundColor: "rgb(250,250,250)",
	borderRadius: "3px",
	fontSize: "12px",
}

const informationTableRow = {
	height: "46px",
}

const informationTableColumn = {
	paddingLeft: "20px",
	borderStyle: "solid",
	borderColor: "white",
	borderWidth: "0px 1px 1px 0px",
	height: "44px",
}

const informationTableLabel = {
	...resetText,
	color: "rgb(102,102,102)",
	fontSize: "10px",
}

const informationTableValue = {
	fontSize: "12px",
	margin: "0",
	padding: "0",
	lineHeight: 1.4,
}

const productTitleTable = {
	...informationTable,
	margin: "30px 0 15px 0",
	height: "24px",
}

const productsTitle = {
	background: "#fafafa",
	paddingLeft: "10px",
	fontSize: "14px",
	fontWeight: "500",
	margin: "0",
}

const productIcon = {
	margin: "0 0 0 20px",
	borderRadius: "14px",
	border: "1px solid rgba(128,128,128,0.2)",
}

const productTitle = { fontSize: "12px", fontWeight: "600", ...resetText }

const productDescription = {
	fontSize: "12px",
	color: "rgb(102,102,102)",
	...resetText,
}

const productLink = {
	fontSize: "12px",
	color: "rgb(0,112,201)",
	textDecoration: "none",
}

const divisor = {
	marginLeft: "4px",
	marginRight: "4px",
	color: "rgb(51,51,51)",
	fontWeight: 200,
}

const productPriceTotal = {
	margin: "0",
	color: "rgb(102,102,102)",
	fontSize: "10px",
	fontWeight: "600",
	padding: "0px 30px 0px 0px",
	textAlign: "right" as const,
}

const productPrice = {
	fontSize: "12px",
	fontWeight: "600",
	margin: "0",
}

const productPriceLarge = {
	margin: "0px 20px 0px 0px",
	fontSize: "16px",
	fontWeight: "600",
	whiteSpace: "nowrap" as const,
	textAlign: "right" as const,
}

const productPriceWrapper = {
	display: "table-cell",
	padding: "0px 20px 0px 0px",
	width: "100px",
	verticalAlign: "top",
}

const productPriceLine = { margin: "30px 0 0 0" }

const productPriceVerticalLine = {
	height: "48px",
	borderLeft: "1px solid",
	borderColor: "rgb(238,238,238)",
}

const productPriceLargeWrapper = { display: "table-cell", width: "90px" }

const productPriceLineBottom = { margin: "0 0 75px 0" }

const block = { display: "block" }

const ctaTitle = {
	display: "block",
	margin: "15px 0 0 0",
}

const ctaText = { fontSize: "24px", fontWeight: "500" }

const walletWrapper = { display: "table-cell", margin: "10px 0 0 0" }

const walletLink = { color: "rgb(0,126,255)", textDecoration: "none" }

const walletImage = {
	display: "inherit",
	paddingRight: "8px",
	verticalAlign: "middle",
}

const walletBottomLine = { margin: "65px 0 20px 0" }

const footerText = {
	fontSize: "12px",
	color: "rgb(102,102,102)",
	margin: "0",
	lineHeight: "auto",
	marginBottom: "16px",
}

const footerTextCenter = {
	fontSize: "12px",
	color: "rgb(102,102,102)",
	margin: "20px 0",
	lineHeight: "auto",
	textAlign: "center" as const,
}

const footerLink = { color: "rgb(0,115,255)" }

const footerIcon = { display: "block", margin: "40px 0 0 0" }

const footerLinksWrapper = {
	margin: "8px 0 0 0",
	textAlign: "center" as const,
	fontSize: "12px",
	color: "rgb(102,102,102)",
}

const footerCopyright = {
	margin: "25px 0 0 0",
	textAlign: "center" as const,
	fontSize: "12px",
	color: "rgb(102,102,102)",
}

const walletLinkText = {
	fontSize: "14px",
	fontWeight: "400",
	textDecoration: "none",
}
