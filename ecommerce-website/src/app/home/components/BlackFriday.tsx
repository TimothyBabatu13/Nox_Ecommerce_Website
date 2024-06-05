import Link from "next/link"

const BlackFriday = () => {
  return (
    <section
        className="bg-blackFriday h-[323px] w-full"
    >
        <h1 
            className="py-[12px] bg-[#15121078] w-fit"
        >THRIFT THURSDAY</h1>
        <h1>20%  OFF MAIN SPEAKERS</h1>
        <Link href={"/"}>SHOP NOW</Link>
    </section>
  )
}

export default BlackFriday

