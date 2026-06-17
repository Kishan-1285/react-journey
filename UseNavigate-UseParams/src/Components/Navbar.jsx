import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <Link to="/">Home</Link><br />
            <Link to="/Contact">Contact</Link><br />
            <Link to="/AboutUs">AboutUs</Link><br />
            <Link to="/Student/1">
                Student 1
            </Link>
            <br />
            <Link to="/Student/2">
                Student 2
            </Link>
            <br />

            <Link to="/Student/3">
                Student 3
            </Link>
        </>
    )
}

export default Navbar;