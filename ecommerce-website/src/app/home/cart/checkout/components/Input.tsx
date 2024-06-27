'use client';

import { useRef, useState } from "react";

const Input = ({ type, placeholder, clx, name, handleChange, isUp }: {
    type: string,
    placeholder: string,
    clx: string,
    name: string,
    handleChange: any,
    isUp: boolean
 }) => {
    const [focus, setFocus] = useState<boolean>(false)
    const reff = useRef<any>(null);

    const handleFocus = () => setFocus(true)

    const handleBlur = () => {
        if(reff.current.value) return;
        setFocus(false)
    }
 

  return (
    <div className="relative">
        {isUp && <div className={`absolute text-sixteen font-fourHundrend text-[#574240] border-0 transition-all ${!focus ? "top-[50%] -translate-y-2/4" : "top-[-15px] bg-[white] px-[10px] text-[#141414]"} mx-[32px]`}>{placeholder}</div>}
        <input ref={reff} required onFocus={handleFocus} onBlur={handleBlur} type={type} onChange={handleChange} name={name} placeholder={!isUp ? placeholder : ''}  className={"py-[20px] px-[32px] block w-full border border-[#141414] rounded-[5px] text-sixteen font-fourHundrend text-[#574240] mb-[24px]"+clx}/>
    </div>
)
}

export default Input