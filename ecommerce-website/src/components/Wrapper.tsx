import { ReactNode } from "react"


const Wrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <main className="w-[90%] mx-auto">
        {children}
    </main>
  )
}

export default Wrapper