'use client';

import { useCartContext } from "@/context/CartContext";

const SubTotal = () => {
    const { details } = useCartContext();

    const newArr = details.map(elem => elem.price * elem.quantity);
    const amount = newArr.reduce((a, b) => a + b);
  return (
    <div>{amount}</div>
  )
}

export default SubTotal