interface ButtonsType {
    src: any,
    onClick: () => void
}
const Buttons = ({ src, onClick } : ButtonsType) => {
    return(
        <button
            className="w-[40px] h-[48px] border border-[#BFA5A3] flex items-center justify-center"
            onClick={onClick}
        >
            {src}
        </button>
    )
}
export default Buttons