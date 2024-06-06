'use client';
import {  useCartContext } from "@/context/CartContext"
import CartProduct from "./CartProduct"
import QuantityButton from "./QuantityButton";
import RemoveItem from "./RemoveItem";


const TableDetails = () => {
    const { details } = useCartContext();

    const data = details.map((item, id) => ({
        product: <CartProduct src={item.src} id={item.id} />,
        price: item.price,
        subTotal: item.price * item.quantity,
        quantity: item.quantity, 
        id: item.id
    }))

  return (
    <>
        {data?.map((elem, id) =>(
            <tr className="border-b border-b-[#C4C4C4] " key={id}>
                <td className="text-[#574240] text-[20px] font-sixHundrend">{elem?.product }</td>
                <td className="text-[#574240] text-[20px] font-sixHundrend">{"$"+elem?.price }</td>
                <td className="text-[#574240] text-[20px] font-sixHundrend"><QuantityButton id={elem.id} num={elem.quantity} /></td>
                <td className="text-[#574240] text-[20px] font-sixHundrend"><RemoveItem id={elem.id} /></td>
                <td className="text-[#574240] text-[20px] font-sixHundrend">{"$"+elem?.subTotal }</td>
            </tr>
        ))}
    </>
    
  ) 
  
  
}

export default TableDetails