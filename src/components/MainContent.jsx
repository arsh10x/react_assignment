import "./css/MainContent.css";
import profile1 from "../assets/main1Logo.png";
import content1 from "../assets/main1.png";
import profle2 from "../assets/main2Logo.png";
import content2 from "../assets/main2.png";
import shareIcon from "../assets/share.svg";
import likeIcon from "../assets/heart.svg";
import commentIcon from "../assets/comment.svg";
import Carosual from "./Carosual";
const data = [
  {
    username: "Lara Leones",
    handle: "@thewallart",
    profilePicture: profile1,
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: content1,
    reactions: { likes: "9.8k", comments: "8.6k", shares: "7.2k" },
  },
  {
    username: "John Doe",
    handle: "@artsyjohn",
    profilePicture: profle2,
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: content2,
    reactions: { likes: "5.3k", comments: "4.8k", shares: "3.7k" },
  },
];

const MainContent = () => {
  return (
   <div>
    <div >
      {data.map((item, index) => (
        <div className="mainContentContainer" key={index}>
          <div className="mainContent">
            <div className="header">
              <img
                className="profilePicture"
                src={item.profilePicture}
                alt="Profile"
              />
              <div className="userInfo">
                <span className="username">{item.username}</span>
                <span className="handle">{item.handle}</span>
              </div>
            </div>
            <div className="contents">
              <p>
                {item.content} <a href="#">Read More</a>
              </p>
              <img className="mainImage" src={item.image} alt="Content" />
              <hr />
            </div>
            <div className="reactions">
              <span>
                <img className="icon" src={likeIcon} alt="Like" />{" "}
                {item.reactions.likes}
              </span>
              <span>
                <img className="icon" src={commentIcon} alt="Comment" />{" "}
                {item.reactions.comments}
              </span>
              <span>
                <img className="icon" src={shareIcon} alt="Share" />{" "}
                {item.reactions.shares}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
      <div className="carosuals scrollableContainer">
      <Carosual/>
      </div>
   </div>
  );
};

export default MainContent;
