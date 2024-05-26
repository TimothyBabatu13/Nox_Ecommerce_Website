
interface OverAllType {
    children: any,
    text: string
}

const OverallContainer = ({
    children, text
  }:  OverAllType) => {
  return (
    <section
        className="mt-[100px]"
    >
        <h1
            className="text-[#201A1A] text-[40px] font-sevenHundred mb-[56px]"
        >
            {text}
        </h1>
       {children}
    </section>
  )
}

export default OverallContainer


