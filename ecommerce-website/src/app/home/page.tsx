import Link from "next/link"
import Banner from "./components/Banner"
import BestDeals from "./components/BestDeals"
import MoreToLike from "./components/MoreToLike"
import Image from "next/image"
import BlackFriday from "./components/BlackFriday";

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
        <Image 
            width={24}
            height={24} 
            alt="link" 
            src="/share.svg"
            className={`ml-[4px]`}
        />
      </Link>
      <MoreToLike />
      {/* <BlackFriday /> */}
    </main>
  )
}

export default page