import React from "react"
import "./styles.css"
import img from './download.png'
export default function Navbar() {
    return( 
    <nav>
        <img src={img} alt="ghbh" />
        <h2>ReactFacts</h2>
    </nav>
        )
}