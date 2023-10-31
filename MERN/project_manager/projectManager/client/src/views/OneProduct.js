import { useParams,useNavigate } from "react-router-dom"
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const OneProduct = (props)=>{

    const {_id}=useParams();
    const[product, setProduct]=useState(null);
    const navigate = useNavigate();
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res);
            navigate("/products")
            })
        .catch(err=>{
            console.log(err);
        })
    }


    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${_id}`)
        .then((res)=>{
            setProduct(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[_id])

    if(!product){
        return <h1>loading...</h1>
    }
    
    
    return(
    <div>
        <h1>OneProduct {_id}</h1>
        <h3>product Name: {product.name}</h3>
        <p>price: {product.price}</p>
        <p>description: {product.description}</p>
            <button onClick={()=>handleDelete(_id)}>delete</button>
            <Link to={`/products/${_id}/edit`}><button>EDIT</button></Link>
    </div>
    )
}
export default OneProduct;