import logo from '../../assets/logo-ALTA-v2.png';
import { motion } from 'framer-motion';
import './style.css';

const ContactUs = () => {
    // const validateForm = () => {
    //             const username = document.forms['myForm']['username'].value;
    //             const phone = document.forms['myForm']['phone'].value;
    //             const email = document.forms['myForm']['email'].value;
    //             isUserNameFilled = true;
    //             isPhoneFilled = true;
    //             isEmailFilled = true;
    //             if (username == '') {
    //                 element = document.getElementById('name-warning');
    //                 element.innerText = 'Full name cannot be empty';
    //                 isUserNameFilled = false;
    //             }
    //             if (phone == '') {
    //                 element = document.getElementById('phone-warning');
    //                 element.innerText = 'Phone number cannot be empty';
    //                 isPhoneFilled = false;
    //             }
    //             if (email == '') {
    //                 element = document.getElementById('email-warning');
    //                 element.innerText = 'Email address cannot be empty';
    //                 isEmailFilled = false;
    //             }

    //             if (!isUserNameFilled) {
    //                 //add class in input = is-invalid
    //                 var element = document.getElementById('fullNameInput');
    //                 element.classList.add('is-invalid');
    //                 return false;
    //             }
    //             if (!isPhoneFilled) {
    //                 //add class in input = is-invalid
    //                 var element = document.getElementById('EmailInput');
    //                 element.classList.add('is-invalid');
    //                 return false;
    //             }
    //             if (!isEmailFilled) {
    //                 //add class in input = is-invalid
    //                 var element = document.getElementById('PhoneInput');
    //                 element.classList.add('is-invalid');
    //                 return false;
    //             }
    // };
 
    return (
        <motion.div class="content">
            <div class="left-image">
                <div id="image-one"></div>
                <img class="background-second" src={logo} />
            </div>
            <div class="form-controller row">
                <form id="myForm" action="/review_message.html" >
                    <h1>Contact Us</h1>
                    <div class="form-group">
                        <label>Full Name<span>*</span></label>
                        <input
                            id="fullNameInput"
                            type="text"
                            class="form-control"
                            name="username"
                            placeholder="Your Full Name Here...."
                        />
                        <small id="name-warning" class="text-danger"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address<span>*</span></label>
                        <input
                            type="email"
                            class="form-control"
                            id="EmailInput"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            name="email"
                        />
                        <small id="email-warning" class="text-danger email-warning"></small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Phone Number<span>*</span></label>
                        <input
                            type="number"
                            class="form-control"
                            name="phone"
                            id="PhoneInput"
                            placeholder="08573890xxxxx"
                        />
                        <small id="phone-warning" class="text-danger"></small>
                    </div>
                    <div class="form-group">
                        <label for="Nationality">Nationality</label>
                        <select class="form-control required" type="text" name="nationality">
                            <option type="text" name="nationality" placeholder="Nationality">Selected</option>
                            <option value="Indonesia" type="text" name="nationality" placeholder="Nationality">
                                Indonesia
                            </option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Text Area</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>

                    <button id="myButton" type="submit" class="btn">Submit</button>
                </form>
            </div>
        </motion.div>
    )
}

export default ContactUs;