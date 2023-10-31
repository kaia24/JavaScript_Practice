import {useParams} from "react-router-dom"
import { useState,useEffect} from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const EditProduct=(props)=>{
    const{_id : id}=useParams();
    const [name, setName] =useState("");
    const [price, setPrice] =useState(0);
    const [description, setDescriiption] =useState("");
    const[errors,setErrors]=useState({});
    const navigate=useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
        setName(res.data.name);
        setPrice(res.data.price);
        setDescriiption(res.data.description);
        })
        .catch((err)=>{
            console.log(err);
        })

    },[id])

    const handleSumbit=(event)=>{
        event.preventDefault();
        const updatedProduct={
            name: name,
            price,
            description,
        }
        axios.patch(`http://localhost:8000/api/products/${id}`, updatedProduct)
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
        <h1>Edit Product</h1>
        <form onSubmit={handleSumbit}>
            <div>
                <label>Name:</label>
                <input 
                type="text"
                onChange={(e)=>{
                    setName(e.target.value)
                }}
                value={name}
                />
                
            </div>
            {
                errors?.name && (
                    <span>{errors?.name?.message}</span>
                )
            }
            <div>
                <label>Number of Scoops:</label>
                <input 
                type="Number"
                onChange={(e)=>{
                    setPrice(e.target.value)
                }}
                value={price}
                />
                
            </div>
            {
                errors?.price && (
                    <span>{errors?.price?.message}</span>
                )
            }
            <div>
                <label>description:</label>
                <input 
                type="text"
                onChange={(e)=>{
                    setDescriiption(e.target.value)
                }}
                value={description}
                />
                
            </div>
            {
                errors?.description && (
                    <span>{errors?.description?.message}</span>
                )
            }
            
            <input type="submit"value="Edit product" />
        </form>

    </div>

    )
}
export default EditProduct;