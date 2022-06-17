import React from "react";
import "./header.css";
import photo from "../../assets/photo.webp"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Firebase</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img 
            className="headerImg"
            src={photo}
            alt="img"
            />
        </div>
    )
}