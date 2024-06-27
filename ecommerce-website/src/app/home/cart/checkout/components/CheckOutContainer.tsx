'use client';
import { useState } from "react"
import BillingDetailsForm from "./BillingDetailsForm"
import CheckoutLayout from "./CheckoutLayout"
import DeliveryMethod from "./DeliveryMethod";


const CheckOutContainer = () => {
    const [step, setStep] = useState(0);
    const handleSetNumber = (e: number) =>  {
        if(e + 1 > 3) return;
        setStep(e + 1)
        return 1;
    }
    const handleSetNumberBack = (number: number) => {
        setStep(number)
    }
  return (
    <div>
        <CheckoutLayout active={step > 0} header="1. BILLING DETAILS"> 
            <BillingDetailsForm setActiveBack={handleSetNumberBack} active={step === 0} number={0} setNumber={handleSetNumber}/>
        </CheckoutLayout>
        <CheckoutLayout active={step > 1} header="2. DELIVERY METHOD"> 
            <DeliveryMethod setActiveBack={handleSetNumberBack} active={step === 1} number={1} setNumber={handleSetNumber}/>
        </CheckoutLayout>
        <CheckoutLayout active={step > 2} header="3. PAYMENT METHOD"> 
            <BillingDetailsForm setActiveBack={handleSetNumberBack} active={step === 2} number={2} setNumber={handleSetNumber}/>
        </CheckoutLayout>
    </div>
  )
}

export default CheckOutContainer