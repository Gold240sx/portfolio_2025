import React, { ReactElement } from "react"
import SignInForm from "../sign-in/signInForm"

const SignInPage = () => {
	//   const payload = await getPayload({ config })
	return (
		<div className="flex place-items-center justify-center align-middle h-screen">
			<SignInForm />
		</div>
	)
}

export default SignInPage
