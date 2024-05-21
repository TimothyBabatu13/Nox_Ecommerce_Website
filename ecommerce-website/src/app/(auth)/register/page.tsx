import { Metadata } from 'next';
import Wrapper from '@/components/Wrapper';

export const metadata: Metadata = {
  title: "MARCSONIC | Register",
  description: "Marcsonic- Home of shopping",
};

const page = () => {
  return (
    <Wrapper> 
        Register
    </Wrapper>
  )
}

export default page