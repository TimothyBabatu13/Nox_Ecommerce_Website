import { Metadata } from "next";
import VerificationButton from "./VerificationButton";

export const metadata: Metadata = {
    title: "MARCSONIC | Verify your email",
    description: "Marcsonic- Home of shopping",
  };

const page = () => {
  return (
    <main className="text-center mt-[120px]">
        <h1 className="text-[#AF1328] font-sevenHundred text-[40px] mb-[47px]">Verify your email to finish signing up to marcsonic</h1>
        <h5 className="text-[#574240] font-[700] text-sixteen mb-[20px]">Thank you for choosing Kwek</h5>
        <h5 className="text-[#574240] font-[700] text-sixteen">Please confirm that <span className="text-[#574240]">godsonakinbayo@gmail.com</span> is your email address by clicking the </h5>
        <h5 className="text-[#574240] font-[700] text-sixteen mb-[72px]">button below within the next 24hours</h5>
        <VerificationButton />
    </main>
  )
}

export default page