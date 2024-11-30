import React, { useState } from 'react'
import { addPizza } from '../redux/slice/pizzaSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'
import { ToastContainer, toast } from 'react-toastify';
export default function FormField() {
    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        price: ''
    });

    const disPatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPizza = { ...formData, id: uuid() };
        console.log("🚀 ~ handleSubmit ~ newPizza:", newPizza)
        disPatch(addPizza(newPizza))
        toast.success("pizza added")
        setFormData({
            name: '',
            desc: '',
            price: ''
        })
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Pizza Name'
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
            />
            <input
                type='text'
                placeholder='Description'
                value={formData.desc}
                onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                required
            />
            <input
                type='text'
                placeholder='Price'
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                required
            />
            <button type='submit'>Add Pizza</button>

        </form>
        <ToastContainer />
        </>
    )

}