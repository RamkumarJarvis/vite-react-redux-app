import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../redux/slice/stockSlice";

export default function SearchBox() {
    const dispatch = useDispatch();
    const searchQuery = useSelector(state => state.stocks.searchQuery);
    const handleSearch = (e) => {
        console.log("🚀 ~ handleSearch ~ e:", e)
        dispatch(setSearchQuery(e.target.value));
    }
    return (
        <div className="flex justify-end mb-10">
            <label className="flex w-[300px] h-40 overflow-hidden border rounded-md border-neutral-2/50">
                <div className="flex items-center h-full px-16 bg-accent-3">
                    <FontAwesomeIcon className="w-20 h-20" icon={faMagnifyingGlass} />
                </div>
                <input value={searchQuery}
                    onChange={handleSearch} placeholder="Search" className="w-full h-full rounded-md text-big bg-accent-3" />
            </label>
        </div>
    )
}