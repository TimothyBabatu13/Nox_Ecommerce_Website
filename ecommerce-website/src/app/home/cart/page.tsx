import CartTable from "./components/CartTable";
import EmptyCart from "./components/EmptyCart"
import RenderCorrectPage from "./components/RenderCorrectPage";

const page = async () => {
  //fecth data here to know the number of carts, then render based on
  const noOfCart = 0;
  //This is not the right way, tho. First try rendering it from server first.
  return (
    <main>
      <RenderCorrectPage />
      {/* {noOfCart > 0 ? <EmptyCart /> : <CartTable/>} */}
    </main>
  )
}

export default page