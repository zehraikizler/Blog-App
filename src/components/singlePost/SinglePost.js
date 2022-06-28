import "./singlePost.css"
import singlePhoto from "../../assets/singlePhoto.jpg"
import React, {useState, useEffect} from "react";
import { firebaseConfig } from "../../firebase-config";
import axios from "axios";
import {
    BrowserRouter as Router,
    useParams
  } from "react-router-dom";
export default function SinglePost() {
      let { postId } = useParams();
      const [post, setPost] = useState([]);
      useEffect(() => {
        const fetchData = async ()=>{
            await axios.get(`https://blogproject-eb957-default-rtdb.europe-west1.firebasedatabase.app/data/${postId}.json`, firebaseConfig).then(res=> setPost(res.data))
            
            console.log(post)
        }
        fetchData()
        
    },[]); 
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    src={singlePhoto}
                    alt=""
                    className="singlePostImg"
                />
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Zehra</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    {post.text}
                     </p>
            </div>
        </div>
    )
}