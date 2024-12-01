import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStockContext } from "../context/StockContext";
export default function TableView() {
    const { filteredStocks } = useStockContext();

    return (
        <table className="w-full border-t border-r border-l border-neutral-2 rounded-md overflow-hidden border-opacity-50 border-separate border-spacing-0 min-w-[400px]">
            <thead>
                <tr className="h-40">
                    <th className="mr-20 overflow-hidden font-medium text-left capitalize border-b border-opacity-50 w-100 bg-primary bg-opacity-10 border-neutral-2 first:pl-20 text-big whitespace-nowrap" >S.No</th>
                    <th className="mr-20 overflow-hidden font-medium text-left capitalize border-b border-opacity-50 w-400 bg-primary bg-opacity-10 border-neutral-2 first:pl-20 text-big whitespace-nowrap" >Name</th>
                    <th className="mr-20 overflow-hidden font-medium text-left capitalize border-b border-opacity-50 w-400 bg-primary bg-opacity-10 border-neutral-2 first:pl-20 text-big whitespace-nowrap">Description</th>
                    <th className="mr-20 overflow-hidden font-medium text-left capitalize border-b border-opacity-50 bg-primary bg-opacity-10 border-neutral-2 first:pl-20 text-big whitespace-nowrap">Price</th>
                    <th className="mr-20 overflow-hidden font-medium text-left capitalize border-b border-opacity-50 bg-primary bg-opacity-10 border-neutral-2 first:pl-20 text-big whitespace-nowrap">Quantity</th>
                    <th className="mr-20 overflow-hidden font-medium text-left capitalize border-b border-opacity-50 bg-primary bg-opacity-10 border-neutral-2 first:pl-20 text-big whitespace-nowrap">Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredStocks.map((stock, index) => (
                    <tr key={stock.id} className="h-40 text-center normal-case bg-accent-3 bg-opacity-4 font-default">
                        <td className="overflow-hidden text-left text-black border-b border-opacity-50 border-neutral-2 first:pl-20 text-big">{index + 1}</td>
                        <td className="overflow-hidden text-left text-black border-b border-opacity-50 border-neutral-2 first:pl-20 text-big py-14 pr-14">{stock.name}</td>
                        <td className="overflow-hidden text-left text-black border-b border-opacity-50 border-neutral-2 first:pl-20 text-big py-14 pr-14">{stock.desc}</td>
                        <td className="overflow-hidden text-left text-black border-b border-opacity-50 border-neutral-2 first:pl-20 text-big">{stock.price}</td>
                        <td className="overflow-hidden text-left text-black border-b border-opacity-50 border-neutral-2 first:pl-20 text-big">{stock.quantity}</td>
                        <td className="overflow-hidden text-left text-black border-b border-opacity-50 border-neutral-2 first:pl-20 text-big">
                            <div className="flex gap-10">
                                <FontAwesomeIcon className="w-20 h-20 text-black cursor-pointer" icon={faTrashCan} />
                                <FontAwesomeIcon className="w-20 h-20 text-black cursor-pointer" icon={faPenToSquare} />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}