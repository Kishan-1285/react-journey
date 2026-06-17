import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <Link to="/">Home</Link><br />
            <Link to="/Contact">Contact</Link><br />
            <Link to="/AboutUs">AboutUs</Link><br />
            <Link to="/student/1">
                <button>Student 1</button>
            </Link>
            <br />
            <br />
            <Link to="/student/2">
                <button>Student 2</button>
            </Link>
            <br />
            <br />

            <Link to="/student/3">
                <button>Student 3</button>
            </Link>
        </>
    )
}

export default Navbar;