import React, { useState } from 'react'
import { addStock } from '../redux/slice/stockSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
export default function FormField() {
    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        price: '',
        quantity: '',
    });

    const disPatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStock = { ...formData, id: uuid() };
        console.log("🚀 ~ handleSubmit ~ newStock:", newStock)
        disPatch(addStock(newStock))
        toast.success("Stock added")
        setFormData({
            name: '',
            desc: '',
            price: 0,
            quantity: 0
        })
    }
    return (
        <div className='p-40 bg-white rounded-md'>
            <div className="text-xl font-bold">Admin Shoe List</div>
            <div className="w-full pb-20 border-b border-solid mt-14 text-neutral-3 text-medium border-b-neutral-1/10">Update your stock details here</div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col mt-20'>
                    <div >
                        <div>
                            <label htmlFor="name" className='font-medium capitalize text-neutral-1 text-big'>Stock Name</label>
                            <div className='h-48 mt-10'>
                                <input
                                    id='name'
                                    className='w-full max-w-[335px] h-40 border border-solid rounded-md border-neutral-2 bg-accent-3 px-10 text-big font-medium focus:shadow-[0_0_0_0.2rem] focus:shadow-primary/10 hover:shadow-[0_0_0_0.2rem] hover:shadow-primary/10'
                                    type='text'
                                    placeholder='Name'
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                                value={formData.desc}
                                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
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
                                    step="0.01"
                                    min={0}
                                    placeholder='Price'
                                    value={formData.price}
                                    onChange={(e) => {
                                        const numberic = parseFloat(parseFloat(e.target.value).toFixed(2));
                                        setFormData({ 
                                            ...formData, 
                                            price: isNaN(numberic)?'':numberic
                                        });
                                    }}
                                    required
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
                                    value={formData.quantity}
                                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center gap-10 mt-10'>
                    <button className='py-10 text-white border-none cursor-pointer bg-primary text-medium px-14 rounded-6' type='submit'>Add Stock</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )

}