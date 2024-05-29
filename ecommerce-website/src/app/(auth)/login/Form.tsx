"use client";
import { useState } from "react"
import Input from "../component/Input"
import Password from "../component/Password"
import Link from "next/link";

interface detailsData {
    email: string,
    password: string
  }

const Form = () => {
    const [details, setDetails] = useState<detailsData>({
        email: "",
        password: ""
      })
    
      const handleChange = (e: any) => {
        setDetails(prev =>({
            ...prev,
            [e.target.name]: e.target.value
        }))
      }

      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
      }
  return (
    <form action=""
      onSubmit={handleSubmit}
    >
    <Input 
      name='email'
      type='email'
      placeholder='Email Address'
      value={details.email}
      onChange={handleChange}
    />
    <Password 
      value={details.password}
      handleChange={handleChange}
    />
    <Link 
        href={"/forgot-password"}
        className="ml-auto block text-right text-[#574240] italic text-[15px] font-fourHundrend"
    >
        Forgot Password?
    </Link>
    <button 
        type="submit"
        className="block bg-primary w-full text-primary font-sixHundrend py-[18px] rounded-[5px] mt-[32px] mb-[40px]"
    >
        Sign in
    </button>
    <h5
        className="text-[#B3B1B1] text-sixteen font-sixHundrend"
    >
        Don’t have an account? <Link 
            href={"/register"}
            className="text-[black]"
        >
            Create an Account
        </Link>
    </h5>
  </form>
  )
}

export default Form