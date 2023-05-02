import React, { useEffect, useState } from 'react'
import { Get } from '../Config/ApiMethods'
import { useNavigate } from 'react-router-dom';
import { add } from '../Redux/Reducer/ProductsSlice';
import { useDispatch } from 'react-redux';

export default function Products() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        Get("/products").then((response)=>{
            console.log(response.data);
            setData(response.data)
            console.log(data);
        }).catch((error)=>{
            console.log("Error");
        });
    },[])

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const CartData = (Product)=>{
        dispatch(add(Product));
        //console.log(Product);
        navigate("/cart");
    }
  return (
    <>
    <div>Products</div>
    {
        data.map((x,i)=>{
           return(
            <div key={i}>
            <div>
                <img src={x.image} width={250} alt={x.title} />
            </div>
            <div>
                <h3>{x.category}</h3>
            </div>
            <div>
                <h3>{x.title}</h3>
            </div>
            <div>
                <h3>{x.price}</h3>
            </div>
            <div>
                <button onClick={()=>CartData(x)}>
                    Add to Cart
                </button>
            </div>

        </div>
           )


        })}
    </>
    
    
  )
}
