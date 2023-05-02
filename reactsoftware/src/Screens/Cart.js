import { useEffect, useState } from "react";
import { useSelector } from "react-redux"

export default function Cart(){
    const [data, setData] = useState([]);
    const dataRecieved = useSelector((a)=>a.Products);
    useEffect(()=>{
        setData(dataRecieved);
        console.log(data);
    },[])
    return (
        <>
         {
        data.map((x, i)=>{
        return (
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
        </div>
                )
            })
        }
        </>
       
    )
}