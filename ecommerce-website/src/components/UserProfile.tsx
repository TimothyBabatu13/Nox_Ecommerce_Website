import Image from "next/image"


const UserProfile = () => {

    const name = "Chummy"

  return (
    <button
        className="hidden md:flex items-center ml-[50px]"
    >
        <Image 
            src="/user.svg"
            width={22}
            height={24}
            alt="User"
            className="mr-[3px]"
        />
        <h4 
            className="mr-[3px] text-[#737373] font-fourHundrend text-sixteen"
        >
            Hi, {name}
        </h4>
        <Image 
            src="/arrordown.svg"
            width={8}
            height={8}
            alt="arrow down"
        />
    </button>
  )
}

export default UserProfile