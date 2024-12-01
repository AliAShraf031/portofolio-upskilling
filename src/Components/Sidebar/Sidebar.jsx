import { NavLink } from "react-router";
import "./Sidebar.css";

export function Details() {
  return (
    <div className="details">
      <div className="profile-photo"></div>
      <div className="info">
        <a href="#"> Jackson Ford </a>
        <p>
          <span>UI/UX/Designer </span> in Philippines
        </p>
      </div>
      <ul>
        <li>
          <NavLink className="link" to="/home">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/skills">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/experience">
            Experience
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/work">
            Work
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default function Sidebar() {
  // const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sidebar">
        <Details />
      </div>
    </>
  );
}
