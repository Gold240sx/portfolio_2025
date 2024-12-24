import { motion } from "framer-motion"
import { FiCheckCircle } from "react-icons/fi"
import {
	ChangeEvent,
	Dispatch,
	FormEvent,
	Fragment,
	MutableRefObject,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AiOutlineMinus } from "react-icons/ai"
import { CgClose, CgExpand } from "react-icons/cg"
import { TbFolderFilled } from "react-icons/tb"

interface TerminalContactProps {
	onClose: () => void
	isMaximized: boolean
	setIsMaximized: Dispatch<SetStateAction<boolean>>
	isMinimized: boolean
	setIsMinimized: Dispatch<SetStateAction<boolean>>
}

const formSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters").trim(),
	email: z.string().email("Invalid email address").trim(),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters")
		.trim(),
})

type FormValues = z.infer<typeof formSchema>

const TerminalContact = ({
	onClose,
	isMaximized,
	setIsMaximized,
	isMinimized,
	setIsMinimized,
}: TerminalContactProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	const inputRef = useRef<HTMLInputElement | null>(null)
	const {
		handleSubmit,
		formState: { errors },
		setValue,
		trigger,
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		mode: "onChange",
	})

	const handleSend = handleSubmit((data) => {
		console.log(data)
		// setComplete(true)
	})

	const handleQuestionChange = async (key: string, value: string) => {
		setValue(key as keyof FormValues, value.trim())
		await trigger(key as keyof FormValues)
	}

	return (
		<section
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
			className={`px-4 py-12 	${isMaximized && "h-full"}`}>
			<div
				ref={containerRef}
				onClick={() => {
					inputRef.current?.focus()
				}}
				className={`${isMaximized ? "h-full w-auto m-4 lg:m-8" : "h-96 max-w-4xl "} bg-neutral-950/70 rounded-b-xl overflow-hidden backdrop-blur rounded-lg w-full mx-auto overflow-y-scroll shadow-2xl shadow-black/50 cursor-text font-mono`}>
				<TerminalHeader
					onClose={onClose}
					setIsMaximized={setIsMaximized}
					setIsMinimized={setIsMinimized}
				/>
				<TerminalBody inputRef={inputRef} containerRef={containerRef} />
			</div>
		</section>
	)
}

const TerminalHeader = ({
	onClose,
	setIsMaximized,
	setIsMinimized,
}: {
	onClose: () => void
	setIsMaximized: Dispatch<SetStateAction<boolean>>
	setIsMinimized: Dispatch<SetStateAction<boolean>>
}) => {
	return (
		<div className="w-auto p-3 bg-zinc-900 flex items-center gap-1 sticky top-0 rounded-t-xl overflow-hidden border-t-zinc-800 border-t">
			<div className="flex gap-1 group">
				<div
					className="w-3 h-3 rounded-full bg-red-500 cursor-pointer"
					onClick={() => {
						onClose()
						setIsMinimized(false)
						setIsMaximized(false)
					}}>
					<CgClose className="text-black/50 w-3 h-3 stroke-0.5 hidden group-hover:block" />
				</div>
				<div
					className="w-3 h-3 rounded-full bg-yellow-500 cursor-pointer"
					onClick={() => {
						setIsMinimized(true)
						onClose()
					}}>
					<AiOutlineMinus className="text-black/50 w-3 h-3 stroke-2 hidden group-hover:block" />
				</div>
				<div
					className="w-3 h-3 rounded-full bg-green-500 cursor-pointer"
					onClick={() => setIsMaximized(true)}>
					<CgExpand className="text-black/50 w-3 h-3 rotate-90 stroke-0.5 hidden group-hover:block" />
				</div>
			</div>
			<div className="text-sm flex gap-2 text-neutral-400 font-semibold absolute left-[50%] -translate-x-[50%]">
				<span>
					<TbFolderFilled className="text-blue-400 text-base mt-0.5" />
				</span>
				michael@mmartell.dev
			</div>
		</div>
	)
}

const TerminalBody = ({ containerRef, inputRef }: TerminalBodyProps) => {
	const [focused, setFocused] = useState(false)
	const [text, setText] = useState("")

	const [questions, setQuestions] = useState(QUESTIONS)

	const curQuestion = questions.find((q) => !q.complete)

	const handleSubmitLine = (value: string) => {
		// check if there are any errors with the current question first and if there are, don't proceed and display the error
		if (curQuestion) {
			setQuestions((pv) =>
				pv.map((q) => {
					if (q.key === curQuestion.key) {
						return {
							...q,
							complete: true,
							value,
						}
					}
					return q
				})
			)
		}
	}

	return (
		<div className="p-6 text-slate-100 text-lg">
			<InitialText />
			<PreviousQuestions questions={questions} />
			<CurrentQuestion curQuestion={curQuestion} />
			{curQuestion ? (
				<CurLine
					text={text}
					focused={focused}
					setText={setText}
					setFocused={setFocused}
					inputRef={inputRef}
					command={curQuestion?.key || ""}
					handleSubmitLine={handleSubmitLine}
					containerRef={containerRef}
				/>
			) : (
				<Summary questions={questions} setQuestions={setQuestions} />
			)}
		</div>
	)
}

const InitialText = () => {
	return (
		<>
			<p className="">Hey there! I'm excited to hear from you!🦻</p>
			<p className="whitespace-nowrap overflow-hidden font-light">
				------------------------------------------------------------------------
			</p>
		</>
	)
}

const PreviousQuestions = ({ questions }: PreviousQuestionProps) => {
	return (
		<>
			{questions.map((q, i) => {
				if (q.complete) {
					return (
						<Fragment key={i}>
							<p>
								{q.text || ""}
								{q.postfix && (
									<span className="text-purple-300">
										{q.postfix}
									</span>
								)}
							</p>
							<p className="text-teal-300">
								<FiCheckCircle className="inline-block mr-2" />
								<span>{q.value}</span>
							</p>
						</Fragment>
					)
				}
				return <Fragment key={i}></Fragment>
			})}
		</>
	)
}

const CurrentQuestion = ({ curQuestion }: CurrentQuestionProps) => {
	if (!curQuestion) return <></>

	return (
		<p>
			{curQuestion.text || ""}
			{curQuestion.postfix && (
				<span className="text-sky-300">{curQuestion.postfix}</span>
			)}
		</p>
	)
}

const Summary = ({ questions, setQuestions }: SummaryProps) => {
	const [complete, setComplete] = useState(false)

	const handleReset = () => {
		setQuestions((pv) =>
			pv.map((q) => ({ ...q, value: "", complete: false }))
		)
	}

	const handleSend = () => {
		const formData = questions.reduce((acc, val) => {
			return { ...acc, [val.key]: val.value }
		}, {})

		// Send this data to your server or whatever :)
		console.log(formData)
		setComplete(true)
	}

	let audio = new Audio("/sent.mp3")
	audio.volume = 0.5
	const PlayEmailSentSound = () => {
		audio.play()
	}

	return (
		<>
			<p className="mt-2 font-semibold text-sky-500">
				Beautiful! Here's what we've got:
			</p>
			<div className="bg-black/30 p-4 m-4 rounded-xl">
				{questions.map((q) => {
					return (
						<p key={q.key}>
							<span className="text-blue-300">{q.key}:</span>{" "}
							{q.value}
						</p>
					)
				})}
			</div>
			<p className="mt-2 font-semibold text-sky-500">Look good?</p>
			{complete ? (
				<p className="text-emerald-300 my-4">
					<FiCheckCircle className="inline-block mr-2" />
					<span>Sent! I'll get back to you ASAP 😎</span>
				</p>
			) : (
				<div className="flex gap-2 mt-2">
					<button
						onClick={handleReset}
						className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-slate-100 text-black">
						Restart
					</button>
					<button
						onClick={() => {
							handleSend()
							PlayEmailSentSound()
						}}
						className="px-3 py-1 text-base hover:opacity-90 transition-opacity rounded bg-teal-500 text-white">
						Send it!
					</button>
				</div>
			)}
		</>
	)
}

const CurLine = ({
	text,
	focused,
	setText,
	setFocused,
	inputRef,
	command,
	handleSubmitLine,
	containerRef,
}: CurrentLineProps) => {
	const scrollToBottom = () => {
		if (containerRef.current) {
			containerRef.current.scrollTop = containerRef.current.scrollHeight
		}
	}

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		handleSubmitLine(text)
		setText("")
		setTimeout(() => {
			scrollToBottom()
		}, 0)
	}

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setText(e.target.value)
		scrollToBottom()
	}

	useEffect(() => {
		return () => setFocused(false)
	}, [])

	return (
		<>
			<form onSubmit={onSubmit}>
				<input
					ref={inputRef}
					onChange={onChange}
					value={text}
					type="text"
					className="sr-only"
					autoComplete="off"
					onFocus={() => setFocused(true)}
					onBlur={() => setFocused(false)}
				/>
			</form>
			<p>
				<span className="text-emerald-400">➜</span>{" "}
				<span className="text-cyan-300">~</span>{" "}
				{command && (
					<span className="opacity-50">Enter {command}: </span>
				)}
				{text}
				{focused && (
					<motion.span
						animate={{ opacity: [1, 1, 0, 0] }}
						transition={{
							repeat: Infinity,
							duration: 1,
							ease: "linear",
							times: [0, 0.5, 0.5, 1],
						}}
						className="inline-block w-2 h-5 bg-slate-400 translate-y-1 ml-0.5"
					/>
				)}
			</p>
		</>
	)
}

export default TerminalContact

const QUESTIONS: QuestionType[] = [
	{
		key: "email",
		text: "To start, could you give me ",
		postfix: "your email?",
		complete: false,
		value: "",
		// error: errors.email?.message,
	},
	{
		key: "name",
		text: "Awesome! And what's ",
		postfix: "your name?",
		complete: false,
		value: "",
		// error: errors.name?.message,
	},
	{
		key: "message",
		text: "Perfect, and ",
		postfix: "how can I help you?",
		complete: false,
		value: "",
		// error: errors.message?.message,
	},
]

interface CurrentLineProps {
	text: string
	focused: boolean
	setText: Dispatch<SetStateAction<string>>
	setFocused: Dispatch<SetStateAction<boolean>>
	inputRef: MutableRefObject<HTMLInputElement | null>
	command: string
	handleSubmitLine: Function
	containerRef: MutableRefObject<HTMLDivElement | null>
}

type QuestionType = {
	key: string
	text: string
	postfix?: string
	complete: boolean
	value: string
}

interface TerminalBodyProps {
	containerRef: MutableRefObject<HTMLDivElement | null>
	inputRef: MutableRefObject<HTMLInputElement | null>
}

interface PreviousQuestionProps {
	questions: QuestionType[]
}

interface SummaryProps {
	questions: QuestionType[]
	setQuestions: Dispatch<SetStateAction<QuestionType[]>>
}

interface CurrentQuestionProps {
	curQuestion: QuestionType | undefined
}
