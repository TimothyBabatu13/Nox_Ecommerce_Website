import Image from "next/image"
import Review from "../../components/Review"

interface UserType {
    src: string,
    name: string,
    time: string,
    review: string,
}
const User = ({ src, name, time, review } : UserType) => {
  return (
    <div
        className="flex border-t border-t-[#BFA5A3] py-[32px]"
    >
        <Image
            src={src}
            width={80}
            height={80}
            alt="user image"
            className="mr-[32px]"
        />
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-[#1D1616] text-sixteen font-[500] mb-[2px]">{name}</h1>
                    <h6 className="text-[#BFA5A3] text-sixteen font-fourHundrend mb-[16px]">{time}</h6>
                </div>
                <div className="flex items-center">
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </div>
            </div>
            <h3 className="text-[#574240] text-sixteen font-fourHundrend">{review}</h3>
        </div>
    </div>
  )
}

export default User



