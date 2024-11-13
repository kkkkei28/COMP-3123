import React, {Component} from 'react';
import { useParams } from "react-router-dom"


export default function Home(){
    const param = useParams()
    return(
        <div>
            <h2>Home</h2>
            <h4>{param.name}</h4>
        </div>
    )
}