import {React, useEffect, useState, createContext} from 'react'
import axios from 'axios'

export const EcommerceContext = createContext();


function ApiFetchContext({children}) {
    const[products, setProducts] = useState([]);
    const[user,setUser] = useState([{
        name:'Admin',
        role:'admin',
        password:'12345678'
    }])
    const url = "https://fakestoreapi.com/products";
    useEffect(()=>{
        dataFetch()
    },[])
    const dataFetch =async()=>{
        const response = await axios.get(url)
        const data = await response.data;
        setProducts(data)
    }
    console.log(products);
    
  return (
    <>
        <EcommerceContext.Provider value={{products,user,setUser}}>
            {children}
        </EcommerceContext.Provider>
    </>
  )
}

export default ApiFetchContext