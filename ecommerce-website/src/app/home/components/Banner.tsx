import Link from "next/link";
import Image from "next/image";
import css from "@/components/ButtonTransition.module.css";
interface data {
    href: string,
    text: string,
    props: string
}
const BodyButton = ({ href, text, props } : data) => {
    
    return (
      <Link 
          className={`${css.bu} bg-[#E9A501] text-[#222222] font-sixHundrend text-[14px] md:text-sixteen py-[16px] px-[24px] flex items-center w-fit rounded-[5px] transition-all hover:bg-[#e9a301db] ${props != undefined ? props : ""}`} 
          href={href}
              >{text} 
                  <Image 
                      height={20} 
                      width={20} 
                      alt="dropdown" 
                      src={"/right.svg"}
                      className={`ml-[20px] ${css.bodyBotton}`} 
                  />
              </Link>
    )
  }

const Banner = () => {
  return (
    <section
        className="bg-rectangle pl-[50px] h-[500px] w-full mt-[39px] flex flex-col justify-center md:pl-[100px]"
    >
        <h1 
            className="text-primary text-[30px] md:text-[64px] font-eightHundred mb-[21px]"
        >FOR WOMEN</h1>
        <h5 className=" text-[32px] font-sixHundrend text-primary mb-[12px]">Get up to 30% Off <span className="font-[300]">on all Products</span></h5>
        <h6 className="text-[18px] md:text-[20px] font-[300] text-primary mb-[40px]">Get Free Shipping on all orders over $99.90</h6>
        <BodyButton 
            href="/"
            text="SHOP NOW"
            props=""
        />
    </section>
  )
}

export default Banner