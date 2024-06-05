
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
              color={id <= noOFLikes ? "#FFC107" : "#BFA5A3"}
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
    <div className="border border-[#BFA5A3] py-[40px] px-[48px]">
        <h1 className="text-[#574240] text-[22px] font-sixHundrend mb-[16px]">Add a Review</h1>
        <h5 className="text-[#BFA5A3] text-sixteen font-fourHundrend mb-[26px]">Your email address will not be published, Required fields are marked *</h5>
        <div className="flex items-center mb-[32px]">
          <h5 className=" text-eighteen font-[500] text-[#1D1616] mr-[24px]">Your Rating: </h5>
          <NoOfReviewLogic likes={handleLikes} />
        </div>
        <form 
          action=""
          onClick={handleSubmit}
        >
          <textarea 
          draggable={false}
            name="" 
            id=""
            required
            placeholder="Comment*"
            className="w-full h-[182px] border border-[#BFA5A3] p-[24px] text-sixteen font-fourHundrend text-[#BFA5A3]" 
          />
          <div className="grid gap-[24px] grid-cols-2 mt-[24px] mb-[40px]">
            <input 
              type="text" 
              required 
              name="" 
              id="" 
              placeholder="Name*"
              className="w-full h-[80px] border border-[#BFA5A3] p-[24px] text-sixteen font-fourHundrend text-[#BFA5A3]" 
            />
           <input 
              type="email" 
              required 
              name="" 
              id="" 
              placeholder="Email*"
              className="w-full h-[80px] border border-[#BFA5A3] p-[24px] text-sixteen font-fourHundrend text-[#BFA5A3]" 
            />
          </div>
          <button className="bg-primary w-[80%] py-[24px] rounded-[5px] text-[22px] font-sixHundrend text-primary block mx-auto">Submit</button>
        </form>
    </div>
  )
}


export default AddReview