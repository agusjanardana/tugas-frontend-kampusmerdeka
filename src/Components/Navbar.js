import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav className="navbar navbar-light bg-light" aria-label="First navbar example">
            <div className="container-fluid">
                <a className="navbar-brand">
                    TodoApp
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample01"
                    aria-controls="navbarsExample01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample01">
                    <ul className="navbar-nav me-auto mb-2">
                        <li classNameName="nav-item">
                            <Link to="home" className="nav-link active" aria-current="page" >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" className="nav-link">
                                About
                            </Link>
                        </li>
                        
                        
                    </ul>
                    
                </div>
            </div>
        </nav>
      
    );
};

export default Navbar;
