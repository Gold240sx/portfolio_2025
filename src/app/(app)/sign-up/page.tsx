import React, { ReactElement } from 'react'
import { SignUp } from './actions/signUp'
import { getPayload } from 'payload'
import SignUpForm from './signUpForm'

const SignUpPage = () => {
  //   const payload = await getPayload({ config })
  return (
    <div className="flex place-items-center justify-center align-middle h-screen">
      <SignUpForm />
    </div>
  )
}

export default SignUpPage
