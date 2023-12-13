import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
        <div className="header-logo">
          <a href="/">
            <img src="/logo.png" alt='Logo de Kasa, la lettre "A" représente une maison' />
          </a>
        </div>
        <Navbar></Navbar>
    </header>
  )
}