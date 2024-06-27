import AuthContext from "./AuthContext";
import BillingContext from "./BillingContext";
import CartContext from "./CartContext"

const Providers = ({ children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <AuthContext>
      <CartContext>
        <BillingContext>
          {children}
        </BillingContext>
      </CartContext>
    </AuthContext>
   
  )
}

export default Providers