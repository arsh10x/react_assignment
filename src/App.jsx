import "./App.css";
import SidebarLeft from "./components/SidebarLeft"; 
import SidebarRight from "./components/SidebarRight";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
const App = () => {
  return <div className="app">
    <Navbar />
    <div className="content">
      <SidebarLeft />
      <MainContent/>
      <SidebarRight />
    </div>
  </div>;
};

export default App;
