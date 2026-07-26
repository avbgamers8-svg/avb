'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import { STRIPE_PLANS, getCheckoutUrl } from '@/lib/stripe'

const PricingPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2">Simple, Transparent Pricing</h1>
        <p className="text-center text-gray-600 mb-12">Choose the plan that fits your learning goals</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(STRIPE_PLANS).map(([key, plan]) => {
            const checkoutUrl = getCheckoutUrl(key)
            const isPopular = key === 'pro'

            return (
              <div
                key={key}
                className={`rounded-lg p-8 transition ${
                  isPopular
                    ? 'bg-indigo-600 text-white shadow-xl transform scale-105'
                    : 'bg-white shadow-md text-gray-900'
                }`}
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className={`${isPopular ? 'text-indigo-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    {plan.price === 0 ? 'Free' : `$${plan.price}`}
                  </span>
                  {plan.price > 0 && (
                    <span className={isPopular ? 'text-indigo-100' : 'text-gray-600'}>
                      /month
                    </span>
                  )}
                </div>

                {checkoutUrl ? (
                  <Link href={checkoutUrl}>
                    <Button
                      variant={isPopular ? 'secondary' : 'primary'}
                      size="lg"
                      className="w-full text-center block"
                    >
                      {plan.button}
                    </Button>
                  </Link>
                ) : (
                  <Link href="/auth/signup">
                    <Button
                      variant={isPopular ? 'secondary' : 'primary'}
                      size="lg"
                      className="w-full text-center block"
                    >
                      {plan.button}
                    </Button>
                  </Link>
                )}

                <div className="mt-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <span className="mr-3 text-lg">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {isPopular && (
                  <div className="mt-6 pt-6 border-t border-indigo-400">
                    <p className="text-xs text-indigo-100 text-center font-semibold">MOST POPULAR</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact our support team or check our FAQ for more information about plans, billing, and features.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="mailto:support@avbeducation.com">
              <Button variant="primary">Email Support</Button>
            </a>
            <Link href="/faq">
              <Button variant="secondary">View FAQ</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PricingPage
