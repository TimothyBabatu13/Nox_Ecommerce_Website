import { Suspense } from "react"
import Form from "./Form"


const page = () => {
  return (
    <section className='text-center mt-[30px]'>
      <h1 className='text-[#AF1328] text-[40px] font-sevenHundred mb-[19px]'>Reset your Password.</h1>
      <h5 className='text-[#B3B1B1] text-sixteen font-fourHundrend mb-[54px]'>Reset your password to continue.</h5>
      <Suspense fallback={<></>}>
        <Form />
      </Suspense>
    </section>
  )
}

export default page