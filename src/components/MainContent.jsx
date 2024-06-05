import './css/MainContent.css';
import profile1 from '../assets/main1Logo.png';
import content1 from '../assets/main1.png';
import profle2 from '../assets/main2Logo.png';
import content2 from '../assets/main2.png';

const data = [
  {
    username: "Lara Leones",
    handle: "@thewallart",
    profilePicture: profile1,
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: content1,
    reactions: { likes: '9.8k', comments: '8.6k', shares: '7.2k' }
  },
  {
    username: "John Doe",
    handle: "@artsyjohn",
    profilePicture: profle2,
    content: "Another piece of engaging content that will capture the reader's attention.",
    image: content2,
    reactions: { likes: '5.3k', comments: '4.8k', shares: '3.7k' }
  }
];

const MainContent = () => {
  return (
    <div className="mainContentContainer">
      {data.map((item, index) => (
        <div className="mainContent" key={index}>
          <div className="header">
            <img className="profilePicture" src={item.profilePicture} alt="Profile" />
            <div className="userInfo">
              <span className="username">{item.username}</span>
              <span className="handle">{item.handle}</span>
            </div>
          </div>
          <div className="content">
            <p>
              {item.content} <a href="#">Read More</a>
            </p>
            <img className="mainImage" src={item.image} alt="Content" />
          </div>
          <div className="reactions">
            <span>{item.reactions.likes}</span>
            <span>{item.reactions.comments}</span>
            <span>{item.reactions.shares}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainContent;