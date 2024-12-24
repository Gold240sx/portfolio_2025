import { AnimatePresence, motion } from "framer-motion"
import { FiAlertCircle } from "react-icons/fi"
import React, { Dispatch, SetStateAction, useRef, useState } from "react"
import TerminalHeader from "@/components/hover.dev/terminalContactForm"
import TerminalBody from "@/components/hover.dev/terminalContactForm"
import TerminalContact from "@/components/hover.dev/terminalContactForm"

const Modal = ({
	isOpen,
	setIsOpen,
	isMinimized,
	setIsMinimized,
	onClose,
}: {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
	isMinimized: boolean
	setIsMinimized: Dispatch<SetStateAction<boolean>>
	onClose: () => void
}) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [isMaximized, setIsMaximized] = useState(false)

	return (
		<div className="px-5 w-auto">
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					onClick={() => setIsOpen(false)}
					className={`bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer`}>
					<motion.div
						initial={{ scale: 0, rotate: "12.5deg" }}
						animate={{ scale: 1, rotate: "0deg" }}
						exit={{ scale: 0, rotate: "0deg" }}
						onClick={(e) => e.stopPropagation()}
						className={`text-white ${isMinimized ? "hidden" : isMaximized ? "w-full h-full" : "max-w-lg"} shadow-xl cursor-default relative overflow-hidden`}>
						<div
							ref={containerRef}
							className={`${isMaximized && "h-full"}`}
							onClick={() => {
								inputRef.current?.focus()
							}}>
							<TerminalContact
								onClose={onClose}
								isMaximized={isMaximized}
								setIsMaximized={setIsMaximized}
								isMinimized={isMinimized}
								setIsMinimized={setIsMinimized}
							/>
						</div>
					</motion.div>
				</motion.div>
			)}
			{isOpen && isMinimized && (
				<div
					onClick={() => setIsMinimized(false)}
					className="bg-gradient-to-b from-sky-200 to-zinc-600 shadow hover:scale-[103%] cursor-pointer shadow-black z-50 rounded-xl absolute inset-0 m-auto w-20 h-20 p-1">
					<div className="rounded-[9px] bg-black p-1.5 h-full w-full">
						<div className="rounded-[2px] bg-zinc-900 p-2 h-full w-full">
							<p className="text-white text-2xl font-black -translate-y-3 -translate-x-1">
								<span className="">{">"}</span>_
							</p>
						</div>
					</div>
					<p className="text-white text-center text-xs mt-3">
						Terminal
					</p>
				</div>
			)}
		</div>
	)
}

export default Modal
