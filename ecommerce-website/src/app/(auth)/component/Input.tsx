
interface data {
    name: string,
    type: string,
    placeholder: string,
    onChange: any,
    value: string
}
//w-[745px]
const Input = ({ name, type, value, placeholder, onChange } : data) => {
    return(
        <input 
            type={type}
            className=" w-[100%] border rounded-[5px] py-[24px] px-[32px] mb-[16px] text-[#B3B1B1] font-fourHundrend text-sixteen" 
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
        />
    )
}

export default Input;