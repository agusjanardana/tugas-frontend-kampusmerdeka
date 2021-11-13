import { motion } from 'framer-motion';
import './style.css';
import logo from '../../../assets/logo-ALTA.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const listNavbar = [
        {
            label: 'HOME',
            path: '/',
        },
        {
            label: 'ABOUT',
            path: '/about',
        },
        {
            label: 'EXPERIENCE',
            path: '/experience',
        },
        {
            label: 'CONTACT',
            path: '/contact-us',
        },
        {
            label: 'NEWS',
            path: '/news',
        },
    ];

    const isActive = (label) => {
        if (label == 'HOME') {
            return 'active';
        } else {
            return '';
        }
    };

    return (
        <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container-fluid mx-auto col-8">
                    <img src={logo} />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse" id="navbarText">
                        <ul className="nav navbar-nav mb-2 ml-auto mb-lg-0">
                            {listNavbar.map((value, index) => {
                                console.log(index);
                                return (
                                    <li key={index} className="nav-item mr-3">
                                        <Link
                                            to={value.path}
                                            className={`nav-link ${isActive(value.label)}`}
                                            aria-current="page"
                                            href="#"
                                        >
                                            {value.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </motion.header>
    );
};

export default Header;
