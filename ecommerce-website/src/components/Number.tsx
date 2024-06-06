'use client';
import {  useCartContext } from '@/context/CartContext';
const Number = () => {
    const { details } = useCartContext()

  return (
    <div 
          className='absolute top-[-3px] left-[35px] w-[12px] h-[12px] text-[8px] font-[500] flex text-[#333333] items-center justify-center rounded-[50px] bg-[#FFC107] border border-primary'
        >
          {details.length}
        </div>
  )
}

export default Number