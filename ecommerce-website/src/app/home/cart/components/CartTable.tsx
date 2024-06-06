import Table from "@/components/Table"
import CartProduct from "./CartProduct"
import TableDetails from "./RenderProducts"
import Form from "./Form"

const TableHead = [
    {
        text: "PRODUCT",
        style: ""
    },
    {
        text: "PRICE",
        style: ""
    },
    {
        text: "QUANTITY",
        style: ""
    },
    {
        text: "Remove",
        style: ""
    },
    {
        text: "SUBTOTAL",
        style: ""
    },
]

const CartTable = () => {
  return (
    <div>
        <Table 
            tableHead={TableHead}
        >
            <TableDetails />
        </Table>
        {/* <div className="flex justify-between mt-[72px] border-b py-[16px] border-b-[#C4C4C4]">
            <H1 text="PRODUCT" />
            <H1 text="PRICE" />
            <H1 text="QUANTITY"/>
            <H1 text="Remove"/>
            <H1 text="SUBTOTAL"/> 
        </div>
        <CartProduct src="/speaker.svg" id={1}/>
        <CartProduct src="/speaker.svg" id={2}/>
        <CartProduct src="/speaker.svg" id={3}/>
        <CartProduct src="/speaker.svg" id={4}/>
        <CartProduct src="/speaker.svg" id={5}/> */}
        <Form />
    </div>
  )
}

export default CartTable