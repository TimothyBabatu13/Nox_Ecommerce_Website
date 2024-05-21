import InfoCard from "./InfoCard"

interface Data {
    text: string,
    number: string
}
const data : Data[] = [
    {
        text: "Active buyers",
        number: "1,432,908"
    },
    {
        text: "Daily producyt inquiry",
        number: "314,546"
    },
    {
        text: "regions represented",
        number: "200+"
    },
    {
        text: "Stores registered",
        number: "12,087"
    }
]

const Info = () => {
  return (
    <div className=" md:flex justify-between mt-[81px] border py-[40px] ">
        {data.map((item, id)=>(
            <InfoCard 
                border={id != data.length - 1 ? true : false} 
                key={id} 
                number={item.number} 
                text={item.text} 
            />
        ))}
    </div>
  )
}

export default Info