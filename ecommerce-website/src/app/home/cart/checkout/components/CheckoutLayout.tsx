import { InactiveLink } from "@/components/SVGs"



const CheckoutLayout = ({ header, children }: {
    header: string,
    children: React.ReactNode
}) => {
  return (
    <main>
        <div className="flex mb-[32px]">
            <InactiveLink />
           <div className="ml-[24px]"> 
                <h5 className="mb-[47px] text-[22px] text-[#1D1616] font-sixHundrend">{header}</h5>
                <div className="">{children}</div>
            </div>
        </div>
        
    </main>
  )
}

export default CheckoutLayout