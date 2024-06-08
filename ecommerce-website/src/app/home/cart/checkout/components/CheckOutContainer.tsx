'use client';
import { useState } from "react"
import BillingDetailsForm from "./BillingDetailsForm"
import CheckoutLayout from "./CheckoutLayout"


const CheckOutContainer = () => {
    const [step, setStep] = useState(0);
  return (
    <div>
        <CheckoutLayout header="1. BILLING DETAILS"> 
        <BillingDetailsForm />
      </CheckoutLayout>
      <CheckoutLayout header="2. DELIVERY METHOD"> 
        <h4>Hello</h4>
      </CheckoutLayout>
      <CheckoutLayout header="3. PAYMENT METHOD"> 
        <h4>Hello</h4>
      </CheckoutLayout>
    </div>
  )
}

export default CheckOutContainer