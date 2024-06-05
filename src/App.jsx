import { useSelector } from "react-redux";
// import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
import "./App.css";
const App = () => {
  const login = useSelector((state) => state.User.accessToken);

  return <>{login ?(<div className="app">
        <Navbar />
        <div className="content">
          <SidebarLeft />
          <MainContent />
          <SidebarRight />
        </div>
      </div>) : <Login />}</>;
};

export default App;
