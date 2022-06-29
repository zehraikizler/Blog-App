import "./post.css";
import postPhoto from "../../assets/postPhoto.jpg"
import {Link} from "react-router-dom"
import { firebaseConfig } from "../../firebase-config";
import axios from "axios";

export default function Post(props) {

       async function deleteButton(){
            await axios.delete(`https://blogproject-eb957-default-rtdb.europe-west1.firebasedatabase.app/data/${props.id}.json`, firebaseConfig)
    } 

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
                <span className="postDate">{props.date}</span>
            </div>
            <p className="postDesc">
                {props.text}    
            </p>
            <div className="postFooter">
                <span className="author">{props.author}</span>
                <button className="postIcon far fa-trash-alt" onClick={deleteButton}></button>
            </div>
        </div>
    )
}