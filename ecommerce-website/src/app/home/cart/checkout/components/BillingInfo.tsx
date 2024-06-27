const BillingInfo = ({ active, checked, setActiveBack, number } : {
    active: boolean,
    checked: boolean,
    setActiveBack: (e: number) => void,
    number: number
}) => {

    const handleClick = () => {
        setActiveBack(number)
    }

  return (
    <>
        {!active && checked ? 
        <div className="mt-[47px] flex justify-between border border-[#141414] p-[24px] rounded-[5px] shadow">
            <div className="w-[70%]">
                <h5 className=" text-sixteen font-sixHundrend text-[#1D1616] mb-[2px]">Godson Akinbayo</h5>
                <h6 className=" text-fourteen font-fourHundrend text-[#574240] mb-[2px]">Suite 5, OGB Plaza, Obafemi Awolowo Way, Utako, Abuja.</h6>
                <h6 className="text-fourteen font-fourHundrend text-[#574240]">+234 812 3456 7890</h6>
            </div>
            <button onClick={handleClick} className="text-[#AF1328] underline text-[13px]">Edit Information</button>
        </div>
        :
        ''    
    }
    </>
    
  )
}

export default BillingInfo