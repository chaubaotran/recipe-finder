import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-light footer">
            <div className="row pt-5">
                <div className="col text-center">
                    <a className="mx-3" href='#'>
                        <FontAwesomeIcon className="icon facebook" icon={faFacebook} />
                    </a>
                    <a className="mx-3" href='#'>
                        <FontAwesomeIcon className="icon linkedin" icon={faLinkedinIn} />
                    </a>
                    <a className="mx-3" href='#'>
                        <FontAwesomeIcon className="icon instagram" icon={faInstagramSquare} />
                    </a>
                    <a className="mx-3" href='#'>
                        <FontAwesomeIcon className="icon pinterest" icon={faPinterest} />
                    </a>
                </div>
            </div>

            <div className="row text-center py-3">
                <div className="col">
                    <p>© 2020 Sited by Chau</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;