import {Link} from "react-router-dom"

function NavBar() {
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}

export default NavBar