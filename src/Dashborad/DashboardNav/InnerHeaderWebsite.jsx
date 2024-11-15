import React, { useState } from 'react';
import Next from '../../img/Next.png';
import { useLocation, useNavigate } from 'react-router-dom';


const InnerHeaderWebsite = ({ saveQRCode , loading }) => {

    const navigate = useNavigate();
    const location = useLocation();

    const handleBackClick = () => {
        navigate(-1)// This will take the user to the previous page
    };


    const more1 = () => {
        saveQRCode();
    };




    const [isNextClicked, setIsNextClicked] = useState(false);
    const more = () => {
        // const navigate = useNavigate();


        if (location.pathname === "/BulkCreatqrcode") {
            navigate("/uploadcsv");
        } else {
            navigate("/Creatqrcode");
        }

        setIsNextClicked(true);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };



    return (
        <header className="header">
            <nav className="navbar">
                <div className="headerflex">


                    {/* Hamburger Icon */}

                    <div className="hamburge" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M10.0206 23.8334L9.5873 20.3667C9.35258 20.2764 9.13158 20.1681 8.9243 20.0417C8.71703 19.9153 8.51372 19.7799 8.31439 19.6354L5.09147 20.9896L2.1123 15.8438L4.90189 13.7313C4.88383 13.6049 4.8748 13.4832 4.8748 13.3662V12.6349C4.8748 12.5172 4.88383 12.3952 4.90189 12.2688L2.1123 10.1563L5.09147 5.01044L8.31439 6.3646C8.513 6.22016 8.72064 6.08474 8.9373 5.95835C9.15397 5.83196 9.37064 5.72363 9.5873 5.63335L10.0206 2.16669H15.979L16.4123 5.63335C16.647 5.72363 16.8684 5.83196 17.0764 5.95835C17.2844 6.08474 17.4873 6.22016 17.6852 6.3646L20.9081 5.01044L23.8873 10.1563L21.0977 12.2688C21.1158 12.3952 21.1248 12.5172 21.1248 12.6349V13.3651C21.1248 13.4828 21.1067 13.6049 21.0706 13.7313L23.8602 15.8438L20.8811 20.9896L17.6852 19.6354C17.4866 19.7799 17.279 19.9153 17.0623 20.0417C16.8456 20.1681 16.629 20.2764 16.4123 20.3667L15.979 23.8334H10.0206ZM13.054 16.7917C14.1012 16.7917 14.9949 16.4215 15.7352 15.6813C16.4755 14.941 16.8456 14.0472 16.8456 13C16.8456 11.9528 16.4755 11.059 15.7352 10.3188C14.9949 9.57849 14.1012 9.20835 13.054 9.20835C11.9887 9.20835 11.0902 9.57849 10.3586 10.3188C9.62703 11.059 9.26158 11.9528 9.2623 13C9.26303 14.0472 9.62883 14.941 10.3597 15.6813C11.0906 16.4215 11.9887 16.7917 13.054 16.7917Z" fill="#808080" />
                        </svg>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="mobile-menu">
                            <div className="brand">
                                <div className="typeofcode">
                                    <h3>1</h3>
                                    <p>Type of QR CODE</p>
                                    <img src={Next} alt="next" />
                                </div>
                                <div className="content">
                                    {isNextClicked ? (
                                        <h3>2</h3>
                                    ) : (
                                        <h2>2</h2>
                                    )}
                                    <p>CONTENT</p>
                                    <img src={Next} alt="next" />
                                </div>

                                <div className="qrdesign">
                                    {isNextClicked ? (
                                        <h2>3</h2>
                                    ) : (
                                        <h3>3</h3>
                                    )}
                                    <p>QR Design</p>
                                </div>

                            </div>



                            <div className="backandnextbuttons" style={{ width: '28%' }}>
                                <div className="brand--back" onClick={handleBackClick} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M2.86389 7.82015H17.3591C17.566 7.82015 17.7644 7.90232 17.9106 8.04858C18.0569 8.19484 18.139 8.39321 18.139 8.60005C18.139 8.80689 18.0569 9.00526 17.9106 9.15152C17.7644 9.29778 17.566 9.37995 17.3591 9.37995H2.86389L8.55249 15.067C8.69893 15.2134 8.78121 15.4121 8.78121 15.6192C8.78121 15.8263 8.69893 16.0249 8.55249 16.1713C8.40604 16.3178 8.20742 16.4 8.00032 16.4C7.79322 16.4 7.59459 16.3178 7.44815 16.1713L0.429035 9.15222C0.356407 9.07977 0.298784 8.99371 0.259466 8.89896C0.22015 8.80421 0.199911 8.70263 0.199911 8.60005C0.199911 8.49747 0.22015 8.39589 0.259466 8.30114C0.298784 8.20639 0.356407 8.12033 0.429035 8.04788L7.44815 1.02877C7.59459 0.88232 7.79322 0.800049 8.00032 0.800049C8.20742 0.800049 8.40604 0.88232 8.55249 1.02877C8.69893 1.17521 8.78121 1.37383 8.78121 1.58094C8.78121 1.78804 8.69893 1.98666 8.55249 2.13311L2.86389 7.82015Z" fill="#808080" />
                                    </svg>
                                    <h4>Back</h4>
                                </div>
                                <div className="brand--next" onClick={more}>
                                    <h4>Next</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.0752 7.82015H1.57995C1.37311 7.82015 1.17474 7.90232 1.02848 8.04858C0.882217 8.19484 0.800049 8.39321 0.800049 8.60005C0.800049 8.80689 0.882217 9.00526 1.02848 9.15152C1.17474 9.29778 1.37311 9.37995 1.57995 9.37995H16.0752L10.3866 15.067C10.2402 15.2134 10.1579 15.4121 10.1579 15.6192C10.1579 15.8263 10.2402 16.0249 10.3866 16.1713C10.533 16.3178 10.7317 16.4 10.9388 16.4C11.1459 16.4 11.3445 16.3178 11.4909 16.1713L18.5101 9.15222C18.5827 9.07977 18.6403 8.99371 18.6796 8.89896C18.7189 8.80421 18.7392 8.70263 18.7392 8.60005C18.7392 8.49747 18.7189 8.39589 18.6796 8.30114C18.6403 8.20639 18.5827 8.12033 18.5101 8.04788L11.4909 1.02877C11.3445 0.88232 11.1459 0.800049 10.9388 0.800049C10.7317 0.800049 10.533 0.88232 10.3866 1.02877C10.2402 1.17521 10.1579 1.37383 10.1579 1.58094C10.1579 1.78804 10.2402 1.98666 10.3866 2.13311L16.0752 7.82015Z" fill="white" />
                                    </svg>
                                </div>
                            </div>

                        </div>




                    )}

                    {/* Desktop Brand Section */}
                    {!isMenuOpen && (
                        <div className=" desktop-brand">
                            <div className="brand">
                                <div className="typeofcode">
                                    <h3>1</h3>
                                    <p>Type of QR CODE</p>
                                    <img src={Next} alt="next" />
                                </div>
                                <div className="content">
                                    {isNextClicked ? (
                                        <h3>2</h3>
                                    ) : (
                                        <h2>2</h2>
                                    )}
                                    <p>CONTENT</p>
                                    <img src={Next} alt="next" />
                                </div>

                                <div className="qrdesign">
                                    {isNextClicked ? (
                                        <h2>3</h2>
                                    ) : (
                                        <h3>3</h3>
                                    )}
                                    <p>QR Design</p>
                                </div>

                            </div>

                            <div className="backandnextbuttons" style={{ width: '28%' }}>
                                <div className="brand--back" onClick={handleBackClick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M2.86389 7.82015H17.3591C17.566 7.82015 17.7644 7.90232 17.9106 8.04858C18.0569 8.19484 18.139 8.39321 18.139 8.60005C18.139 8.80689 18.0569 9.00526 17.9106 9.15152C17.7644 9.29778 17.566 9.37995 17.3591 9.37995H2.86389L8.55249 15.067C8.69893 15.2134 8.78121 15.4121 8.78121 15.6192C8.78121 15.8263 8.69893 16.0249 8.55249 16.1713C8.40604 16.3178 8.20742 16.4 8.00032 16.4C7.79322 16.4 7.59459 16.3178 7.44815 16.1713L0.429035 9.15222C0.356407 9.07977 0.298784 8.99371 0.259466 8.89896C0.22015 8.80421 0.199911 8.70263 0.199911 8.60005C0.199911 8.49747 0.22015 8.39589 0.259466 8.30114C0.298784 8.20639 0.356407 8.12033 0.429035 8.04788L7.44815 1.02877C7.59459 0.88232 7.79322 0.800049 8.00032 0.800049C8.20742 0.800049 8.40604 0.88232 8.55249 1.02877C8.69893 1.17521 8.78121 1.37383 8.78121 1.58094C8.78121 1.78804 8.69893 1.98666 8.55249 2.13311L2.86389 7.82015Z" fill="#808080" />
                                    </svg>
                                    <h4>Back</h4>
                                </div>
                                {/* <div className="brand--next" onClick={more}>
                                    <h4>Next</h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                        <path d="M16.0752 7.82015H1.57995C1.37311 7.82015 1.17474 7.90232 1.02848 8.04858C0.882217 8.19484 0.800049 8.39321 0.800049 8.60005C0.800049 8.80689 0.882217 9.00526 1.02848 9.15152C1.17474 9.29778 1.37311 9.37995 1.57995 9.37995H16.0752L10.3866 15.067C10.2402 15.2134 10.1579 15.4121 10.1579 15.6192C10.1579 15.8263 10.2402 16.0249 10.3866 16.1713C10.533 16.3178 10.7317 16.4 10.9388 16.4C11.1459 16.4 11.3445 16.3178 11.4909 16.1713L18.5101 9.15222C18.5827 9.07977 18.6403 8.99371 18.6796 8.89896C18.7189 8.80421 18.7392 8.70263 18.7392 8.60005C18.7392 8.49747 18.7189 8.39589 18.6796 8.30114C18.6403 8.20639 18.5827 8.12033 18.5101 8.04788L11.4909 1.02877C11.3445 0.88232 11.1459 0.800049 10.9388 0.800049C10.7317 0.800049 10.533 0.88232 10.3866 1.02877C10.2402 1.17521 10.1579 1.37383 10.1579 1.58094C10.1579 1.78804 10.2402 1.98666 10.3866 2.13311L16.0752 7.82015Z" fill="white" />
                                    </svg>
                                </div> */}


                                {/* {location.pathname === "/Creatqrcode" ? (
                <div className="brand--next" onClick={more1} style={{backgroundColor:'#4dbe10'}}>
                    <h4>Complete</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M16.0752 7.82015H1.57995C1.37311 7.82015 1.17474 7.90232 1.02848 8.04858C0.882217 8.19484 0.800049 8.39321 0.800049 8.60005C0.800049 8.80689 0.882217 9.00526 1.02848 9.15152C1.17474 9.29778 1.37311 9.37995 1.57995 9.37995H16.0752L10.3866 15.067C10.2402 15.2134 10.1579 15.4121 10.1579 15.6192C10.1579 15.8263 10.2402 16.0249 10.3866 16.1713C10.533 16.3178 10.7317 16.4 10.9388 16.4C11.1459 16.4 11.3445 16.3178 11.4909 16.1713L18.5101 9.15222C18.5827 9.07977 18.6403 8.99371 18.6796 8.89896C18.7189 8.80421 18.7392 8.70263 18.7392 8.60005C18.7392 8.49747 18.7189 8.39589 18.6796 8.30114C18.6403 8.20639 18.5827 8.12033 18.5101 8.04788L11.4909 1.02877C11.3445 0.88232 11.1459 0.800049 10.9388 0.800049C10.7317 0.800049 10.533 0.88232 10.3866 1.02877C10.2402 1.17521 10.1579 1.37383 10.1579 1.58094C10.1579 1.78804 10.2402 1.98666 10.3866 2.13311L16.0752 7.82015Z" fill="white" />
                    </svg>
                </div>
            ) : 
            
            
            
            (

                
                <div className="brand--next" onClick={more}>
                    <h4>Next</h4>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                        <path d="M16.0752 7.82015H1.57995C1.37311 7.82015 1.17474 7.90232 1.02848 8.04858C0.882217 8.19484 0.800049 8.39321 0.800049 8.60005C0.800049 8.80689 0.882217 9.00526 1.02848 9.15152C1.17474 9.29778 1.37311 9.37995 1.57995 9.37995H16.0752L10.3866 15.067C10.2402 15.2134 10.1579 15.4121 10.1579 15.6192C10.1579 15.8263 10.2402 16.0249 10.3866 16.1713C10.533 16.3178 10.7317 16.4 10.9388 16.4C11.1459 16.4 11.3445 16.3178 11.4909 16.1713L18.5101 9.15222C18.5827 9.07977 18.6403 8.99371 18.6796 8.89896C18.7189 8.80421 18.7392 8.70263 18.7392 8.60005C18.7392 8.49747 18.7189 8.39589 18.6796 8.30114C18.6403 8.20639 18.5827 8.12033 18.5101 8.04788L11.4909 1.02877C11.3445 0.88232 11.1459 0.800049 10.9388 0.800049C10.7317 0.800049 10.533 0.88232 10.3866 1.02877C10.2402 1.17521 10.1579 1.37383 10.1579 1.58094C10.1579 1.78804 10.2402 1.98666 10.3866 2.13311L16.0752 7.82015Z" fill="white" />
                    </svg>
                </div>
            )} */}


                                {location.pathname === "/Creatqrcode" ? (
                                    <div>
                                        <div className="brand--next" onClick={more1} style={{ backgroundColor: '#4dbe10' }}>
                                            <h4>Complete</h4>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                                <path d="M16.0752 7.82015H1.57995C1.37311 7.82015 1.17474 7.90232 1.02848 8.04858C0.882217 8.19484 0.800049 8.39321 0.800049 8.60005C0.800049 8.80689 0.882217 9.00526 1.02848 9.15152C1.17474 9.29778 1.37311 9.37995 1.57995 9.37995H16.0752L10.3866 15.067C10.2402 15.2134 10.1579 15.4121 10.1579 15.6192C10.1579 15.8263 10.2402 16.0249 10.3866 16.1713C10.533 16.3178 10.7317 16.4 10.9388 16.4C11.1459 16.4 11.3445 16.3178 11.4909 16.1713L18.5101 9.15222C18.5827 9.07977 18.6403 8.99371 18.6796 8.89896C18.7189 8.80421 18.7392 8.70263 18.7392 8.60005C18.7392 8.49747 18.7189 8.39589 18.6796 8.30114C18.6403 8.20639 18.5827 8.12033 18.5101 8.04788L11.4909 1.02877C11.3445 0.88232 11.1459 0.800049 10.9388 0.800049C10.7317 0.800049 10.533 0.88232 10.3866 1.02877C10.2402 1.17521 10.1579 1.37383 10.1579 1.58094C10.1579 1.78804 10.2402 1.98666 10.3866 2.13311L16.0752 7.82015Z" fill="white" />
                                            </svg>
                                        </div>

                                        {loading && (
                                            <div className="loader-container">
                                            <div className="loader">
                                                <div className="box1"></div>
                                                <div className="box2"></div>
                                                <div className="box3"></div>
                                            </div>
                                            </div>
                                        )}
                                    </div>




                                ) : location.pathname === "/BulkCreatqrcode" ? (
                                    <div className="brand--next" onClick={more}>
                                        <h4>Next</h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                                            <path d="M16.0752 7.82015H1.57995C1.37311 7.82015 1.17474 7.90232 1.02848 8.04858C0.882217 8.19484 0.800049 8.39321 0.800049 8.60005C0.800049 8.80689 0.882217 9.00526 1.02848 9.15152C1.17474 9.29778 1.37311 9.37995 1.57995 9.37995H16.0752L10.3866 15.067C10.2402 15.2134 10.1579 15.4121 10.1579 15.6192C10.1579 15.8263 10.2402 16.0249 10.3866 16.1713C10.533 16.3178 10.7317 16.4 10.9388 16.4C11.1459 16.4 11.3445 16.3178 11.4909 16.1713L18.5101 9.15222C18.5827 9.07977 18.6403 8.99371 18.6796 8.89896C18.7189 8.80421 18.7392 8.70263 18.7392 8.60005C18.7392 8.49747 18.7189 8.39589 18.6796 8.30114C18.6403 8.20639 18.5827 8.12033 18.5101 8.04788L11.4909 1.02877C11.3445 0.88232 11.1459 0.800049 10.9388 0.800049C10.7317 0.800049 10.533 0.88232 10.3866 1.02877C10.2402 1.17521 10.1579 1.37383 10.1579 1.58094C10.1579 1.78804 10.2402 1.98666 10.3866 2.13311L16.0752 7.82015Z" fill="white" />
                                        </svg>
                                    </div>
                                ) :



                                    null}

                            </div>

                        </div>



                    )}
                </div>

            </nav>
        </header>
    );
};

export default InnerHeaderWebsite;
