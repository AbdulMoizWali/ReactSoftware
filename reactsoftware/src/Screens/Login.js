import { useNavigate } from "react-router-dom";
import { add } from "../Redux/Reducer/LoginSlice";
import { useDispatch } from "react-redux";

export default function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const loginUser = ()=>{
        let obj = {
            email: "abc@gmail.com",
            password: "123456"
        };
        dispatch(add(obj));
        navigate("/home");
    }
    return <>
    <div>
        <h1>Login</h1>
        <button onClick={loginUser}>Login User</button>
    </div>
    </>
}