import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';


function Booklist() {
    return(
        <footer>
            <article>
                <div className="logo">
                    <h1>MediCARE</h1>
                </div>

                <div className="navigation">
                    <h1>Navigation</h1>
                    <div className="nav-boxes">
                        <div className="box">
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Partner</a></li>
                                <li><a href="#">Press</a></li>
                            </ul>
                        </div>
                        <div className="box">
                            <ul>
                                <li><a href="#">Information</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className="box">
                            <ul>
                                <li><a href="#">Doctors</a></li>
                                <li><a href="#">Dentists</a></li>
                                <li><a href="#">Therapists</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="contacts">
                    <h1>Contacts</h1>
                    <div className="contact-us">
                        <span className="icon">
                        <FontAwesomeIcon className='fa' icon={faPhone} />
                        </span>
                        <span>+234 706 608 7325</span>
                    </div>
                    <div className="contact-us">
                        <span className="icon">
                        <FontAwesomeIcon className='fa' icon={faEnvelope} />
                        </span>
                        <span>info@medicare.com</span>
                    </div>
                    <div className="socials">
                    <FontAwesomeIcon className='fa-brand' icon={faFacebook} />
                    <FontAwesomeIcon className='fa-brand' icon={faInstagram} />
                    <FontAwesomeIcon className='fa-brand' icon={faLinkedinIn} />
                    <FontAwesomeIcon className='fa-brand' icon={faYoutube} />

                    </div>
                </div>
            </article>
            <div className="credits">
                <span>Privacy Policy</span>
                <span>Copyright 2022 © MediCare</span>
                <span>Developed by Uniport SB</span>
            </div>
        </footer>
    )
}



ReactDOM.render(<Booklist/>, document.getElementById('root'));