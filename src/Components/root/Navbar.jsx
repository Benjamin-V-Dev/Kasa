import {NavLink} from 'react-router-dom'


export default function Navbar() {
  return (
    <nav>
        <NavLink className="NavLink1" to="/">Accueil</NavLink>
        <NavLink className="NavLink2" to="/About">A propos</NavLink>
    </nav>
  );
}