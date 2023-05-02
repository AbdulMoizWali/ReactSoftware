import { useSelector } from "react-redux"

export default function Home(){
    const data = useSelector((a)=> a.Login);
    console.log(data);
    return (
        <>
        <h1>Home</h1>
        </>
    )
}