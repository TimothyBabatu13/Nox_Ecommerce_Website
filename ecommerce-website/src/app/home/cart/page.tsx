import CartTable from "./components/CartTable";
import EmptyCart from "./components/EmptyCart"

const page = async () => {
  //fecth data here to know the number of carts, then render based on
  const noOfCart = 0;
  return (
    <main>
      {noOfCart > 0 ? <EmptyCart /> : <CartTable/>}
    </main>
  )
}

export default page