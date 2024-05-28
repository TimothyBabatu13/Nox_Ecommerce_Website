import { Star } from "@/components/SVGs";

const AverageReviewRating = () => {
    //fetch data here and calculate the average review rating
    //using formula of mean
    const stars : string[] = ['','','','','',''];
    const numberOfReviews : number = (6 + 4 + 1 + 2);
    const numberOfPeople : number = 4;
    const averageReview : number = Math.round(numberOfReviews / numberOfPeople)
    
  return (
    <div className="flex items-center">
        {
            stars.map((star, id) => (
                <Star 
                    color={id <= averageReview ?  "#FFC107" : "black"}
                    key={id}
                />
            ))
        }
    </div>
  )
}

export default AverageReviewRating