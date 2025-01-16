"use client"
import { useEffect, useState } from "react"
import { formatTime } from "@/lib/utils"

interface WebPlaybackProps {
	token: string
	playlistId?: string
}

declare global {
	interface Window {
		onSpotifyWebPlaybackSDKReady: () => void
		Spotify: {
			Player: any
		}
	}
}

interface PlayerState {
	track_window: {
		current_track: {
			album: { images: { url: string }[] }
			name: string
			artists: { name: string }[]
			duration_ms: number
		}
	}
	paused: boolean
	position: number
}

export default function WebPlayback({ token, playlistId }: WebPlaybackProps) {
	const [player, setPlayer] = useState<any>(undefined)
	const [is_paused, setPaused] = useState(false)
	const [current_track, setTrack] = useState<any>(null)
	const [progress, setProgress] = useState(0)
	const [duration, setDuration] = useState(0)

	useEffect(() => {
		console.log("Token received:", token)
		if (!token) return

		const script = document.createElement("script")
		script.src = "https://sdk.scdn.co/spotify-player.js"
		script.async = true
		document.body.appendChild(script)

		window.onSpotifyWebPlaybackSDKReady = () => {
			console.log("Spotify SDK Ready")
			const player = new window.Spotify.Player({
				name: "Web Playback SDK",
				getOAuthToken: (cb: (token: string) => void) => {
					cb(token)
				},
				volume: 0.5,
			})

			setPlayer(player)

			player.addListener(
				"ready",
				({ device_id }: { device_id: string }) => {
					console.log("Player ready with device ID:", device_id)
					if (playlistId) {
						fetch(
							`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`,
							{
								method: "PUT",
								headers: {
									Authorization: `Bearer ${token}`,
									"Content-Type": "application/json",
								},
								body: JSON.stringify({
									context_uri: `spotify:playlist:${playlistId}`,
								}),
							}
						)
					}
				}
			)

			player.addListener(
				"not_ready",
				({ device_id }: { device_id: string }) => {
					console.log("Device ID has gone offline", device_id)
				}
			)

			player.addListener("player_state_changed", (state: PlayerState) => {
				if (!state) return
				setTrack(state.track_window.current_track)
				setPaused(state.paused)
				setProgress(state.position)
				setDuration(state.track_window.current_track.duration_ms)
			})

			player.connect().then((success: boolean) => {
				console.log("Player connected:", success)
				if (success) {
					const progressInterval = setInterval(() => {
						if (player) {
							player
								.getCurrentState()
								.then((state: PlayerState | null) => {
									if (state) {
										setProgress(state.position)
									}
								})
						}
					}, 1000)

					return () => clearInterval(progressInterval)
				}
			})
		}

		return () => {
			if (player) {
				player.disconnect()
			}
		}
	}, [token, playlistId])

	if (!current_track) {
		return null
	}

	return (
		<div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur p-4">
			<div className="max-w-4xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-4">
					{current_track?.album.images[0].url && (
						<div className="relative w-16 h-16 group">
							<img
								src={current_track.album.images[0].url}
								className="h-16 w-16 rounded-md"
								alt="Album art"
							/>
							<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>
					)}
					<div>
						<div className="text-white font-medium">
							{current_track?.name}
						</div>
						<div className="text-gray-400 text-sm">
							{current_track?.artists[0].name}
						</div>
					</div>
				</div>

				<div className="flex-1 max-w-xl px-8">
					<div className="flex items-center gap-4 justify-center mb-2">
						<button
							className="text-white hover:text-teal-400 transition-colors"
							onClick={() => player.previousTrack()}>
							<svg
								className="w-6 h-6"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
							</svg>
						</button>
						<button
							className="text-white hover:text-teal-400 transition-colors p-2 rounded-full border-2 border-current"
							onClick={() => player.togglePlay()}>
							{is_paused ? (
								<svg
									className="w-8 h-8"
									viewBox="0 0 24 24"
									fill="currentColor">
									<path d="M8 5v14l11-7z" />
								</svg>
							) : (
								<svg
									className="w-8 h-8"
									viewBox="0 0 24 24"
									fill="currentColor">
									<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
								</svg>
							)}
						</button>
						<button
							className="text-white hover:text-teal-400 transition-colors"
							onClick={() => player.nextTrack()}>
							<svg
								className="w-6 h-6"
								viewBox="0 0 24 24"
								fill="currentColor">
								<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
							</svg>
						</button>
					</div>
					<div className="flex items-center gap-2">
						<span className="text-gray-400 text-sm">
							{formatTime(progress)}
						</span>
						<div className="flex-1 h-1 bg-gray-700 rounded-full">
							<div
								className="h-full bg-teal-500 rounded-full"
								style={{
									width: `${(progress / duration) * 100}%`,
								}}
							/>
						</div>
						<span className="text-gray-400 text-sm">
							{formatTime(duration)}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
