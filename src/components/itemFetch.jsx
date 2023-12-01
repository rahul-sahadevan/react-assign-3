import axios from "axios"
import { useEffect, useState } from "react"
import ItemCard from "./itemCard";

function ItemFetch(){

    const [users,setUsers] = useState([]);

    // fetch function to fetch th item list
    async function fetch(){
        const url = 'https://jsonplaceholder.typicode.com/users'
        try{
            const response = await axios.get(url);
            setUsers(response.data)
        }
        catch(error){
            alert(error.message)
        }
    }

    // onload calling fetch function 
    useEffect(()=>{
        
        fetch()

    },[])

    // products page---
    return (
        <div className="items-div">
            {
                users.map((item,index)=>(
                    <ItemCard key={index} item={item} index={index}/>
                ))
            }
        </div>
    )
}

export default ItemFetch