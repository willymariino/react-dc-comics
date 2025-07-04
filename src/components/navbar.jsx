function Navbar({ links }) {
    {/* riceviamo links come prop */ }

    return (
        <>

            <nav className="navbar">

                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="hamburger">&#9776;</label>

                <ul className="nav-links">
                    {links.map((link, index) =>
                        <li key={index}>
                            <a href="#">{link}</a>
                        </li>

                    )}

                </ul>

            </nav>
        </>


    )


}

export default Navbar
