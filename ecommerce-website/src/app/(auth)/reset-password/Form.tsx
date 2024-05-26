'use client';

import { useState } from "react";
import Input from "../component/Input";
import Link from "next/link";

interface detailsData {
    password: string,
    confirmpass: string
}

const Form = () => {

    const [details, setDetails] = useState<detailsData>({
        password: "",
        confirmpass: ""
    })

    const handleChange = (e: any) => {
        setDetails(prev => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (e : React.FormEvent) => {
        e.preventDefault();
    }

  return (
    <form 
        action=""
        className="w-[70%] mx-auto"
        onSubmit={handleSubmit}
    >
        <Input 
            name="password"
            type="password"
            value={details.password}
            placeholder="New Password"
            onChange={handleChange}
        />
        <Input 
            name="confirmpass"
            type="password"
            value={details.confirmpass}
            placeholder="Confirm New Password"
            onChange={handleChange}
        />
        <button 
        type="submit"
        className="block bg-primary w-full text-primary text-[18px] font-sixHundrend py-[18px] rounded-[5px] mt-[20px] mb-[40px]"
    >
        Request Reset Link
    </button>
    <h5 className="text-[#B3B1B1]">Do you remember your password? <Link className="text-[black]" href={"/login"}>Try Logging In</Link></h5>
    </form>
  )
}

export default Form