https://jsonplaceholder.typicode.com/todos

"use client"
import { useEffect, useState } from "react"

const Todo =()=>{
   
}

const User = () => {
    const [users, setUsers] = useState([])
    const url ="https://jsonplaceholder.typicode.com/users&quot";

    useEffect(()=>{
        const fetchUser = async() =>{
            try{
            const res = await fetch (url);
            const data = await res.json()
            console.log(data) 
            setUsers(data);
            State
        }catch (error){
            console.error("ไม่สำเร็จ",error);}
        };
        fetchUser();
    },[]);

    return (
        <ul>
           {users.map((user)=>(<li key={user.id}>{user.name}</li>))}
        </ul>
    )

}

const UserPage = () => {
  return (
    <>
        <User></User>
        <Todo></Todo>
    </>
  )
}
export default UserPage