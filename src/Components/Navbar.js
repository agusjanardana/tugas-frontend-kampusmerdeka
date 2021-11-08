import { Link } from 'react-router-dom';

const Navbar = () => {

    const listNavBar = [
        {
            label: 'Home',
            path: 'home'
        },
        {
            label: 'About',
            path : 'about'
        },
        {
            label: 'Form',
            path : 'form'
        }
    ]
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
                        {listNavBar.map((data, index) => {
                            return (
                                <li key={index}className="nav-item">
                                <Link to={data.path} className="nav-link active" aria-current="page" >
                                    {data.label}
                                </Link>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
      
    );
};

export default Navbar;
