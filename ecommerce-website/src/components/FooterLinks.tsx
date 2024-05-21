import Image from "next/image"
import Link from "next/link"

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
    name: string
}
const SocialMediaLink = ({ img, href, name } : SocialMediaLinkData)  => {
    return (
        <Link href={href}>
            <Image 
                width={40}
                height={40}
                alt={name}
                src={img}
            />
        </Link>
    )
}

const socialMediaData : SocialMediaLinkData[] = [
    {
        name: "Facebook",
        img: "/facebook.svg",
        href: ""
    },
    {
        name: "Instagram",
        img: "/instagram.svg",
        href: ""
    },
    {
        name: "Twitter",
        img: "/twitter.svg",
        href: ""
    },
]
const FooterLinks = () => {
  return (
    <section 
        className="flex justify-between text-[#A7A7A7] pt-[112px] px-[120px]"
    >
        <div className="grid grid-cols-3 gap-[20px]">
            {
                data.map(((item, id) =>(
                    <div key={id}>
                        <H1 text={item.title}/>
                        {
                            item.texts.map((item, id) =>(
                                <Link 
                                    key={`a${id}`} 
                                    href={item.link}
                                    className="block text-sixteen font-fourHundrend mb-[19px]"
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
           <div className="flex items-center justify-between">
            {
                socialMediaData.map((item, id)=>(
                    <SocialMediaLink 
                        key={id}
                        img={item.img}
                        href={item.href}
                        name={item.name}
                    />
                ))
            }
           </div>
        </div>
    </section>
  )
}

export default FooterLinks