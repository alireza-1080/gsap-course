import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full min-w-screen flex justify-center p-20">
      <button className="px-6 py-3 bg-blue-500 rounded-lg">
        <Link href='/css-filters'>CSS Filters</Link>
      </button>
    </div>
  )
}

export default HomePage
