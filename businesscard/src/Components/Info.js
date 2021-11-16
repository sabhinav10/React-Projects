import React from "react";
import img from "./Abhinav.jpg"
import "./styles.css"
export default function Info(){
    return(
        <div className="info">
        <img src={img} alt="" width="317" height="317"/>
        <h1 className = "name">Abhinav Singh</h1>
        <p className = "profession">Frontend developer</p>
        <button className="button1">
            Email
        </button>
        <button className = "button2">
            Linkedin
        </button>
        </div>
    )
}