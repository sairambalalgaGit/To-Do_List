
const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname + "/date.js");


const app=express();

let names=["buy food","cook food","eat food"];
let workItems=[];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/",function(req,res){
    
   let day=date.getDate();

   

    res.render("lists",{listTitle:day , newListItems:names});


});

app.post("/",function(req,res){

    let name=req.body.newItem;

    if (req.body.list==="work") {
        workItems.push(name);
        res.redirect("/work");
    }else{
        names.push(name);
        res.redirect("/")
    }

   
    
    
});


app.get("/work",function(req,res){
    res.render("lists",{listTitle:"work list",newListItems:workItems});
});

app.get("/about",function(req,res){
    res.render("about");
})



app.listen(3000,function(){
    console.log("server started on port 3000...");
});