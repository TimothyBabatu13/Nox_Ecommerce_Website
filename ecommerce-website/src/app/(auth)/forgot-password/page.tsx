
import { Metadata } from 'next';
import Form from './Form';

export const metadata: Metadata = {
  title: "MARCSONIC | Reset password",
  description: "Marcsonic - Home of shopping",
};

const page = () => {
  return (
    <section className='text-center mt-[80px]'>
      <h1 className='text-[#AF1328] text-[40px] font-sevenHundred mb-[21px]'>Forgot Password?</h1>
      <h5 className='text-[#B3B1B1] text-sixteen font-fourHundrend'>Don’t worry, resetting your password is easy. Just enter the email address you</h5>
      <h5 className='text-[#B3B1B1] text-sixteen font-fourHundrend mb-[54px]'>used to sign up to Kwek.</h5>
      <Form />
    </section>
  )
}

export default page