<<<<<<< HEAD
import React from 'react'
import LinkImage from './LinkImage'
import { CartIcon } from './SVGs';

const Cart = () => {
  const number = 2;
  return (
    <div className='hidden md:block relative'>
        <LinkImage
          href="/home/cart"    
          text="Cart"
        >
          <CartIcon />
        </LinkImage>
        <div 
          className='absolute top-[-3px] left-[35px] w-[12px] h-[12px] text-[8px] font-[500] flex text-[#333333] items-center justify-center rounded-[50px] bg-[#FFC107] border border-primary'
        >
          {number}
        </div>
        
    </div>
  )
}

=======
import React from 'react'
import LinkImage from './LinkImage'
import { CartIcon } from './SVGs';

const Cart = () => {
  const number = 2;
  return (
    <div className='hidden md:block relative'>
        <LinkImage
          href="/home/cart"    
          text="Cart"
        >
          <CartIcon />
        </LinkImage>
        <div 
          className='absolute top-[-3px] left-[35px] w-[12px] h-[12px] text-[8px] font-[500] flex text-[#333333] items-center justify-center rounded-[50px] bg-[#FFC107] border border-primary'
        >
          {number}
        </div>
        
    </div>
  )
}

>>>>>>> fa096c5419a1cc3487731f6ea6c5b651a34dad8a
export default Cart