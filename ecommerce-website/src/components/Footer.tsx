import Image from "next/image"
import Link from "next/link"
import SubscribeForm from "./SubscribeForm"
import FooterLinks from "./FooterLinks"
import CopyRight from "./CopyRight"


const Footer = () => {
  return (
    <footer 
        className="mt-[100px] bg-secondary pt-[64px]"
    >
        <div className="bg-[#D9BFBF] flex flex-col items-center justify-between py-[22px] md:px-[120px]">
            {/* <Link href={"/"}>
                <Image 
                    src="/MARCSONIC.svg"
                    width={120}
                    height={24}
                    alt="logo"
                />
            </Link> */}
            <div className="flex items-center  w-full justify-center text-center mb-[25px]">
                <div className="">
                    <h1 className="text-[20px] md:text-twentyFour text-center font-sixHundrend">How To Marcsonic Market?</h1>
                    <h5 className="text-[#463333] text-[13px] md:text-[16px] font-[500]">Be The First To Know About Our Latest Products</h5>
                </div>
            </div>
            <SubscribeForm />
        </div>
        <FooterLinks />
        <CopyRight />
    </footer>
  )
}

export default Footer