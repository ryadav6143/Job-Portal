import React, {useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";


const AdminAuthGaurd=({component})=>{
    const [status,setStatus]=useState(false);
    const navigate=useNavigate()
    useEffect(()=>{
        checkToken()
    },[component]);

    const checkToken=()=>{
        let Token = localStorage.getItem("Token");
        let admin="";
        if(Token&&Token.length){
            Token=JSON.parse(Token);
            const splitToken = Token.token.split('.')
            const base64EncodedPayload = splitToken[1]
            const decodedPayload = atob(base64EncodedPayload)
            admin = JSON.parse(decodedPayload).admin_id?JSON.parse (decodedPayload).admin_id:false;
            console.log("admin",admin,decodedPayload)
        }
        if(!Token){
            setStatus(false);
            navigate(`/`)
            localStorage.removeItem("Token");
        return
        }else if(Token&&!admin){
            setStatus(false)
            navigate(`/`)
            localStorage.removeItem("Token");
            return
        }
        else{
            setStatus(true);
            return
        }
    }

    return status?<React.Fragment>{component}</React.Fragment>:<React.Fragment></React.Fragment>
}


export default AdminAuthGaurd;