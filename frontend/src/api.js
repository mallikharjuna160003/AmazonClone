import axios from 'axios';
import { apiUrl } from "./config"

export const getProduct = async (id)=>{
    try{
       const response = await axios({
            url: `${apiUrl}/api/products/${id}`,
            method: 'GET',  
            headers:{
                'Content-Type': 'application/json',
            },
       });
    
       if(!response || response.statusText !== 'OK' ){
            console.log(response.statusText);
        throw new Error(response.data.message);
       }
       return response.data;
    }
    catch(err){
         
          return { error: err.response.message || err.message };
    }
};