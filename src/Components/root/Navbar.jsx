import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <Link className="link1" to="/">Accueil</Link>
        <Link className="link2" to="/About">A propos</Link>
    </nav>
  )
}