import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export default function Cart(){
    //const [data, setData] = useState([]);
    const dataRecieved = useSelector((a)=>a.Products);
    
    return (
        <>
         {
                dataRecieved.map((x, i)=>{
                    return (
                        <div>
                            <p>{x.title}</p>
                        </div>
                    );
                })
            } 
        </>      
    )
}