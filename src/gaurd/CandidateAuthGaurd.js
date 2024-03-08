import React,{useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";

const CandidateAuthGaurd = ({component})=>{
const [status,setStatus]= useState(false);
const navigate = useNavigate();
useEffect(()=>{
    checkToken();
},[component])

const checkToken = ()=>{
let Token = localStorage.getItem("Token")
console.log("token",Token)
let candidate="";
if(Token && Token.length){
    Token=JSON.parse(Token)
    const splitToken = Token.token.split('.')
    const base64EncodedPayload = splitToken[1]
    const decodedPayload = atob(base64EncodedPayload)
    candidate = JSON.parse(decodedPayload).candidate_id?JSON.parse(decodedPayload).candidate_id:false
    console.log(decodedPayload,candidate);
}

    if(!Token){
        setStatus(false);
        navigate(`/`)
        return
    }else if (Token&&!candidate){
        setStatus(false);
        localStorage.removeItem("Token");
        navigate(`/`)
        return
    }
    else{
        setStatus(true);
        return
    }
}
return status?<React.Fragment>{component}</React.Fragment>:<React.Fragment></React.Fragment>
}

export default CandidateAuthGaurd