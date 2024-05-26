import Reviews from "../../components/Reviews"
import BuyButton from "./BuyButton"
import PaymentOp from "./PaymentOp"
import SocialMediaDetails from "./SocialMediaDetails"

interface idType {
    id: string
}
const ProductsDetails = ({ id } : idType) => {
    // console.log(id)
  return (
    <section>
        <h1 className=" font-sevenHundred text-[32px] text-[#1D1616] mb-[5px]">Home Speaker</h1>
        <h4 className=" font-sixHundrend text-twentyFour text-[#1D1616] mb-[10px]">$25.00</h4>
        <Reviews 
            noOfReviews={6}
            clx=""
        />
        <h5 className="mt-[20px] font-fourHundrend text-sixteen text-[#818181] mb-[30px]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        
        </h5>
        {/* <BuyButton /> */}
        <BuyButton />
        <PaymentOp />
        <SocialMediaDetails />
    </section>
  )
}

export default ProductsDetails