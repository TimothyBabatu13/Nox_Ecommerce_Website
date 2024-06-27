'use client';

import { FormEvent, useState } from "react";
import Input from "./Input"
import BillingInfo from "./BillingInfo";


const BillingDetailsForm = ({ active, number, setNumber, setActiveBack } : {
    active: boolean,
    number: number,
    setNumber: (e: number) => void,
    setActiveBack: (e: number) => void
}) => {

    const [checked, setChecked] = useState<boolean>(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: '',
        address: '',
        stateRegion: '',
        city: '',
        email: ''

    });
    const handleChange = ( e: any ) => {
        setFormData((prev : any) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setChecked(true)
        setNumber(number)
        // console.log(formData)
    }

    // const setActiveBack = () => {
    //     setActiveBack(number)
    // }
    
//
  return (
    <div>
        <form onSubmit={handleSubmit} className={` transition-all ${!active ? "h-0 overflow-hidden " : "mt-[47px]"}`}>
            <Input isUp type='text' name='firstName' placeholder='First Name' handleChange={handleChange} clx=""/>
            <Input isUp type='text' name="lastName" placeholder='Last Name' handleChange={handleChange} clx=""/>
            <Input isUp={false} type='number' name="phoneNumber" placeholder='Phone number' handleChange={handleChange} clx=""/>
            <Input isUp={false} type='email' name="email" placeholder='Email Address' handleChange={handleChange} clx=""/>
            <textarea required placeholder="Address" name="address" onChange={handleChange} className="py-[20px] px-[32px] block w-full border border-[#141414] rounded-[5px] text-sixteen font-fourHundrend text-[#574240] mb-[24px]"/>
            <Input isUp={false} type='text' name="stateRegion" placeholder='State/Region' handleChange={handleChange} clx=""/>
            <Input isUp={false} type='text' name="city" placeholder='City' handleChange={handleChange} clx=""/>
            <button 
                type="submit"
                className="block w-full text-sixteen font-sixHundrend text-primary py-[20px] bg-[#AF1328] rounded-[5px] mt-[16px]"
            >Save & Continue</button>
        </form>
        <BillingInfo number={number} setActiveBack={(e: number)=>setActiveBack(number)} checked={checked} active={active}/>
    </div>
    
  )
}

export default BillingDetailsForm