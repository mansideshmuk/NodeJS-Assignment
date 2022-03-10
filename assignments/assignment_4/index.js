const express = require("express");
const bodyParser = require("body-parser");
const User= require('./model/users');
const methodOverride=require('method-override');
const mongoose=require('mongoose');
const app = express();
const port=3000
mongoose.connect('mongodb://localhost:27017/Assignment-4');

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(bodyParser());
app.use(express.static("public"));
app.use(methodOverride('_method'));



//console.log(users);
app.get("/", async(req, res) => {
    const users=await User.find()
    res.render("index.ejs", { users });
});
app.get("/form", (req, res) => {
    res.render("form.ejs");
})
app.post("/user/add", async(req, res) => {
    //console.log(req.body);
    const user=await User.create({
        name: req.body.name,
        email: req.body.email,
        isPromoted:req.body.isPromoted
    });
    //console.log("updated")
    res.redirect("/");
})
app.put("/users/:id",async(req,res)=>{
    await User.updateOne({_id:req.params.id},[
        {$set:{isPromoted:{$not:"$isPromoted"}}}
    ])
    console.log("updated");
    res.redirect("/");
})
app.delete("/users/:id",async(req,res)=>{
    await User.deleteOne({_id:req.params.id})
    console.log("deleted");
    res.redirect("/");
})
app.listen(port, () => console.log(`Server is running on port ${port}`));