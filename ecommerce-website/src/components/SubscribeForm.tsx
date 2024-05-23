"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

const SubscribeForm = () => {
    const [email, setEmail] = useState<string>("");
    const ref = useRef<any>(null);
    const handleChange = (e : any) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault()
    }

    const handleFocus = ()=> {
        ref?.current?.focus();
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
            className="bg-[#FFFFFF] text-[16px] h-[40px] w-[350px] py-[28px] px-[56px] rounded-[5px] mr-[16px]"
            placeholder="Enter your email address..." 
            ref={ref}
        />
        <Image 
            height={24} 
            width={24} 
            alt="email" 
            src="/Email.svg"
            className="absolute top-[50%] -translate-y-1/2 left-[24px]" 
            role="button"
            onClick={handleFocus}
        />
        <button 
            type="submit"
            className="bg-primary text-[#FFFFFF] py-[15px] px-[30px] rounded-[5px] transition-all hover:bg-[#af1313d0]"
        >
            Subscribe
        </button>
    </form>
  )
}

export default SubscribeForm