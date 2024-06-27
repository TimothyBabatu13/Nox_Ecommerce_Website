import Image from "next/image"

const DeliveryMethodCard = ({ src, head, body, isBadge, id, track, handleClick } : {
    src: string,
    head: string,
    body: string,
    isBadge: boolean,
    id: number,
    track: number,
    handleClick: (id : number) => void
}) => {
  return (
    
      <div role="button" onClick={()=>handleClick(id)} className={`${track === id ? 'border-[#FFDF7D]' : 'border-[#D3D3D3]'} flex items-center w-full border  rounded-[5px] shadow py-[39px] px-[32px]`}>
          <Image 
              src={src}
              height={56}
              width={56}
              alt="img"
              className="mr-[16px]"
          />
          <div>
              <h5 className=" text-eighteen font-[500] text-[#1D1616] mb-[16px]">{head}</h5>
              <h6 className=" text-fourteen font-fourHundrend text-[#574240]">{body}</h6>
              {isBadge && <div className="mt-[10px] w-[fit-content] py-[9px] px-[24px] text-[12px] font-fourHundrend border border-secondary text-secondary rounded-[5px]">Select Pickup Location</div>}
          </div>
          
      </div>
    
    
  )
}

export default DeliveryMethodCard