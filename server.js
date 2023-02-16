const express =require("express");
const app =express();
const port =8080;
app.use(express.json());

let temp =[{
    id:1,
    name:"Rajnish"
}];
// let temp=[]

app.get("/get",function(req,res){
    res.send(temp)
})
app.post("/post",function(req,res){
    
    let data ={
        id:temp.length+1,
        name:req.body.name
        }   
         temp.push(data)
         res.send({
            message:"successfully added",
            data:temp
        })
});

app.delete("/delete/:id",function(req,res){
    
    let id =req.params.id
    let newdata =temp.filter(ele=>ele.id != id)
    temp = newdata;
    res.send({
        message:"success",
        data:temp
    })
    
       
});
app.put("/update/:id",function(req,res){
    
    let id =req.params.id
    let name =req.body.name
    let index= temp.findIndex(ele => ele.id ==id )
    temp[index] ={
        ...temp[index],
        name:name
    }
    res.send({
        message:"update success",
        data:temp
    })
    
       
});



app.listen(port,function(){
    console.log(`server running at port ${port}`)
})