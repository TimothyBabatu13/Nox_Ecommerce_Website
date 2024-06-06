interface TableHeadProps {
    text: string,
    style: string
}

interface TableProps {
    tableHead: TableHeadProps[];
    children: React.ReactElement
}

const Table = ({ tableHead, children } : TableProps) => {

  return (
    <table className="w-[100%]">
        <thead className="py-[200px]">
            <tr className="border-b" >
                {tableHead.map((elem, id) =>(
                    <th key={id} className="text-[#574240] text-left text-[20px] font-sixHundrend"><p className="py-[16px]">{elem.text}</p></th>
                ))}
            </tr>
        </thead>
       <tbody>
        {children}
       </tbody>
    </table>
  )
}

export default Table