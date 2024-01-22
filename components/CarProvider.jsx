"use client"

import { CartProvider as CProvider } from "use-shopping-cart"; // Shopping cart state and logic for Stripe checkout

const CarProvider = ({ children }) => {
  return (
    <CProvider 
      mode="payment"
      cartMode="client-only"
      stripe=""
      successUrl="succes"
      cancelUrl=""
      language="en-US"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  )
}

export default CarProvider