export const programCheckoutConfig = {
  XSPA: {
    paymentLink:
      process.env.NEXT_PUBLIC_STRIPE_XSPA_PAYMENT_LINK ||
      'https://buy.stripe.com/cNicN6aZ45An3xmdPA7N600',
    reserveHref: '/xspa/reserve',
    paymentButtonLabel: 'Pay for XSPA',
    emailButtonLabel: 'Complete XSPA Payment',
    paymentCopy:
      'If you have not already completed payment, you can finish your XSPA reservation here:',
  },
  XPT: {
    paymentLink:
      process.env.NEXT_PUBLIC_STRIPE_XPT_PAYMENT_LINK ||
      'https://buy.stripe.com/3cIfZi3wCaUH9VKeTE7N601',
    reserveHref: '/xpt/reserve',
    paymentButtonLabel: 'Pay for XPT',
    emailButtonLabel: 'Complete XPT Payment',
    paymentCopy:
      'If you have not already completed payment, you can finish your XPT reservation here:',
  },
};
