import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <span className="navbar-brand"><i>My Profession</i></span>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about-us">About Profession</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
                        </li>
                        <li className="nav-item ms-5">
                            <NavLink className="nav-link ms-auto" to="/portfolio">Portfolio</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Toolbar;