
import { ArrowDown, User } from "./SVGs"


const UserProfile = () => {

    const name = "Chummy"

  return (
    <button
        className="hidden md:flex items-center ml-[50px]"
    >
        
        <User 
            clx="mr-[3px]"
        />
        <h4 
            className="mr-[3px] text-[#737373] font-fourHundrend text-sixteen"
        >
            Hi, {name}
        </h4>
        <ArrowDown />
    </button>
  )
}

export default UserProfile