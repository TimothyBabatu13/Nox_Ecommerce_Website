import Link from "next/link";
import Image from "next/image";
import HeaderClientComponent from "./HeaderClientComponent";


const Header = () => {
  return (
    <header className="flex items-center justify-between py-[20px] text-sixteen">
        <Link href={"/"}>
            <Image 
                src="/MARCSONIC.svg" 
                height={24.02} 
                width={209} 
                alt="marcosonic"
            />
        </Link>

        <div>
            <HeaderClientComponent>
                <Link 
                    href={"/login"}
                    className="text-secondary"
                >
                    Login 
                </Link>
                <Link 
                    href={"/register"}
                    className="bg-primary font-sevenHundred text-primary py-[16px] px-[24px] rounded-[5px] ml-[30px] transition-all hover:bg-[#af1313d0]"
                > Register Now 
                </Link>
            </HeaderClientComponent>
            
        </div>
    </header>
  )
}

export default Header