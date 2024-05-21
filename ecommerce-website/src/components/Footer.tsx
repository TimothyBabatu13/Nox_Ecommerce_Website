import Image from "next/image"
import Link from "next/link"
import SubscribeForm from "./SubscribeForm"
import FooterLinks from "./FooterLinks"
import CopyRight from "./CopyRight"


const Footer = () => {
  return (
    <footer 
        className="mt-[100px] bg-secondary pt-[64px] pb-[45px]"
    >
        <div className="bg-[#D9BFBF] flex items-center justify-between py-[22px] px-[120px]">
            <Link href={"/"}>
                <Image 
                    src="/MARCSONIC.svg"
                    width={120}
                    height={24}
                    alt="logo"
                />
            </Link>
            <div className="flex items-center justify-between">
                <div className="">
                    <h1 className="text- font-sixHundrend">How To Marcsonic Market?</h1>
                    <h5 className="text-[#463333] text-[12px] font-[500]">Be The First To Know About Our Latest Products</h5>
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