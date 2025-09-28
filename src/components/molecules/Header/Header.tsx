import { Link } from "react-router-dom";
import './Header.scss';
export interface HeaderProps {
    headerLinks: {name: string, path: string}[]
}
const Header = ({headerLinks}: HeaderProps) => {
    const displayHeaderLinks = headerLinks.map((link) => (
        <Link to={link.path} key={link.name}>{link.name}</Link>
    ))
  return (
    <header className="header"></header>
  )
}

export default Header