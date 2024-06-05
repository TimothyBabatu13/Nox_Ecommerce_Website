import { Metadata } from 'next';
import Form from './Form';
import Link from 'next/link';
import Image from 'next/image';
import { Dropdown } from '@/components/SVGs';


export const metadata: Metadata = {
  title: "MARCSONIC | Login",
  description: "Marcsonic- Home of shopping",
};


const page = () => {

  return (
    <main
      className='flex mt-[40px]' 
    >
      <div 
          className='w-full lg:w-[60%] flex flex-col justify-center'
        >
          <div className='w-[90%] mx-auto'>
            <h1 
              className='text-[#AF1313] text-[40px] text-center font-sevenHundred mb-[55px]'
            >
              Welcome Back!
            </h1>
            <Form />
          </div>
          
        </div>

        <div 
          style={{background: "url('/login.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}
          className='hidden lg:block w-[35%] h-[100vh]'
        >
          <div 
            className='bg-[#FFFFFFB2] flex flex-col justify-center text-left mx-auto h-full w-full rounded-tr-[50px] mt-[69px]'
          >
            <h1 className='text-[#574240] text-[30px] font-sevenHundred ml-[100px]'>Quality Products,</h1>
            <h1 className='text-[#574240] text-[30px] font-sevenHundred ml-[100px]'>Best Outputs</h1>
            <Link href={"/"}
              className=' text-[#AF1313] bg-[#FFFFFF] border font-sixHundrend ml-[100px] text-sixteen py-[16px] px-[24px] flex items-center w-fit rounded-[5px] mt-[100px]'
            >
              Shop with Marcsonic
              <Dropdown 
                clx='ml-[20px]'
                color='#AF1313'
              />
              {/* <Image 
                height={20} 
                width={20} 
                alt="dropdown" 
                src={"/dropdownred.svg"}
                className="ml-[20px]" 
              /> */}
            </Link>
          </div>
        </div>
    </main>
  )
}

export default page