import "./css/SidebarLeft.css";
import { sidebarItems } from "./data/SidebarLeftData";
import logoutIcon from "../assets/logout.svg";
const SidebarLeft = () => {
  return (
    <div className="sidebarLeft">
      <ul>
        {sidebarItems.map((item, index) => (
          <li
            key={index}
            className={`sidebarItem ${item.name === "Home" ? "homeItem" : ""}`}
          >
            <img src={item.icon} alt={item.name} className="sidebarIcon" />
            <span className="sidebarText">{item.name}</span>
          </li>
        ))}
        <div className="logout">
        <img src={logoutIcon} className="logoutIcon" alt="logout" />
        <span className="logoutText">Log out</span>
          </div>

      </ul>
    </div>
  );
};

export default SidebarLeft;
