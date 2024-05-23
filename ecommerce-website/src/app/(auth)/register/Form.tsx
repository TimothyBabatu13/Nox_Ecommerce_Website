"use client";
import Image from "next/image";
import Link from "next/link"
import React, { useState } from "react"
import Input from "../component/Input";
import Password from "../component/Password";


interface FormData {
    name: string,
    email: string,
    number: string,
    password: string
}
const Form = () => {

    const [details, setDetails] = useState<FormData>({
        name: "",
        email: "",
        number: "",
        password: "",
    })

    const [eye, setEye] = useState<boolean>(true);

    const handleChange = (e: any)=> {
        setDetails(prev =>( {
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleChangeEye = ()=> {
        setEye(prev => !prev);
    }
    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
    }
  return (
    <form 
        action=""
        onSubmit={handleSubmit}
    >
        <Input 
            type="text"
            name="name"
            value={details.name}
            placeholder="Full name"
            onChange={handleChange}
        />
        <Input 
            type="email"
            name="email"
            value={details.email}
            placeholder="Email Address"
            onChange={handleChange}
        />
        
        <div>
            <Input 
                type="number" 
                name="number" 
                value={details.number}
                placeholder="Phone number"
                onChange={handleChange}
            />
        </div>
        <Password 
            value={details.password}
            handleChange={handleChange}
        />
        <button 
            type="submit"
            className="block bg-primary w-full text-primary py-[23px] rounded-[5px] font-sixHundrend text-sixteen mt-[24px] mb-[40px]"
        >
            Create account
        </button>
        <h5
            className="text-center text-[#B3B1B1] text-sixteen font-fourHundrend"
        >
            Already have account? <Link 
                href={"/login"}
                className="text-[#626060]"
            >
                 Login
            </Link>
        </h5>
    </form>
  )
}

export default Form