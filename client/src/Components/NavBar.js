import {Link} from "react-router-dom"

function NavBar() {
    return(
        <div>
            <nav>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/about">About Me</Link>
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}

export default NavBar