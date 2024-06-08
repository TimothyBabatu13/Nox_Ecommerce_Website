'use client'
import { useCartContext } from "@/context/CartContext"
import OrderCard from "./OrderCard";


const OrderProducts = () => {

    const { details } = useCartContext();

    const data = details.map(item => (
        {
            src: item.src,
            quantity: item.quantity,
            price: item.price
        }
    ))
  
  return (
    <>
        {data.map((item, id) => (
            <OrderCard key={id} src={item.src} quantity={item.quantity} price={item.price}/>
        ))}
    </>
  )
}

export default OrderProducts