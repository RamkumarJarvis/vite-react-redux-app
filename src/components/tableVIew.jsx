import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useStockContext } from "../context/StockContext";
import DialogPopup from "./dialogBox";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteStock, updateStock } from "../redux/slice/stockSlice";
export default function TableView() {
    const { filteredStocks } = useStockContext();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [dialogAction, setDialogAction] = useState('');
    const [selectedStock, setSelectedStock] = useState(null);
    const [editedStock, setEditedStock] = useState(null);
    const dispatch = useDispatch();
    const header = 'Confirmation'

    const closeDialog = () => {
        setIsDialogOpen(false);
        setDialogAction("");
        setSelectedStock(null);
        setEditedStock(null);
    };
    const openDialogBox = (action, stock) => {
        setDialogAction(action)
        setSelectedStock(stock)
        setEditedStock(stock)
        setIsDialogOpen(true)
    }
    const handleDelete = () => {
        if (selectedStock) {
            dispatch(deleteStock(selectedStock.id));
            closeDialog();
        }
    }
    const handleEdit = (e) => {
        e.preventDefault();
        if (editedStock) {
            dispatch(updateStock(editedStock));
            closeDialog();
        }
    };
    return (
        <>
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
                                    <FontAwesomeIcon className="w-20 h-20 text-black cursor-pointer" onClick={() => openDialogBox('delete', stock)} icon={faTrashCan} />
                                    <FontAwesomeIcon className="w-20 h-20 text-black cursor-pointer" onClick={() => openDialogBox('edit', stock)} icon={faPenToSquare} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <DialogPopup isOpen={isDialogOpen} header={header} onClose={closeDialog}>
                {dialogAction === 'delete' && selectedStock ? (
                    <div className='p-40 pt-10 bg-white rounded-md w-[500px]'>
                        <div className="w-full pb-20 mt-14 text-neutral-1 text-big ">Are you sure to remove this stock</div>
                        <div className="flex gap-10">
                            <button className='py-10 text-white border-none cursor-pointer w-80 bg-primary text-medium px-14 rounded-6' onClick={handleDelete}>Yes</button>
                        </div>
                    </div>
                ) : dialogAction === 'edit' && selectedStock ? (
                    <>
                        <div className='p-40 pt-10 bg-white rounded-md'>
                            <form onSubmit={handleEdit}>
                                <div className='flex flex-col mt-20'>
                                    <div >
                                        <div>
                                            <label htmlFor="name" className='font-medium capitalize text-neutral-1 text-big'>Shoe Name</label>
                                            <div className='h-48 mt-10'>
                                                <input
                                                    id='name'
                                                    className='w-full max-w-[335px] h-40 border border-solid rounded-md border-neutral-2 bg-accent-3 px-10 text-big font-medium focus:shadow-[0_0_0_0.2rem] focus:shadow-primary/10 hover:shadow-[0_0_0_0.2rem] hover:shadow-primary/10'
                                                    type='text'
                                                    placeholder='Name'
                                                    value={editedStock.name}
                                                    onChange={(e) => setEditedStock({ ...editedStock, name: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className='mt-10'>
                                            <label htmlFor="description" className='font-medium capitalize text-neutral-1 text-big'>Description</label>
                                            <div className='h-auto mt-10'>
                                                <textarea
                                                    id="description"
                                                    rows="3"
                                                    cols="30"
                                                    value={editedStock.desc}
                                                    onChange={(e) => setEditedStock({ ...editedStock, desc: e.target.value })}
                                                    className="mt-10 h-80 min-h-[50px] w-full border border-solid font-medium rounded-md border-neutral-2 bg-accent-3 px-10 text-big focus:shadow-[0_0_0_0.2rem] focus:shadow-primary/10 hover:shadow-[0_0_0_0.2rem] hover:shadow-primary/10 py-5 max-w-[335px]"

                                                    required
                                                >
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex gap-80'>
                                        <div className='mt-10'>
                                            <label htmlFor="price" className='font-medium capitalize text-neutral-1 text-big'>Price</label>
                                            <div className='h-48 mt-10'>
                                                <input
                                                    id='price'
                                                    className='w-full max-w-[335px] h-40 border border-solid rounded-md border-neutral-2 bg-accent-3 px-10 text-big font-medium focus:shadow-[0_0_0_0.2rem] focus:shadow-primary/10 hover:shadow-[0_0_0_0.2rem] hover:shadow-primary/10'
                                                    type='number'
                                                    placeholder='Price'
                                                    value={editedStock.price}
                                                    required
                                                    step="0.01"
                                                    min={0}
                                                    onChange={(e) => {
                                                        const numberic = parseFloat(parseFloat(e.target.value).toFixed(2));
                                                        setEditedStock({ 
                                                            ...editedStock, 
                                                            price: isNaN(numberic)?'':numberic
                                                        });
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className='mt-10'>
                                            <label htmlFor="quantity" className='font-medium capitalize text-neutral-1 text-big'>Quantity</label>
                                            <div className='h-48 mt-10'>
                                                <input
                                                    id='quantity'
                                                    className='w-full max-w-[335px] h-40 border border-solid rounded-md border-neutral-2 bg-accent-3 px-10 text-big font-medium focus:shadow-[0_0_0_0.2rem] focus:shadow-primary/10 hover:shadow-[0_0_0_0.2rem] hover:shadow-primary/10'
                                                    type='number'
                                                    min={0}
                                                    placeholder='Quantity'
                                                    value={editedStock.quantity}
                                                    onChange={(e) => setEditedStock({ ...editedStock, quantity: e.target.value })}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center gap-10 mt-10'>
                                    <button className='py-10 text-white border-none cursor-pointer bg-primary text-medium px-14 rounded-6' type='submit'>Update Stock</button>
                                </div>
                            </form>
                        </div>
                    </>
                ) : null}
            </DialogPopup>
        </>
    )
}