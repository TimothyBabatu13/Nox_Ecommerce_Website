interface data {
    number: string,
    text: string,
    border: boolean
}
const InfoCard = ({ number, text, border  }: data) => {
  return (
    <div className={`text-center ${border && "md:border-r" } px-[30px]`}>
        <h1 className="text-[29px] font-sevenHundred">{number}</h1>
        <h5 className="text-sixteen font-fourHundrend text-[#1D1616]">{text}</h5>
    </div>
  )
}

export default InfoCard