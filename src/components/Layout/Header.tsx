import logo from "../../assets/logo.svg";
import SearchInput from "../SearchInput";
import { useHideHeader } from "../../hooks/useHideHeader";
import "./layout.css";

function Header() {
  const visible = useHideHeader();

  return (
    <div className={`header ${visible ? "" : "hide"}`}>
      <img src={logo} className="logo" />
      <SearchInput />
    </div>
  );
}

export default Header;
