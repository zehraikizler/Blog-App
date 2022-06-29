import "./write.css";
import writePhoto from "../../assets/writePhoto.webp";
import axios from "axios";
import { firebaseConfig } from "../../firebase-config";
import { useState, useRef } from "react";
import Loader from "../../components/loader/Loader";

export default function Write() {
  const [loading, setLoading] = useState(false);

  const [author, setAuthor] = useState();
  const [text, setText] = useState();
  const [title, setTitle] = useState();
  const [date, setDate] = useState();

  let authorInput = useRef();
  let textInput = useRef();
  let titleInput = useRef();
  let dateInput = useRef();

  const writeSubmit = async () => {
    try {
      setLoading(true);

      const data = {
        author,
        text,
        title,
        date,
      };
      await axios.post(
        "https://blogproject-eb957-default-rtdb.europe-west1.firebasedatabase.app/data.json",
        data,
        firebaseConfig
      );

      clearInputs();
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setLoading(false);
    }
  };

  const clearInputs = () => {
    authorInput.current.value = "";
    textInput.current.value = "";
    titleInput.current.value = "";
    dateInput.current.value = "";
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="write">
          <div className="author">
            <input
              type="text"
              className="authorInput"
              ref={authorInput}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
            />
          </div>
          <img src={writePhoto} alt="image" className="writeImg" />
          <form className="writeForm">
            <div className="date">
              <input
                type="date"
                className="dateInput"
                ref={dateInput}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <label className="fileInput">
                <i className="writeIcon fas fa-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
              <input
                type="text"
                ref={titleInput}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                className="writeInput"
                autoFocus={true}
              />
            </div>
            <div>
              <textarea
                placeholder="Tell your story..."
                type="text"
                ref={textInput}
                onChange={(e) => setText(e.target.value)}
                className="writeInput writeText"
              ></textarea>
            </div>
            <button type="button" className="writeSubmit" onClick={writeSubmit}>
              Publish
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
