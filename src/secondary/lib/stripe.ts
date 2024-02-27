import Stripe from 'stripe'

const stripe = new Stripe(
  'sk_test_51OjqQGCFji4mq3F4bCMUv7lj1yR8WeJWXDy0VmnmRXLMC29qp4IvF8sA0M23VLQ6xLHPGSSLNAsNGr1GQDdhW8aw00ystDoKKK',
  {
    apiVersion: '2023-10-16'
  }
)

export default stripe
