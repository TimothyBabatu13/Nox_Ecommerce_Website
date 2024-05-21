"use client";

import Image from "next/image";
import React, { useState } from "react";

const SubscribeForm = () => {
    const [email, setEmail] = useState<string>("")
    const handleChange = (e : any) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()
    }

  return (
    <form 
        action=""
        className="relative"
        onSubmit={handleSubmit}
    >
        <input 
            type="email" 
            name="" 
            id=""
            value={email}
            onChange={handleChange}
            className="bg-[#FFFFFF] h-[40px] w-[300px] py-[28px] px-[56px] rounded-[5px] mr-[16px]" 
        />
        <Image 
            height={24} 
            width={24} 
            alt="email" 
            src="/Email.svg"
            className="absolute top-[50%] -translate-y-1/2 left-[24px]" 
        />
        <button 
            type="submit"
            className="bg-primary text-[#FFFFFF] py-[15px] px-[20px] rounded-[5px]"
        >
            Subscribe
        </button>
    </form>
  )
}

export default SubscribeForm