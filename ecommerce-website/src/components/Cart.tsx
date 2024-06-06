
import LinkImage from './LinkImage'
import Number from './Number';
import { CartIcon } from './SVGs';

const Cart = () => {


  return (
    <div className='hidden md:block relative'>
        <LinkImage
          href="/home/cart"    
          text="Cart"
        >
          <CartIcon />
        </LinkImage>
        <Number />
        
    </div>
  )
}


export default Cart