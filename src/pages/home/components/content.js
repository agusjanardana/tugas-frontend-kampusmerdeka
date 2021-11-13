import { motion } from 'framer-motion';
import UserPhoto from '../../../assets/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import './style.css';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import BackgroundImage from '../../../assets/bg-img.png';

const Content = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="home d-flex mx-auto position-relative"
        >
            <div className="container-image">
                <img className="background-image" src={BackgroundImage} />
                <div className="content user-photo">
                    <img src={UserPhoto} className="rounded-circle" alt="" />
                    <div className="user-text d-flex flex-column">
                        <h5>Hi, my name is</h5>
                        <h1>Anne Sullivan</h1>
                        <h4>I build things for the web</h4>
                        <Link className="btn" to="contact-us">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default withRouter(Content);
