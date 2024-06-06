import Order from "./components/Order"

interface LayoutProps {
    children: React.ReactElement
}
const layout = ({ children } : LayoutProps)  => {
  return (
    <main className="flex mt-[87px]">
        <div className="border border-[#141414] w-[55%] mr-[32px] py-[30px] px-[40px]">{children}</div>
        <div className="w-[45%] border border-[#BFA5A3]"><Order /></div>
    </main>
  )
}

export default layout