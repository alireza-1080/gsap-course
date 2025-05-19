import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className="w-full min-w-screen flex flex-col justify-center items-center gap-10 p-20 *:w-max">
      <button className="px-6 py-3 bg-blue-500 rounded-lg">
        <Link href="/css-filters">CSS Filters</Link>
      </button>
      <button className="px-6 py-3 bg-blue-500 rounded-lg">
        <Link href="/css-transition">CSS Transition</Link>
      </button>
    </div>
  )
}

export default HomePage
