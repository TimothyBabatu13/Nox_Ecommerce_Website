import CartContext from "./CartContext"

const Providers = ({ children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
   <CartContext>
        {children}
    </CartContext>
  )
}

export default Providers