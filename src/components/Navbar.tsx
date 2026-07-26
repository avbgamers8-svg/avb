'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">📚 AVB</span>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="/tests" className="text-gray-600 hover:text-indigo-600 transition">
              Tests
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-indigo-600 transition">
              Pricing
            </Link>
            <Link href="/auth/login" className="text-indigo-600 font-semibold hover:text-indigo-700 transition">
              Login
            </Link>
            <Link href="/auth/signup" className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Sign Up
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/tests" className="block text-gray-600 hover:text-indigo-600 py-2">
              Tests
            </Link>
            <Link href="/pricing" className="block text-gray-600 hover:text-indigo-600 py-2">
              Pricing
            </Link>
            <Link href="/auth/login" className="block text-indigo-600 font-semibold py-2">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
