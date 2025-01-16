import { NextResponse } from "next/server"

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url)
	const code = searchParams.get("code")

	if (!code) {
		return NextResponse.redirect("/")
	}

	const client_id = process.env.SPOTIFY_CLIENT_ID
	const client_secret = process.env.SPOTIFY_CLIENT_SECRET
	const redirect_uri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/callback`

	const response = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: `Basic ${Buffer.from(`${client_id}:${client_secret}`).toString("base64")}`,
		},
		body: new URLSearchParams({
			code,
			redirect_uri,
			grant_type: "authorization_code",
		}),
	})

	const data = await response.json()

	if (data.access_token) {
		return NextResponse.redirect(
			`${process.env.NEXT_PUBLIC_APP_URL}?token=${data.access_token}`
		)
	}

	return NextResponse.redirect("/")
}
