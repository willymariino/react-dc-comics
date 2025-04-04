import Navbar from "./navbar"
function Header({ links }) {
    return (
        <header>
            <img src="img/dc-logo.png" className="logo" alt="DC log" />
            <Navbar links={links} /> {/* il orimo links è il nome del prop, il secondo links è la variabile che contiene l'array dei link */}
        </header >
    )
}

export default Header