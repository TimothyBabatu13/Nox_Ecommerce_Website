import Link from "next/link"
import ClientLink from "./ClientLink"

interface HeaderLinkProps {
    href: string,
    text: string
}

const HeaderLink = ({ text, href } : HeaderLinkProps) => {
    return (
        <Link className="text-[#1D1615] text-[15px] font-[500]" href={href}>{text}</Link>
    )
}

interface CartHeaderProps {
    noOfCart : number
}
const CartHeader = ({ noOfCart } : CartHeaderProps) => {

    const isCart : boolean = noOfCart > 0

  return (
    <>
        <section className={`w-full h-[191px] mt-[40px] ${isCart ? "border" : ""} border-[#A8A8A8] flex flex-col justify-center`}>
            <div className="text-center">
                <HeaderLink 
                    text="Home"
                    href="/home"
                />/
                <HeaderLink 
                    text="Cart"
                    href=""
                />
            </div>
            <h2 className=" text-[40px] text-[#1D1615] font-sixHundrend mt-[18px] text-center">Cart</h2>
        </section>
        {
            isCart ? <section className="text-center">
                <ClientLink 
                    text="1. Shopping Cart "
                    href=""
                    path="/home/cart"
                />
                 <ClientLink 
                    text="2. Checkout"
                    href="/home/cart/checkout"
                    path="/home/cart/checkout"
                />
                <ClientLink 
                    text="3. Order Complete"
                    href="/home/cart/complete"
                    path="/home/cart/complete"
                />
            </section> : <></>
        }
    </>
    
  )
}

export default CartHeader