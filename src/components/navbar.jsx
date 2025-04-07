function Navbar({ links }) {
    {/* riceviamo links come prop */ }

    return (
        <nav>
            <ul>
                <li><a href="#">{links[0]}</a></li>
                <li><a href="#">{links[1]}</a></li>
                <li><a href="#">{links[2]}</a></li>
                <li><a href="#">{links[3]}</a></li>
                <li><a href="#">{links[4]}</a></li>
                <li><a href="#">{links[5]}</a></li>
                <li><a href="#">{links[6]}</a></li>
                <li><a href="#">{links[7]}</a></li>
                <li><a href="#">{links[8]}</a></li>
                <li><a href="#">{links[9]}</a></li>

            </ul>

        </nav>


    )


}

export default Navbar
