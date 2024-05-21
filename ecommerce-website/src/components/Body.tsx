import Link from "next/link"
import Image from "next/image"
const Body = () => {
  return (
    <section className="flex mt-[52px] ">
        <main className=" flex-grow-[2]">
            <h1 
                className="text-ninetySix text-[#201A1A] font-eightHundred"
            >Let Your Speakers</h1>
            <h1 
                className="text-ninetySix text-[#201A1AB2] font-eightHundred mb-[24px] leading-[0.9]"
            >Do The Talking</h1>
            <h5 
                className="text-sixteen text-[#909090]"
            >Buy audio speakers for your music/media center, home theater, or as a gift</h5>
            <h5 
                className="text-sixteen text-[#909090] mb-[40px]"
            >The best, high-quality audio equipment all in one place</h5>
            <Link 
                className="bg-primary text-primary font-sixHundrend text-sixteen py-[16px] px-[24px] flex items-center w-fit rounded-[5px]" 
                href={"/"}
            >Shop Now 
                <Image 
                    height={20} 
                    width={20} 
                    alt="dropdown" 
                    src={"/dropdown.svg"}
                    className="ml-[20px]" 
                />
            </Link>
        </main>
        <main className="relative">
            <Image src={"/body_main.svg"} width={400} height={651} alt="body_main" />
            {/* <Image 
                src={"/main_overlay.svg"} 
                width={504} 
                height={504} 
                alt="overlay"
                className=" absolute top-0 -z-30 -left-[15rem]"
            /> */}
        </main>
    </section>
  )
}

export default Body