'use client';

import { Star } from "@/components/SVGs";
import { useRef, useState } from "react";

interface NoOfReviewLogicType{
  likes: any
} 
const NoOfReviewLogic = ({ likes } : NoOfReviewLogicType) => {
  const [noOFLikes, setNoOfLikes] = useState<number>(0);
  const number : string[] = ['', '', '', '', '', ''];
  
  const handleClick = (e : number) => {
    setNoOfLikes(e);
    likes(e);
  }

  return (
    <div>
      {
        number.map((item, id) =>(
          <button 
            key={id}
            onClick={() =>handleClick(id)}
            className="mr-[5px]"
          >
            <Star 
              color={id <= noOFLikes ? "#FFC107" : "black"}
            />
          </button>
        )
        )
      }
    </div>
  )
}

interface AddReviewType {
  name: string,
  text: string,
  likes: number,
  timePosted: string
}
const AddReview = () => {

  const [data, setData] = useState<AddReviewType>({
    name: "",
    text: "",
    likes: 0,
    timePosted: ""
  });

  const myMonths : string[] = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
  ]

  const handleLikes = (e : number) => {
    setData(prev => ({
      ...prev,
      likes: e+1
    }));
  }

  const handleSubmit = ( e : any )=> {
    e.preventDefault()
    const date = new Date();
    const monthNumber : number = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const meridian = date.getHours() > 12 ? "pm" : 'am';
    const minute = date.getMinutes();
    const timePosted = `${myMonths[monthNumber]} ${day}, ${year} at ${hour}:${minute} ${meridian}`
    setData(prev => ({
      ...prev,
      timePosted
    }))
  }
  return (
    <div>
        <h1>Add a Review</h1>
        <h5>Your email address will not be published, Required fields are marked *</h5>
        <h5>Your Rating: </h5>
        <NoOfReviewLogic likes={handleLikes} />
        <form 
          action=""
          onClick={handleSubmit}
        >
          <button>Submit</button>
        </form>
    </div>
  )
}

export default AddReview
