import Wrapper from "@/components/Wrapper"
import Link from "next/link"

interface dataType {
    text: string,
    link: string,
}

const data : dataType[] = [
    {
        text: "Home Theaters",
        link: ""
    },
    {
        text: "Trolley Speakers",
        link: ""
    },
    {
        text: "In-wall Speakers",
        link: ""
    },
    {
        text: "Ear-pods",
        link: ""
    },
    {
        text: "About Us",
        link: ""
    },
    {
        text: "Customer Service",
        link: ""
    },
    {
        text: "Explore",
        link: ""
    },
]

interface linksData {
    text: string,
    link: string,
    clx: string
}
const Links = ({ link, text, clx }: linksData) => {
    return(
        <Link 
            href={link}
            className={`text-primary text-[14px] font-[500] ${clx}`}
        >
            {text}
        </Link>
    )
}
const Header = () => {
  return (
    <main
        className="bg-primary py-[28px]"
    >
        <Wrapper>
            <div
                className="hidden md:flex"
            >
                <div
                className="flex justify-between"
                >
                    {data.map((link, id)=>(
                        <Links 
                            link={link.link}
                            text={link.text}
                            key={id}
                            clx="mr-[20px]"
                        />
                    ))}
                </div>
                <Links 
                    link=""
                    text="Reviews"
                    clx="ml-auto"
                />
            </div>
        </Wrapper>
    </main>
  )
}

export default Header