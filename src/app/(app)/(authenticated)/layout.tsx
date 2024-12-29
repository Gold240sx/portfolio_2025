import React, { FC, ReactNode } from "react"
import { redirect } from "next/navigation"
import { getUser } from "./actions/getUser"

type LayoutProps = {
	children: ReactNode
}

const AuthenticatedLayout: FC<LayoutProps> = async ({ children }) => {
	const user = await getUser()
	if (user === null || user === undefined) {
		redirect("/login")
	}

	return <div className="authenticated">{children}</div>
}

export default AuthenticatedLayout
