
import{useState, useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";

const AllProducts=(props)=>{
    const [allProducts,setAllProducts]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res=>{
            console.log(res);
            setAllProducts(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    const handleDelete=(id,index)=>{
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res)=>{
            console.log(res);
            setAllProducts(allProducts.filter((product,i)=>{
                return i !== index ? product : null;
            }));
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return(
    <div>
        <h2>All Products</h2>
        {
            allProducts.map((product,i)=>{
                const{name, price,description,_id}=product;
                    return(


                        <div key={i}>
                            <Link to={`/products/${_id}`}> <h4>product name: {name}</h4></Link>
                            <p>price: {price}</p>
                            <p>description: {description}</p>
                            <button onClick={()=>handleDelete(_id, i)}>delete</button>
                            <Link to={`/products/${_id}/edit`}><button>EDIT</button></Link>
                        </div>
                    )
            }
            )
        }

    </div>
    )
}
export default AllProducts;