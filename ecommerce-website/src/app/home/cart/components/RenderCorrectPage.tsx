'use client';

import { useCartContext } from "@/context/CartContext";
import CartTable from "./CartTable";
import EmptyCart from "./EmptyCart";

const RenderCorrectPage = () => {
    const { details } = useCartContext();

  return (
    <>
        {details.length > 0 ? <CartTable /> : <EmptyCart />}    
    </>
  )
}

export default RenderCorrectPage