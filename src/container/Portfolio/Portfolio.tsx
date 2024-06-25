import {Link, Outlet} from "react-router-dom";

const Portfolio = () => {
    return (
        <div>
            <div className="btn btn-primary mt-5 d-block mb-4">
                <Link className="nav-link " to="about-countries">About Countries</Link>
            </div>
            <div className="btn btn-success mt-5 d-block mb-4">
                <Link className="nav-link " to="to-do-list">To Do List</Link>
            </div>
            <Outlet/>
        </div>
    );
};

export default Portfolio;