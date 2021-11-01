import { motion } from 'framer-motion';
import UserPhoto from '../../../assets/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';
import './style.css';

const Content = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="content d-flex mx-auto position-relative">
            <div className="user-photo">
                <img src={UserPhoto} className="rounded-circle" alt="" />
                <div className="user-text d-flex flex-column">
                    <h5>Hi, my name is</h5>
                    <h1>Anne Sullivan</h1>
                    <h4>I build things for the web</h4>
                    <button className="btn">Get in Touch</button>
                </div>
            </div>
        </motion.div>
    )
}

export default Content;
