import CartProduct from "./CartProduct"


const TableText = () => {
    return (
        <section>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </section>
    )
}

interface H1PropType {
    text: string
}
const H1 = ({text} : H1PropType)=> {
    return(
        <h1 className="text-[#574240] text-[20px] font-sixHundrend">{text}</h1>
    )
}

const CartTable = () => {
  return (
    <div>
        <div className="flex justify-between mt-[72px] border-b py-[16px] border-b-[#C4C4C4]">
            <H1 text="PRODUCT" />
            <H1 text="PRICE" />
            <H1 text="QUANTITY"/>
            <H1 text="Remove"/>
            <H1 text="SUBTOTAL"/> 
        </div>
        <CartProduct src="/speaker.svg" id={1}/>
        <CartProduct src="/speaker.svg" id={2}/>
        <CartProduct src="/speaker.svg" id={3}/>
        <CartProduct src="/speaker.svg" id={4}/>
        <CartProduct src="/speaker.svg" id={5}/>
    </div>
  )
}

export default CartTable