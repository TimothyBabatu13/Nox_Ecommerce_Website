"use client";
import Image from "next/image"
import Input from "./Input"
import { useState } from "react"

interface data {
    value: string,
    handleChange: any
}

const Password = ({ value, handleChange } : data ) => {
    const [eye, setEye] = useState<boolean>(true);
    
    const handleChangeEye = () => {
        setEye(prev => !prev);
    }

  return (
    <div
    className=" relative"
>
    <Input 
        type={eye ? "password" : "text"} 
        name="password" 
        value={value}
        placeholder="Password"
        onChange={handleChange}
    />
    <Image 
        src="/eye.svg"
        width={24}
        height={14}
        alt="eye"
        className="absolute top-[40%] right-[20px] -translate-y-1/2"
        role="button"
        onClick={handleChangeEye}
    />
</div>
  )
}

export default Password