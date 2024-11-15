import React, { useState } from 'react';
import Next from '../../img/Next.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <nav className="navbar">

                {/* Hamburger Icon */}
                <div className="hamburge" onClick={toggleMenu}>
                    {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H21V8H3V6ZM3 12H21V14H3V12ZM3 18H21V20H3V18Z" fill="black" />
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M10.0206 23.8334L9.5873 20.3667C9.35258 20.2764 9.13158 20.1681 8.9243 20.0417C8.71703 19.9153 8.51372 19.7799 8.31439 19.6354L5.09147 20.9896L2.1123 15.8438L4.90189 13.7313C4.88383 13.6049 4.8748 13.4832 4.8748 13.3662V12.6349C4.8748 12.5172 4.88383 12.3952 4.90189 12.2688L2.1123 10.1563L5.09147 5.01044L8.31439 6.3646C8.513 6.22016 8.72064 6.08474 8.9373 5.95835C9.15397 5.83196 9.37064 5.72363 9.5873 5.63335L10.0206 2.16669H15.979L16.4123 5.63335C16.647 5.72363 16.8684 5.83196 17.0764 5.95835C17.2844 6.08474 17.4873 6.22016 17.6852 6.3646L20.9081 5.01044L23.8873 10.1563L21.0977 12.2688C21.1158 12.3952 21.1248 12.5172 21.1248 12.6349V13.3651C21.1248 13.4828 21.1067 13.6049 21.0706 13.7313L23.8602 15.8438L20.8811 20.9896L17.6852 19.6354C17.4866 19.7799 17.279 19.9153 17.0623 20.0417C16.8456 20.1681 16.629 20.2764 16.4123 20.3667L15.979 23.8334H10.0206ZM13.054 16.7917C14.1012 16.7917 14.9949 16.4215 15.7352 15.6813C16.4755 14.941 16.8456 14.0472 16.8456 13C16.8456 11.9528 16.4755 11.059 15.7352 10.3188C14.9949 9.57849 14.1012 9.20835 13.054 9.20835C11.9887 9.20835 11.0902 9.57849 10.3586 10.3188C9.62703 11.059 9.26158 11.9528 9.2623 13C9.26303 14.0472 9.62883 14.941 10.3597 15.6813C11.0906 16.4215 11.9887 16.7917 13.054 16.7917Z" fill="#808080" />
                    </svg>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="mobile-menu">
                        <div className="brand">
                            <div className="typeofcode">
                                <h2>1</h2>
                                <p>Type of QR CODE</p>
                                <img src={Next} alt="next" />
                            </div>
                            <div className="content">
                                <h3>2</h3>
                                <p>CONTENT</p>
                                <img src={Next} alt="next" />
                            </div>
                            <div className="qrdesign">
                                <h3>3</h3>
                                <p>QR Design</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Desktop Brand Section */}
                {!isMenuOpen && (
                    <div className="desktop-brand">
                     
                    <div className="brand">
                        <div className="typeofcode">
                            <h2>1</h2>
                            <p>Type of QR CODE</p>
                            <img src={Next} alt="next" />
                        </div>
                        <div className="content">
                            <h3>2</h3>
                            <p>CONTENT</p>
                            <img src={Next} alt="next" />
                        </div>
                        <div className="qrdesign">
                            <h3>3</h3>
                            <p>QR Design</p>
                        </div>
                    </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
