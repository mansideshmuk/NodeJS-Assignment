const http = require('http');
const fs=require("fs");
fs.writeFile("index.html", "<h1>Hello World</h1>",err=>{
    console.log(err);
})
http.createServer(function (req,res){
    fs.readFile("index.html",function(err,data){
        return res.end(data);
    })
})
.listen(3000,()=>{
    console.log("Server listening at port no. 3000")
})
