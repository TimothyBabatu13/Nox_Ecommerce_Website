import Link from "next/link"
import Banner from "./components/Banner"
import BestDeals from "./components/BestDeals"
import MoreToLike from "./components/MoreToLike"
import { Share } from "@/components/SVGs"
import { Suspense } from "react"

const page = () => {
  return (
    <main>
      <Suspense fallback={<></>}> 
        <Banner />
      </Suspense>
      <Suspense fallback={<></>}>
        <BestDeals />
      </Suspense>
      <Suspense fallback={<></>}>
        <MoreToLike />
      </Suspense>
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