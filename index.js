const express=require('express')

const app = express();

app.get('/',function(req,res)
{
    res.send("It is home page");
})

app.get('/:name',function(req,res)
{
    const name = req.params.name;
    res.send("It is "+name+" page");
})




app.listen(9000,function(req,res)
{
    console.log("Hello Evryone");
}
);