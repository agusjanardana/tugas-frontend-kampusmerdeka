import titikDua from '../../../assets/img-dot@2x.png';
import './reviewStyles.css';

import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Content = () => {
    let formDatas = useSelector((state) => state.form.formList);
    console.log(formDatas);
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="container h-75">
            <div className="row">
                <div className="col-sm-10 mx-auto">
                    <div className="card card-container">
                        <div className="card-body dl rounded">
                            <dl className="row top-content pl-5 pt-5">
                                <p className="col-sm-5 col-md-5 col-lg-5 card-text">Full Name</p>
                                <span>:</span>
                                <dd id="full-name" className="col-sm-5 col-md-3">
                                    {formDatas.name}
                                </dd>
                                <p className="col-sm-5 col-md-5 col-lg-5 card-text">Email Address</p>
                                <span>:</span>
                                <dd id="email" className="col-sm-5 col-md-3">
                                    {formDatas.email}
                                </dd>
                                <p className="col-sm-5 col-md-5 col-lg-5 card-text">Phone Number</p>
                                <span>:</span>
                                <dd id="phone" className="col-sm-5 col-md-3">
                                    {formDatas.handphone}
                                </dd>
                                <p className="col-sm-5 col-md-5 col-lg-5 card-text">Nationality</p>
                                <span>:</span>
                                <dd id="nationality" className="col-sm-5 col-md-3">
                                    {formDatas.nationality}
                                </dd>
                            </dl>
                            <dl className="row bottom-content dl p-5">
                                <p className="col-lg-12 card-text">
                                    Hi <span id="nameInCard">{formDatas.name !== '' ? formDatas.name : ''}</span>, I’m
                                    Mike from Monsters, Inc. I’ve seen your previous project and it was really amazing.
                                    And as you know our company are planning to build new mobile application. I hope you
                                    can join us to develope this application. We look forward to hearing from you and
                                    hope you’ll join our project!
                                </p>
                            </dl>
                            <p className="line mx-auto"></p>
                            <div className="thanks col-lg-12 card-text p-5">
                                <h3>Thanks for contacting us!</h3>
                                <h3>We will be in touch with you shortly</h3>
                                <Link to="/" className="btn">
                                    Home
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="dot-images position-absolute">
                        <img src={titikDua} alt="" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Content;
