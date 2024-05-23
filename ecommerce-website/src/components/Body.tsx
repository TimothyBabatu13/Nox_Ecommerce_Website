
import Image from "next/image"
import BodyButton from "./BodyButton"
const Body = () => {
  return (
    <section className="md:flex mt-[52px] ">
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
            <BodyButton 
                text="Shop Now"
                href="/"
                props=""
            />
        </main>
        <main className="relative hidden md:block">
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