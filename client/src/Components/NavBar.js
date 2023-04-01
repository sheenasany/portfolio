import {Link} from "react-router-dom"

function NavBar() {
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default NavBar