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
        className="h-[auto] min-h-[600px] w-[100%] flex items-center justify-center md:justify-normal md:pl-[120px]" 
        style={{background: "url('/camera.svg')", backgroundPosition: "center/center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
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
    </div>
  )
}

export default Camera