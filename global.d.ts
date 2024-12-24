interface Document {
	startViewTransition(callback: () => void): void
}

interface motion {
	div: {
		className: string
	}
	button: {
		onClick: () => void
	}
}
