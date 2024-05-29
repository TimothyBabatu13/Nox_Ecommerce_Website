"use client";
import Image from "next/image"
import Input from "./Input"
import { useState } from "react"
import { Eye } from "@/components/SVGs";

interface data {
    value: string,
    handleChange: any
}

const Password = ({ value, handleChange } : data ) => {
    const [eye, setEye] = useState<boolean>(true);
    
    const handleChangeEye = (e: any) => {
        e.preventDefault();
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
    <button
        onClick={handleChangeEye}
        className="absolute top-[40%] right-[20px] -translate-y-1/2"
    >
        <Eye />
    </button>
</div>
  )
}

export default Password