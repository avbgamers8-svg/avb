import Link from 'next/link'
import Button from '@/components/Button'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to AVB Education
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Master your skills with our comprehensive tests and learning resources
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/auth/signup">
            <Button variant="primary" size="lg">
              Get Started Free
            </Button>
          </Link>
          <Link href="/tests">
            <Button variant="secondary" size="lg">
              Browse Tests
            </Button>
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-2xl font-semibold mb-3">Comprehensive Tests</h3>
            <p className="text-gray-600">Hundreds of tests across multiple subjects and difficulty levels</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-semibold mb-3">Detailed Analytics</h3>
            <p className="text-gray-600">Track your progress with detailed performance reports</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-2xl font-semibold mb-3">Achieve Excellence</h3>
            <p className="text-gray-600">Improve your skills and reach your learning goals</p>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
        <Link href="/auth/signup">
          <Button variant="primary" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            Sign Up Now
          </Button>
        </Link>
      </section>
    </main>
  )
}
