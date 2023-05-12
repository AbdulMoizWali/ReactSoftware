const fs = require("fs");
// fs.readdir("./", (err, dir) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(dir);
//     }
// });
// fs.readFile("./abc.txt", "utf8", (err, file) => {
//     if (err) {
//         console.log(err)
//             ;
//     } else {
//         console.log(file);
//     }
// })
// fs.writeFile("./abc.txt", "huzaifa", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Done");
//     }

// })
// fs.appendFile("./abc.txt", "pakistan", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Done");
//     }

// })
// const http = require("http");

let courses = [
    {
        id: 1,
        name: 'ABC',
    },
    {
        id: 2,
        name: 'ABC',
    },
    {
        id: 3,
        name: 'ABC',
    },
    {
        id: 4,
        name: 'ABC',
    }
]

// const server = http.createServer((req, res)=>{
//     if(req.url == '/course'){
//         //res.write("/Courses Route is working");
//         if(req.method == "GET"){
//             res.write(JSON.stringify(courses));
//         }
//         if(req.method == "POST"){
//             req.body
//             res.write(JSON.stringify(courses));
//         }
//         res.end();
//     }
//     if(req.url == '/users'){
//         res.write("/Users Route is working");
//         res.end();
//     }
// });


// server.listen(5000)





const express = require("express");

const app = express();

app.get("/courses", (req, res)=>{
res.json(courses)
});

app.get("/courses/:id", (req, res) => {
    let id = req.params.id
    let obj = courses.find(x=>x.id == id);
    if (obj){
        res.send(obj).status(200);
    }
    else{
        res.send("No Data Found").status(404);
    }
});

app.post("/courses", (req, res)=>{ });
app.put("/courses/:id", (req, res)=>{ });
app.delete("/courses/:id", (req, res)=>{ });

    

app.listen(5000);