import axios from "axios"

let apiHandle = axios.create({
    baseURL: 'https://fakestoreapi.com/',
    // headers:{ for authentication with key
    // }
});

let Get = (endPoint) => {
    return apiHandle.get(endPoint);
}

let GetById = () => {

}

let Post = () => {

}

let Put = () => {

}

let Del = () => {

}


export { Get, GetById, Post, Put, Del };