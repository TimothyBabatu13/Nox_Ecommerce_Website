import AuthContext from "./AuthContext";
import CartContext from "./CartContext"

const Providers = ({ children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthContext>
      <CartContext>
        {children}
      </CartContext>
    </AuthContext>
   
  )
}

export default Providers