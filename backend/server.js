import express from 'express';
import cors from 'cors';
import data from './data';
const app1 = express();
app1.use(cors());
app1.get("/api/products",(req,res)=>{
     res.send(data.products);
});
app1.get("/api/products/:id",(req,res)=>{
    const product = data.products.find((x) => x._id === req.params.id);
   
    if(!product){
        res.status(404).send({message: 'Product Not Found!'});
        
    }
    else{   
        res.send(product);
    }
    
});


app1.listen(5000, ()=>{
    console.log("serve at http://localhost:5000");
});