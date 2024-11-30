import { useState } from "react";
import { useSelector } from "react-redux"

export default function PizzaTable() {
    const [search, setSearch] = useState('')
    const pizzaList = useSelector(state => state.pizzas.items);
    const handleSearch = (e) => {
        console.log("🚀 ~ handleSearch ~ e:", e)
        setSearch(e.target.value)
    }
    return (
        <>
            <input
                type="text"
                placeholder="search"
                value={search}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaList.map(pizza => (
                        <tr key={pizza.id}>
                            <td>{pizza.name}</td>
                            <td>{pizza.desc}</td>
                            <td>{pizza.price}</td>
                            <td>
                                {/* <button onClick={() =>{

                                }} >Edit</button>
                                <button>Delete</button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}