"use client";

import React, { useRef, useState } from "react";
import { EmailIcon } from "./SVGs";

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
        className="w-full flex flex-col items-center md:flex-row justify-center"
        onSubmit={handleSubmit}

    >
        <div
            className="relative mb-[15px] md:mb-0"
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
           
            <button className="absolute top-[50%] -translate-y-1/2 left-[24px]" onClick={handleFocus}>
                <EmailIcon />
            </button>
        </div>
        <button 
            type="submit"
            className="w-fit bg-primary text-[#FFFFFF] py-[15px] px-[30px] rounded-[5px] transition-all hover:bg-[#af1313d0]"
        >
            Subscribe
        </button>
    </form>
  )
}

export default SubscribeForm