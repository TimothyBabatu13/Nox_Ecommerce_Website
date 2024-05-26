import Review from "./Review"

interface reviewsType {
    noOfReviews: number,
    clx: string
}

const Reviews = ({ noOfReviews, clx } : reviewsType) => {
  return (
    <div
        className={`flex items-center ${clx}`}
    >
       <div
        className="flex items-center"
       >
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
       </div>
       <div 
        className="text-[#C7C0BF] text-[12px] font-fourHundrend ml-[9px]"
        >
       ({noOfReviews} {noOfReviews > 1 ? "Reviews" : "Review"})
       </div>
    </div>
  )
}

export default Reviews