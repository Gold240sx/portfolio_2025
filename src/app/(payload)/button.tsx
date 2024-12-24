'use client'
import React from 'react'
import payload from 'payload'

const EmailButton = () => {
  const sendEmail = async () => {
    await payload.sendEmail({
      to: 'test@example.com',
      subject: 'This is a test email',
      text: 'This is my message body',
    })
  }

  return (
    <div>
      {' '}
      <button
        className="fixed bottom-4 right-4 bg-black text-white p-2 rounded-full"
        onClick={() => sendEmail()}
      >
        send email
      </button>
    </div>
  )
}

export default EmailButton
