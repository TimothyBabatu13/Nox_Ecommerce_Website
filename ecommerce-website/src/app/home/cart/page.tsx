import CartTable from "./components/CartTable";
import EmptyCart from "./components/EmptyCart"

const page = () => {
  const noOfCart = 0;
  return (
    <main>
      {noOfCart > 0 ? <EmptyCart /> : <CartTable/>}
    </main>
  )
}

export default page