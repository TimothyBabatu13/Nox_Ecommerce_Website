'use client'
import React, { useContext, createContext, useState } from "react";


interface dataProps {
    src: string;
    id: number;
    price: number;
    quantity: number
}

interface CartContextProviderProps {
    details: dataProps[],
    func: any
}

const BillingContextProvider = createContext<CartContextProviderProps | null>(null);




const BillingContext = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    
    const [bill, setBill] = useState<any>({
        billingDetails: '',
        deliveryMethod: '',
        paymentMethod: ''
    })
   
  return (
    <BillingContextProvider.Provider value={{details: bill, func: setBill}}>
        {children}
    </BillingContextProvider.Provider>
  )
}

export default BillingContext;


export const useBillingContext = () => {
    const context = useContext(BillingContextProvider);
    if (context === null) {
        throw new Error("useCartContext must be used within a CartContextProvider");
    }
    return context;
};