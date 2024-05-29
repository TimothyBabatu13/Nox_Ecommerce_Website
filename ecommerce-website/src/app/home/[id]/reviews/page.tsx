import Review from "../../components/Review"
import AddReview from "./AddReview"
import AverageReviewRating from "./AverageReviewRating"
import User from "./User"


const page = () => {
  return (
    <section>
        <div className="flex items-center mb-[35px]">
            <h1 className="text-[#1D1616] text-eighteen font-[500] mr-[32px]">Average Rating: </h1>
            <AverageReviewRating />
        </div>
        <User 
            src="/man's image.jpg"
            name="James Afuye"
            time="November 9, 2020 at 3:20 pm"
            review="Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, avida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat."
        />
        <User 
            src="/man's image.jpg"
            name="James Afuye"
            time="November 9, 2020 at 3:20 pm"
            review="Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, avida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat."
        />
        <AddReview />
    </section>
  )
}

export default page