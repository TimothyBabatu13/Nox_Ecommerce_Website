import BodyButton from "./BodyButton"

interface data {
    text: string
}
const H1 = ({ text }: data)=> {
    return (
        <h1 className="text-primary mb-[15px] font-sevenHundred text-fourtyEight">{text}</h1>
    )
}
const Camera = () => {
  return (
    <div 
        className="h-[600px] w-[100%] flex items-center justify-between pl-[120px] pr-[180px]" 
        style={{background: "url('/camera.svg')", backgroundPosition: "center/center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}
    >
        <div>
            <H1 
                text="It's Clean,"
            />
            <H1 
                text="It's Clear"
            />
            <BodyButton 
                href="/"
                text="Shop Now"
                props="mt-[30px]"
            />
        </div>
        <div className="h-[361px] w-[378px] bg-[#B60303]">

        </div>
    </div>
  )
}

export default Camera