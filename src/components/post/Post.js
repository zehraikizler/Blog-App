import React from "react";
import "./post.css";
import postPhoto from "../../assets/postPhoto.jpg"
import {Link} from "react-router-dom"
export default function Post(props) {
    return (
        <div className="post">
            <img 
                className="postImg"
                src={postPhoto}
                alt="post photo"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <Link className="postTitle" to={`/post/${props.id}`}>{props.title}</Link>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                {props.text}    
            </p>
        </div>
    )
}