import logo from '../../assets/logo-ALTA-v2.png';
import { motion } from 'framer-motion';
import './style.css';
import { useState, useEffect } from 'react';
import { handleFormData } from '../../store/formSlice';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ContactUs = () => {
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal);

    const [input, setInput] = useState({
        name: '',
        email: '',
        handphone: '',
        nationality: '',
        comment: '',
    });

    useEffect(() => {
        console.log('Ada Perubahan');
        console.log(input);
    }, [input]);

    const baseError = {
        name: 'Nama Tidak Boleh Kosong',
        email: 'Email Harus Benar',
        handphone: 'Nomor Tidak Valid',
    };
    const [error, setError] = useState(baseError);
    const [viewError, setViewError] = useState([
        {
            name: '',
            email: '',
            handphone: '',
        },
    ]);

    const handleChange = (e) => {
        e.preventDefault();
        const key = e.target.name;
        const formDataTarget = e.target.value;
        if (formDataTarget == '' && key == 'name') {
            setViewError({ ...viewError, [key]: error[key] });
        } else {
            viewError[key] = '';
        }

        if (formDataTarget == '' && key == 'email') {
            setViewError({ ...viewError, [key]: error[key] });
        } else {
            viewError[key] = '';
        }

        if (formDataTarget == '' && key == 'handphone') {
            setViewError({ ...viewError, [key]: error[key] });
        } else {
            viewError[key] = '';
        }
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const submitEvent = (e) => {
        e.preventDefault();
        // alert("Submitted!")
        if (viewError['name'] != '' || viewError['email'] != '' || viewError['handphone'] != '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ada kesalahan dalam input, pastikan tidak ada data yang kosong',
            });
        } else {
            dispatch(handleFormData(input));
            Swal.fire({
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            }).then(() => {
                window.location.href = 'review-message';
            });
        }
    };

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="content">
            <div className="left-image">
                <div id="image-one"></div>
                <img className="background-second" src={logo} />
            </div>
            <div className="form-controller row">
                <form id="myForm" onSubmit={submitEvent}>
                    <h1>Contact Us</h1>
                    <div className="form-group">
                        <label>
                            Full Name<span>*</span>
                        </label>
                        <input
                            id="fullNameInput"
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Your Full Name Here...."
                            onChange={(e) => handleChange(e)}
                            value={input.name}
                        />
                        {viewError.name == '' ? (
                            ''
                        ) : (
                            <small id="name-warning" className="text-danger">
                                {viewError.name}
                            </small>
                        )}
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">
                            Email address<span>*</span>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="EmailInput"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            name="email"
                            onChange={(e) => handleChange(e)}
                            value={input.email}
                        />
                        {viewError.email == '' ? (
                            <small id="email-warning" className="text-danger email-warning"></small>
                        ) : (
                            <small id="email-warning" className="text-danger email-warning">
                                {viewError.email}
                            </small>
                        )}
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">
                            Phone Number<span>*</span>
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            name="handphone"
                            id="PhoneInput"
                            placeholder="08573890xxxxx"
                            onChange={(e) => handleChange(e)}
                            value={input.handphone}
                        />
                        {viewError.handphone == '' ? (
                            <small id="phone-warning" className="text-danger email-warning"></small>
                        ) : (
                            <small id="phone-warning" className="text-danger phone-warning">
                                {viewError.handphone}
                            </small>
                        )}
                    </div>
                    <div className="form-group">
                        <label for="Nationality">Nationality</label>
                        <select
                            className="form-control required"
                            type="text"
                            name="nationality"
                            onChange={(e) => handleChange(e)}
                            value={input.nationality}
                        >
                            <option>Selected</option>
                            <option value="Indonesia" type="text" name="nationality" placeholder="Nationality">
                                Indonesia
                            </option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Comment</label>
                        <textarea
                            onChange={(e) => handleChange(e)}
                            value={input.comment}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            name="comment"
                        ></textarea>
                    </div>

                    <button id="myButton" type="submit" className="btn btn-contact">
                        Submit
                    </button>
                </form>
            </div>
        </motion.div>
    );
};

export default withRouter(ContactUs);
