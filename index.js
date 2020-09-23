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
    res.send("its is working amma vissu ika paduko "+name+" page yoo man");
})




app.listen(PORT,function(req,res)
{
    console.log("Hello Evryone");
	console.log(PORT);
}
);