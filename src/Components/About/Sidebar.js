import './styles.css';
import { Link } from 'react-router-dom';


const Sidebar = ({ match }) => {

    const paths = match?.path;
    console.log(paths);
    const isActive = (path, navPath) => {
        if(path === navPath) {
            return 'active'
        } else {
            return ''
        }
    };
  
    const listNavbar = [
        {
            label : 'Home',
            path : '/'
        },
        {
            label : 'About App',
            path : '/about/about-app'
        },
        {
            label : 'About Author',
            path : '/about/about-author'
        }
        
    ];
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar-container" style={{ width: '280px'}}>
            <a className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <span className="fs-4">Sidebar</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
            {listNavbar.map((nav,index)=>{
                return (
                    <li key={index} className="nav-item">
                        <Link to={nav.path} className={`nav-link text-dark ${isActive(paths,nav.path)}`} aria-current="page">
                            {nav.label}
                        </Link>
                    </li>
                )
            })}  
            </ul>
        </div>
    );
};

export default Sidebar;
