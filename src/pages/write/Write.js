import "./write.css"
import writePhoto from "../../assets/writePhoto.webp"
import axios from "axios";
 
import { firebaseConfig } from "../../firebase-config";
import {useState} from 'react';


export default function Write() {
    const [text, setText] = useState()
    const [title, setTitle] = useState()

    const writeSubmit = async () => {
        try {
            const data = {
                text,
                title
            }
            await axios.post("https://blogproject-eb957-default-rtdb.europe-west1.firebasedatabase.app/data.json",data, firebaseConfig)
       
        } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return (
        <div className="write">
            <img
                src={writePhoto}
                alt="image"
                className="writeImg"
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label className="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                    <input type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} className="writeInput" autoFocus={true} />
                </div>
                <div>
                    <textarea placeholder="Tell your story..." type="text" onChange={(e)=>setText(e.target.value)} className="writeInput writeText"></textarea>
               
                </div>
                <button type="button" className="writeSubmit" onClick={writeSubmit}>Publish</button>
            </form>
        </div>
    )
}