import Image from "next/image"


const Review = () => {
    return <Image 
        src={"/filled star.svg"}
        height={16}
        width={15}
        alt="filled star"
        className="mr-[6px]"
    />
}

export default Review