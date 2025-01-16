import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"
import { BsTerminal, BsSpotify } from "react-icons/bs"

interface ModalProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	onClose: () => void
	isMinimized: boolean
	setIsMinimized: (isMinimized: boolean) => void
	launchpadButtonRef: React.RefObject<HTMLButtonElement>
}

const Modal: FC<ModalProps> = ({
	isOpen,
	setIsOpen,
	onClose,
	isMinimized,
	setIsMinimized,
	launchpadButtonRef,
}) => {
	return (
		<AnimatePresence>
			{isOpen && isMinimized && (
				<motion.div
					initial={{ scale: 0.95, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0.95, opacity: 0 }}
					className="fixed inset-0 z-50 flex items-center justify-center">
					<div className="grid grid-cols-2 gap-8">
						{/* Terminal Icon */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() => setIsMinimized(false)}
							className="flex flex-col items-center gap-2">
							<div className="p-4 bg-neutral-800 rounded-2xl hover:bg-neutral-700 transition-colors">
								<BsTerminal className="w-16 h-16 text-white" />
							</div>
							<span className="text-white text-sm">Terminal</span>
						</motion.button>

						{/* Spotify Icon */}
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							onClick={() =>
								(window.location.href = "/api/auth/spotify")
							}
							className="flex flex-col items-center gap-2">
							<div className="p-4 bg-[#1DB954] rounded-2xl hover:bg-[#1ed760] transition-colors">
								<BsSpotify className="w-16 h-16 text-black" />
							</div>
							<span className="text-white text-sm">Spotify</span>
						</motion.button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Modal
