import { motion } from 'framer-motion';
import './style.css';
import logo from '../../../assets/logo-ALTA.png';

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
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
                        <ul className="nav navbar-nav mb-2 ml-auto mb-lg-0" >
                            <li className="nav-item mr-3">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="#">EXPERIENCE</a>
                            </li>
                            <li className="nav-item mr-3">
                                <a className="nav-link" href="contact_us.html">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </motion.header>
        
    )
}

export default Header;