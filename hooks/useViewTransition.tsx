"use client"
import { useEffect, useState } from "react"

export default function useViewTransition() {
	const [isViewTransition, setIsViewTransition] = useState(null)

	useEffect(() => {
		// @ts-ignore
		setIsViewTransition(document.startViewTransition ? true : false)
	}, [])

	return { isViewTransition }
}
