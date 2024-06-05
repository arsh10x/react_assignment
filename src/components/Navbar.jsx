import "./css/Navbar.css";
import search_icon from "../assets/search.svg";
import filter_icon from "../assets/filter.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">LOGO</div>
      <div className="search-filter">
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
