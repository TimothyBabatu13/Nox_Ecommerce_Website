import { Metadata } from 'next';
import Form from './Form';
import Link from 'next/link';
import Image from 'next/image';
import { Dropdown } from '@/components/SVGs';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: "MARCSONIC | Register",
  description: "Marcsonic- Home of shopping",
};

const page = () => {
  return (
    <main
      className='flex mt-[40px]' 
    > 
        <div 
          className='w-[100%] lg:w-[65%] flex flex-col justify-center items-center'
        >
          <h1 className=' text-[30px] text-[#AF1313] font-sixHundrend mb-[49px]'>Create an account with marcsonic</h1>
          <Suspense fallback={<></>}>
            <Form />
          </Suspense>
        </div>
        <Suspense fallback={<></>}>
          <div 
            style={{background: "url('/register.svg')", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}
            className='hidden lg:block w-[35%] h-[100vh]'
          >
            <div 
              className='bg-[#FFFFFFB2] flex flex-col justify-center text-left mx-auto h-full w-full rounded-tr-[50px] mt-[69px]'
            >
              <h1 className='text-[#574240] text-[30px] font-sevenHundred ml-[100px]'>Organized Sound,</h1>
              <h1 className='text-[#574240] text-[30px] font-sevenHundred ml-[100px]'>Easy Life</h1>
              <Link href={"/"}
                className=' text-[#AF1313] border font-sixHundrend ml-[100px] text-sixteen py-[16px] px-[24px] flex items-center w-fit rounded-[5px] mt-[100px]'
              >
                Shop with Marcsonic
                <Dropdown 
                  clx='ml-[20px]'
                  color='#AF1313'
                />
              </Link>
            </div>
          </div>
        </Suspense>
    </main>
  )
}

export default page