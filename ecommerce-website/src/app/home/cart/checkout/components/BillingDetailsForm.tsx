'use client';

import { FormEvent, useState } from "react";
import Input from "./Input"


const BillingDetailsForm = () => {

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
        // console.log(formData)
    }

    

  return (
    <form onSubmit={handleSubmit}>
        <Input isUp type='text' name='firstName' placeholder='First Name' handleChange={handleChange} clx=""/>
        <Input isUp type='text' name="lastName" placeholder='Last Name' handleChange={handleChange} clx=""/>
        <Input isUp={false} type='number' name="phoneNumber" placeholder='Phone number' handleChange={handleChange} clx=""/>
        <Input isUp={false} type='email' name="email" placeholder='Email Address' handleChange={handleChange} clx=""/>
        <textarea placeholder="Address" name="address" handleChange={handleChange} className="py-[20px] px-[32px] block w-[180%] border border-[#141414] rounded-[5px] text-sixteen font-fourHundrend text-[#574240] mb-[24px]"/>
        <Input isUp={false} type='text' name="stateRegion" placeholder='State/Region' handleChange={handleChange} clx=""/>
        <Input isUp={false} type='text' name="city" placeholder='City' handleChange={handleChange} clx=""/>
        <button type="submit">Submit</button>
    </form>
  )
}

export default BillingDetailsForm