import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                
                <div className="footer-social">
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        
                    </ul>
                </div>
                <div className="footer-nav">
                    <ul>
                        <li><a href="#">Advertise with us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                
                <div className="footer-notes">
                    Space icons by Freepik.com.
                    Website created by Allan Cheung.
                </div>
                
            </div>
        </div>
    );
}

export default Footer;