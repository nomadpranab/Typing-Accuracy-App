import React,{useState} from "react";

const Quote=()=>{

    const[data,setdata]=useState("");

    const getquote=async()=>{
        const data=await fetch ("https://type.fit/api/quotes");
        data=data.json();
        console.log(data);
        
    }

}

export default Quote;
