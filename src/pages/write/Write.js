import "./write.css"
import writePhoto from "../../assets/writePhoto.webp"

export default function Write() {
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
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div>
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}