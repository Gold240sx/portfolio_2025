import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Link href="/admin">
        <button className="px-4 py-2 rounded-lg bg-black text-white">Back to Admin</button>
      </Link>
    </div>
  )
}

export default Dashboard
