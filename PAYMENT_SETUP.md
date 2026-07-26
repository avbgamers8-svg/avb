# Stripe Payment Integration Guide

## Setup Instructions

### 1. Create Stripe Account
- Go to [stripe.com](https://stripe.com)
- Sign up for a free account
- Complete your business details

### 2. Get API Keys
1. Go to Dashboard → Developers → API Keys
2. Copy your keys:
   - **Publishable Key** (starts with `pk_`)
   - **Secret Key** (starts with `sk_`)

### 3. Configure Environment Variables

Update `.env.local`:
```env
# Stripe Keys
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key
STRIPE_SECRET_KEY=sk_test_your_secret_key

# Product IDs (get from Stripe Dashboard)
NEXT_PUBLIC_STRIPE_PRO_PRODUCT_ID=prod_xxxxx
NEXT_PUBLIC_STRIPE_PRO_PRICE_ID=price_xxxxx
NEXT_PUBLIC_STRIPE_PREMIUM_PRODUCT_ID=prod_xxxxx
NEXT_PUBLIC_STRIPE_PREMIUM_PRICE_ID=price_xxxxx

# Webhook (set after deployment)
STRIPE_WEBHOOK_SECRET=whsec_xxxxx
```

### 4. Create Products and Prices in Stripe

#### Pro Plan ($9.99/month)
1. Go to Products → Add Product
2. Name: "Pro Plan"
3. Price: $9.99 USD / Month (Recurring)
4. Save Product ID and Price ID

#### Premium Plan ($19.99/month)
1. Go to Products → Add Product
2. Name: "Premium Plan"
3. Price: $19.99 USD / Month (Recurring)
4. Save Product ID and Price ID

### 5. Install Stripe Packages

```bash
npm install stripe @stripe/react-stripe-js @stripe/stripe-js
```

### 6. Update package.json

Already includes:
- `stripe` - Backend SDK
- `@stripe/react-stripe-js` - React components
- `@stripe/stripe-js` - Frontend SDK

## Files Created

### Payment Integration Files:
- `src/app/checkout/[plan]/page.tsx` - Checkout page with Stripe Elements
- `src/app/api/create-payment-intent/route.ts` - Backend API for payment intents
- `src/app/success/page.tsx` - Success page after payment
- `src/lib/stripe.ts` - Stripe utilities and configuration
- `src/app/pricing/page.tsx` - Updated pricing page with links to checkout

## Payment Flow

```
User → Pricing Page → Select Plan → Checkout → Stripe Payment → Success Page
```

### Step-by-step:
1. User selects a plan (Pro or Premium)
2. Redirected to `/checkout/[plan]`
3. Stripe checkout form appears
4. User enters card details
5. Payment processed via Stripe
6. Success page shown
7. Subscription activated

## Test Cards

Use these for testing in **test mode** (with `pk_test_` and `sk_test_` keys):

| Card | CVC | Date |
|------|-----|------|
| 4242 4242 4242 4242 | Any | Any future date |
| 4000 0000 0000 9995 | Any | Any future date (Decline) |

## Implementation Checklist

- [x] Stripe configuration setup
- [x] Checkout page created
- [x] Payment API endpoint created
- [x] Success page created
- [x] Pricing page integrated with Stripe
- [ ] Set up Stripe webhooks (for subscriptions)
- [ ] Create subscription management endpoints
- [ ] Add user database for subscription tracking
- [ ] Set up email notifications

## Next Steps

1. **Add Backend Processing**
   ```bash
   npm install stripe-sdk
   ```
   
2. **Create Subscription Model** (Database)
   ```typescript
   interface Subscription {
     id: string
     userId: string
     stripeSubscriptionId: string
     plan: 'pro' | 'premium'
     status: 'active' | 'canceled' | 'paused'
     currentPeriodStart: Date
     currentPeriodEnd: Date
     cancelAtPeriodEnd: boolean
   }
   ```

3. **Setup Webhook Handler**
   - Listen for `customer.subscription.created`
   - Listen for `customer.subscription.deleted`
   - Listen for `customer.subscription.updated`

4. **Add Subscription Management**
   - Cancel subscription
   - Change plan
   - Update payment method
   - Pause subscription

5. **Connect to Database**
   - Sync Stripe subscriptions with local DB
   - Track user subscription status
   - Implement access control

## Webhook Setup

After deploying to production:

1. Go to Stripe Dashboard → Developers → Webhooks
2. Add endpoint: `https://yourdomain.com/api/webhooks/stripe`
3. Subscribe to events:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
4. Copy webhook secret to `.env.local`

## Security Notes

- ✅ Never expose `STRIPE_SECRET_KEY` in frontend code
- ✅ Always process payments server-side
- ✅ Validate webhook signatures on backend
- ✅ Store sensitive data securely
- ✅ Use HTTPS in production
- ✅ PCI DSS compliant with Stripe Elements

## Troubleshooting

### "Missing publishable key"
- Check `.env.local` has `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- Restart dev server after adding env vars

### "Card declined"
- Use test cards listed above
- Check card details in form

### "Payment intent failed"
- Verify API endpoint is working
- Check backend server logs
- Ensure Stripe keys are correct

## Resources

- [Stripe Documentation](https://stripe.com/docs)
- [React Stripe.js](https://stripe.com/docs/stripe-js/react)
- [Payment Intents API](https://stripe.com/docs/payments/payment-intents)
- [Subscriptions API](https://stripe.com/docs/billing/subscriptions/overview)

## Support

- 📧 Stripe Support: support@stripe.com
- 📖 [Stripe Docs](https://stripe.com/docs)
- 💬 [Stack Overflow](https://stackoverflow.com/questions/tagged/stripe)

---

Payment integration is ready! Follow the setup steps to activate Stripe.
