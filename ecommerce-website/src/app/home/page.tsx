import Link from "next/link"
import Banner from "./components/Banner"
import BestDeals from "./components/BestDeals"
import MoreToLike from "./components/MoreToLike"
import { Share } from "@/components/SVGs"

const page = () => {
  return (
    <main>
      <Banner />
      <BestDeals />
      <MoreToLike />
      <Link 
        href={""}
        className="flex justify-center items-center text-[22px] text-primary font-[500] bg-secondary py-[35px] my-[97px] rounded-[5px]"
      >
        <div>Fast and free delivery</div>
        <Share 
          clx="ml-[4px]"
        />
      </Link>
      <MoreToLike />
      {/* <BlackFriday /> */}
    </main>
  )
}

export default page