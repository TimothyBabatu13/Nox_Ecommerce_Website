import Image from "next/image"
import Link from "next/link"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "./SVGs"

const data = [
    {
        title: "PAYMENT",
        texts: [
            {
                text: "Wallet",
                link: "/"
            },
            {
                text: "Verve",
                link: "/"
            },
            {
                text: "Mastercard",
                link: "/"
            },
            {
                text: "Paystack",
                link: "/"
            },
            {
                text: "Visa",
                link: "/"
            },
        ]
    },
    {
        title: "BASICS",
        texts: [
            {
                text: "About/Contack",
                link: "/"
            },
            {
                text: "Returns/Warranty",
                link: "/"
            },
            {
                text: "Privacy Policy",
                link: "/"
            },
            {
                text: "Terms Of Service",
                link: "/"
            },
        ]
    },
    {
        title: "BUYING ON HERE",
        texts: [
            {
                text: "FAQs",
                link: "/"
            },
            {
                text: "Delivery",
                link: "/"
            },
            {
                text: "Here Return Policy",
                link: "/"
            },
            {
                text: "Bulk Purchase",
                link: "/"
            },
        ]
    }
]

interface textData {
    text: string
}
const H1 = ({ text }: textData) => {
    return(
        <h1 className=" text-[18px] font-sixHundrend mb-[29px]">{text}</h1>
    )
}

interface SocialMediaLinkData {
    img: string,
    href: string,
    children: any
}
const SocialMediaLink = ({ img, href, children } : SocialMediaLinkData)  => {
    return (
        <Link 
            href={href}
            className="mr-[20px] lg:mr-0 hover:-translate-y-[10px] transition-all"
            target="_blank"
        >
            {children}
        </Link>
    )
}

const socialMediaData : SocialMediaLinkData[] = [
    {
        img: "/facebook.svg",
        href: "",
        children: <FacebookIcon />
    },
    {
        children: <InstagramIcon />,
        img: "/instagram.svg",
        href: "https://www.instagram.com/timothy_akanbi"
    },
    {
        children: <TwitterIcon />,
        img: "/twitter.svg",
        href: "https://www.twitter.com/timothy_akanbii"
    },
]
const FooterLinks = () => {
  return (
    <section 
        className="flex flex-col lg:flex-row justify-between text-[#A7A7A7] pt-[112px] px-[120px]"
    >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
            {
                data.map(((item, id) =>(
                    <div key={id}>
                        <H1 text={item.title}/>
                        {
                            item.texts.map((item, id) =>(
                                <Link 
                                    key={`a${id}`} 
                                    href={item.link}
                                    className="block text-sixteen font-fourHundrend mb-[19px] transition hover:opacity-[0.5]"
                                >
                                    {item.text}
                                </Link>
                            ))
                        }
                    </div>
                )))
            }
        </div>
        <div>
           <H1 text="Connect With Us" />
           <div className="flex items-center lg:justify-between">
            {
                socialMediaData.map((item, id)=>(
                    <SocialMediaLink 
                        key={id}
                        img={item.img}
                        href={item.href}
                    >
                        {item.children}
                    </SocialMediaLink>
                ))
            }
           </div>
        </div>
    </section>
  )
}

export default FooterLinks