import { userList } from "./data/SidebarRightData";
import "./css/SidebarRight.css";

const SidebarRight = () => {
  return (
    <>
      <span className="sidebarRight_title">
        <b>Artist</b>{" "}
        <span style={{ color: "grey", fontWeight: "bold" }}>Photographer</span>
      </span>
    <div className="sidebar-right">
      {userList.map((user, index) => (
        <div key={index} className="profile-card">
          <img
            src={user.bgImage}
            alt={`Background for ${user.name}`}
            className="bg-image"
          />
          {user.profileImage && (
            <img
              src={user.profileImage}
              alt={`Profile of ${user.name}`}
              className="profile-mini"
            />
          )}
          <div className="profile-info">
            <h4 className="profile-name">{user.name}</h4>
            <p className="profile-handle">{user.handle}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default SidebarRight;
