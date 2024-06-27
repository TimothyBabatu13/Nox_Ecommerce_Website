import { useEffect, useState } from "react"
import BillingInfo from "./BillingInfo"
import DeliveryMethodCard from "./DeliveryMethodCard";
import { useBillingContext } from "@/context/BillingContext";
import PickUpLocation from "./PickUpLocation";


const DeliveryMethod = ({ active, number, setActiveBack, setNumber }: {
    setActiveBack: (e: number) => void,
    active: boolean,
    number: number,
    setNumber: (e: number) => void
}) => {
    const [checked, setChecked] = useState(false);
    const [trackNo, setTrackNo] = useState<number>(2);
    const { details } = useBillingContext();

    const [showPickupLocations, setPickUpLocations] = useState<boolean>(false);

    const handleClick = ( id : number ) => {
        setTrackNo(id)
    }
    
    const handleSubmit = () => {
        setChecked(true)
        setNumber(number)
    }
 
    useEffect(()=>{
        if(trackNo === 1) setPickUpLocations(true);
    }, [trackNo])
  return (
    <>
        <div className={`transition-all ${!active ? "h-0 overflow-hidden " : "mt-[47px]"}`}>
            {/* <h5 className="mb-[10px]">How do you want your order to be delivered?</h5> */}
            <div>
                <DeliveryMethodCard 
                    src="/transaction.svg" 
                    head="Deliver to me" 
                    body="Delivered within 24 hours for $20" 
                    isBadge={false}
                    handleClick={handleClick}
                    id={0}
                    track={trackNo}
                />
                <div className="mb-[10px]"/>
                <DeliveryMethodCard 
                    src="/transaction.svg" 
                    head="Pick-up Station" 
                    body="Select a pickup location in your area from our 33 locations nationwide." 
                    isBadge
                    handleClick={handleClick}
                    id={1}
                    track={trackNo}
                />
            </div>
            <button 
            type="submit"
            onClick={handleSubmit}
            disabled={trackNo === 1 || trackNo === 0 ? false : true}
            className="block w-full text-sixteen font-sixHundrend text-primary py-[20px] bg-[#AF1328] rounded-[5px] mt-[16px]"
            >Proceed to Continue</button>
        </div>
        <PickUpLocation active={showPickupLocations} handleClick={()=>setPickUpLocations(false)}/>
        <BillingInfo number={number} setActiveBack={(e: number)=>setActiveBack(number)} checked={checked} active={active}/>
    </>
  )
}

export default DeliveryMethod