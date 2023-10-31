import { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
const NewProduct=(props)=>{
    
    const [name, setName] =useState("");
    const [price, setPrice] =useState(0);
    const [description, setDescription] =useState("");
   

    const[errors,setErrors]=useState({});

    const navigate=useNavigate();
    const handleSumbit=(event)=>{
        event.preventDefault();
        const newProduct={
            name: name,
            price,
            description,
            
        }
        axios.post("http://localhost:8000/api/products", newProduct)
        .then((res)=>{

            console.log(res.data);
            navigate("/products")
        })
        .catch((err)=>{
            console.log(err.response.data.err.errors);
            setErrors(err.response.data.err.errors)
        })
    }
    return (
    <div>
        <h1>New product</h1>
        <form onSubmit={handleSumbit}>
            <div>
                <label>Name:</label>
                <input 
                type="text"
                onChange={(e)=>{
                    setName(e.target.value)
                }}
                />
                
            </div>
            {
                errors?.name && (
                    <span>{errors?.name?.message}</span>
                )
            }
            <div>
                <label>price:</label>
                <input 
                type="Number"
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}
                />
                
            </div>
            {
                errors?.price && (
                    <span>{errors?.price?.message}</span>
                )
            }
            <div>
                <label>Description:</label>
                <input 
                type="text"
                onChange={(e)=>{
                    setDescription(e.target.value)
                }}
                />
                
            </div>
            {
                errors?.description && (
                    <span>{errors?.description?.message}</span>
                )
            }
            
            <input type="submit"value="Add product" />
        </form>

    </div>

    )
}
export default NewProduct;