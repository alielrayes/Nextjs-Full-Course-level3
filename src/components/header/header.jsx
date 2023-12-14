import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import NavLinks from "./navLinks";

const Header = ({
  isSignPage = false,
  isRegisterPage = false,
  isAdminPage = false,
}) => {
  return (
    <header id="headerElement" className="flex">
      <Link href={"/"} className="logo">
        <FontAwesomeIcon
          className="fa-solid fa-bag-shopping"
          style={{
            width: "1.5rem",
            marginRight: "0.3rem",
          }}
          icon={faBagShopping}
        />

        <span style={{ fontWeight: "bold" }}>AWU</span>
        <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
      </Link>

      <NavLinks
        isSignPage 
        isRegisterPage 
        isAdminPage 
      />
    </header>
  );
};

export default Header;
