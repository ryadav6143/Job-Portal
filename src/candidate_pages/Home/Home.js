import { useState } from "react";
import Homechild1 from "./Homechild1";
const Home = () => {
 const [blog,setBlog] =useState([
    {title:"My new react website",body:"loream spam ...",author:"mario",id:1},
    {title:"My new react website",body:"loream spam ...",author:"rahul",id:2},
    {title:"My new react website",body:"loream spam ...",author:"aanand",id:3}
 ]);
    
 const handleDelete=(id)=>{
    const newBlogs = blog.filter((b)=> b.id !== id);
    setBlog(newBlogs)
 }       
 
    return ( <>
   <div className="container">
    <Homechild1 blog={blog} handleDelete={handleDelete}/>
   </div>
    </> );

    
}
 
export default Home;