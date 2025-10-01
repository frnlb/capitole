import { Link, useLocation } from "react-router-dom";
import { Typography } from "@/components";
import "./Header.scss";

export function Header() {
  // const location = useLocation();
  return (
    <header className="header">
      <nav>
        <Link to="/" className="header-link">
          <Typography tag="p" color="inherit">
            Home
          </Typography>
        </Link>
        <Link to="/favourites" className="header-link">
          <Typography color="inherit" tag="p">
            Favourites
          </Typography>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
