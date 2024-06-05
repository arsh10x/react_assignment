import search_icon from "../assets/search.svg";
import filter_icon from "../assets/filter.svg";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logos">LOGO</div>
      <div className="searchFilter">
        <img src={search_icon} alt="search" />
        <input type="text" className="searchbar" placeholder="Search here..." />
        <img src={filter_icon} alt="filter" />
        <button className="filters">Filters</button>
      </div>
      <button className="becomeSeller">Become a Seller</button>
    </div>
  );
};

export default Navbar;
