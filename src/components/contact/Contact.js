import "./contact.css";
import profil from "../../assets/profilPhoto.jpg"

export default function Contact() {
  return (
    <div className="contact">
        <img src={profil} className="contactPhoto" />
      <p className="contactName">Zehra İkizler</p>
      <ul className="iconList">
        <li>
          <a
            href="https://github.com/zehraikizler"
            target="_blank"
            className="iconListItem"
          >
            <i className="fa-2x fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/zehra-ikizler-831573208/"
            target="_blank"
            className="iconListItem"
          >
            <i className="fa-2x fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="mailto:zehraaikizler@gmail.com"
            target="_top"
            className="iconListItem"
          >
            <i className="fa-2x fa-solid fa-envelope"></i>
          </a>
        </li>
        <li>
          <a
            href=""
            target="_blank"
            class="iconListItem"
          >
            <i className="fa-2x fa-brands fa-twitter-square"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
