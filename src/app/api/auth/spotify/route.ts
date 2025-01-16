import { redirect } from "next/navigation"

export async function GET() {
	const client_id = process.env.SPOTIFY_CLIENT_ID
	const base_url = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
	const redirect_uri = `${base_url}/api/auth/callback`
	const scope =
		"streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state"

	return Response.redirect(
		`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=code&redirect_uri=${encodeURIComponent(redirect_uri)}&scope=${scope}`
	)
}
