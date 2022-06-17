import React from "react";
import "./home.css"
import Header from "../../components/header/Header.js"
import Posts from "../../components/posts/Posts.js";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
    return (
        <div>
            <Header /> 
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </div>
    )
}