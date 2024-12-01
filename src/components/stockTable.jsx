import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/slice/stockSlice";
export default function StockTable() {
    const disPatch = useDispatch();
    const stocksList = useSelector(state => state.stocks.items);
    const searchQuery = useSelector(state => state.stocks.searchQuery)
    const handleSearch = (e) => {
        console.log("🚀 ~ handleSearch ~ e:", e)
        disPatch(setSearchQuery(e.target.value));
    }
    return (
        <div className="p-32 bg-white">
            <div className="mb-10">
                <label className="flex w-[300px] h-40 overflow-hidden border rounded-md border-neutral-2/50">
                    <div className="flex items-center h-full px-16 bg-accent-3">
                        <FontAwesomeIcon className="w-20 h-20" icon={faMagnifyingGlass} />
                    </div>
                    <input value={searchQuery}
                        onChange={handleSearch} placeholder="Search" className="w-full h-full rounded-md text-big bg-accent-3" />
                </label>
            </div>
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
                    {stocksList.map((stock, index) => (
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
        </div>
    )
}