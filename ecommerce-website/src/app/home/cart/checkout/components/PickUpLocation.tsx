import { Cancel } from "@/components/SVGs"
import Link from "next/link"


const PickUpLocation = ({ active, handleClick } : {
    active: boolean,
    handleClick: ()=> void
}) => {
  return (
    <main className={`${active ? 'h-[90vh] overflow-y-scroll scale-100' : 'h-0 scale-0 overflow-hidden'} transition-all bg-[#FFFFFF] w-[70%] mx-auto fixed top-[20px]`}>
        <section className=' h-[147px] py-[42px] px-[80px]  flex items-center justify-between shadow shadow-[#8A959E33]'>
            <h1 className=" text-[40px] font-sevenHundred">PickUp Locations</h1>
            <button onClick={handleClick}><Cancel /></button>
        </section>
        <section className="py-[42px] px-[80px]">
            <div className="flex items-center justify-between">
                <h2 className=" text-twentyFour font-sixHundrend">Find the Pickup Location nearest to you</h2>
                <Link className="text-secondary text-twentyFour font-sixHundrend" href={'/'}>Show All</Link>
            </div>
        </section>
    </main>
  )
}

export default PickUpLocation