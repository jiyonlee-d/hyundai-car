import "./layout.css";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" />
    </div>
  );
}

export default Header;
