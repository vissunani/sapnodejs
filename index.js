const express=require('express')
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/',function(req,res)
{
    res.send("It is home page");
})

app.get('/:name',function(req,res)
{
    const name = req.params.name;
    res.send("It is a Sadinchav ra nuvvu"+name+" page yoo man");
})




app.listen(PORT,function(req,res)
{
    console.log("Hello Evryone");
}
);