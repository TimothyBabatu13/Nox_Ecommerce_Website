interface data {
    number: string,
    text: string,
    border: boolean
}
const InfoCard = ({ number, text, border  }: data) => {
  return (
    <div className={`text-center ${border && "border-r"} px-[40px]`}>
        <h1 className="text-fourtyEight font-sevenHundred">{number}</h1>
        <h5 className="text-sixteen font-fourHundrend text-[#1D1616]">{text}</h5>
    </div>
  )
}

export default InfoCard