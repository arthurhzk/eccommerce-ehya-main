import Stripe from 'stripe'

const stripe = new Stripe(import.meta.env.VITE_STRIPE_API_URL, {
  apiVersion: '2023-10-16'
})

export default stripe
