import React from "react"
import Navbar from "./Components/Navbar"
import Main from "./Components/Main"
import "./Components/styles.css"
export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}