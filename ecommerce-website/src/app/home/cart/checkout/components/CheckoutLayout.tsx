import { InactiveLink } from "@/components/SVGs"



const CheckoutLayout = ({ header, children, active }: {
    header: string,
    children: React.ReactNode,
    active: boolean
}) => {
  return (
    <main>
        <div className="flex border border-[#141414] py-[30px] px-[40px] mb-[32px]">
            <InactiveLink active={active}/>
           <div className="ml-[24px] w-full"> 
                <h5 className="text-[22px] text-[#1D1616] font-sixHundrend">{header}</h5>
                <div>{children}</div>
            </div>
        </div>
        
    </main>
  )
}

export default CheckoutLayout