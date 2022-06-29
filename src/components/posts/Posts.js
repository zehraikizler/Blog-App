import React, {useState, useEffect} from "react";
import axios from "axios";
import "./posts.css";
import Post from "../post/Post";
import { firebaseConfig } from "../../firebase-config";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let datas = []
        const fetchData = async ()=>{
            await axios.get("https://blogproject-eb957-default-rtdb.europe-west1.firebasedatabase.app/data.json", firebaseConfig).then(res=> datas = [res.data])
            let arr =[]
            for (const key in datas[0]) {
                const element = datas[0][key];
                arr.push({...element, id:key})
            }
            setPosts(arr)
        }
        fetchData()
        
    },[]); 
    return (
        <div className="posts">
            {posts.map(item=> <Post key={item.id} id={item.id} title={item.title} text={item.text} date={item.date} />)}
        </div>
    )
}