<<<<<<< HEAD
import Link from "next/link";
import Image from "next/image";
import HeaderClientComponent from "./HeaderClientComponent";
import UserProfile from "./UserProfile";
import LinkImage from "./LinkImage";
import Cart from "./Cart";
import { LikedIcon } from "./SVGs";


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
                <UserProfile />
                <LinkImage
                    href="/home/saved"
                    text="Saved"
                >
                    <LikedIcon clx="mr-[8px]"/>
                </LinkImage>
                <Cart />
            </HeaderClientComponent>
                {/* <Link 
                    href={"/login"}
                    className="text-secondary"
                >
                    Login 
                </Link>
                <Link 
                    href={"/register"}
                    className="bg-primary font-sevenHundred text-primary py-[16px] px-[24px] rounded-[5px] ml-[30px] transition-all hover:bg-[#af1313d0]"
                > Register Now 
                </Link> */}
           
            
        </div>
    </header>
  )
}

=======
import Link from "next/link";
import Image from "next/image";
import HeaderClientComponent from "./HeaderClientComponent";
import UserProfile from "./UserProfile";
import LinkImage from "./LinkImage";
import Cart from "./Cart";
import { LikedIcon } from "./SVGs";


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
                <UserProfile />
                <LinkImage
                    href="/home/saved"
                    text="Saved"
                >
                    <LikedIcon clx="mr-[8px]"/>
                </LinkImage>
                <Cart />
            </HeaderClientComponent>
                {/* <Link 
                    href={"/login"}
                    className="text-secondary"
                >
                    Login 
                </Link>
                <Link 
                    href={"/register"}
                    className="bg-primary font-sevenHundred text-primary py-[16px] px-[24px] rounded-[5px] ml-[30px] transition-all hover:bg-[#af1313d0]"
                > Register Now 
                </Link> */}
           
            
        </div>
    </header>
  )
}

>>>>>>> fa096c5419a1cc3487731f6ea6c5b651a34dad8a
export default Header