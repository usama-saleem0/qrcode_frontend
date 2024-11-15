import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TempleteHeader() {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const HandleHome = () => {
        navigate('/');
    };
    

    useEffect(() => {
        const user = localStorage.getItem('UserId');
        if (user) {
            setIsAuthenticated(true);
        }
    }, []); // Added dependency array to run the effect only once

    const handleLogout = () => {
        // Clear the user ID from local storage
        localStorage.removeItem('UserId');
        localStorage.removeItem('userData');

        setIsAuthenticated(false);

        // Show toast notification
        toast.success("You have been logged out successfully!");

        // Navigate to the login page or home page
        navigate('/');

        // Prevent navigation back to the protected page
        setTimeout(() => {
            window.location.reload(); // Reload the page to clear history
        }, 100); // Timeout to allow toast to show before reload
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 780);
        };

        handleResize(); // Check initial screen size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='TempleteHeader'>
            {!isMobile && (
                <>
                    <h5>Contact</h5>
                    <h5>Help Centers</h5>
                    <h5>Developers</h5>
                </>
            )}

            <div className="dropdown">
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basics">
                        {/* SVG Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                            <path d="M10.0206 23.8334L9.5873 20.3667C9.35258 20.2764 9.13158 20.1681 8.9243 20.0417C8.71703 19.9153 8.51372 19.7799 8.31439 19.6354L5.09147 20.9896L2.1123 15.8438L4.90189 13.7313C4.88383 13.6049 4.8748 13.4832 4.8748 13.3662V12.6349C4.8748 12.5172 4.88383 12.3952 4.90189 12.2688L2.1123 10.1563L5.09147 5.01044L8.31439 6.3646C8.513 6.22016 8.72064 6.08474 8.9373 5.95835C9.15397 5.83196 9.37064 5.72363 9.5873 5.63335L10.0206 2.16669H15.979L16.4123 5.63335C16.647 5.72363 16.8684 5.83196 17.0764 5.95835C17.2844 6.08474 17.4873 6.22016 17.6852 6.3646L20.9081 5.01044L23.8873 10.1563L21.0977 12.2688C21.1158 12.3952 21.1248 12.5172 21.1248 12.6349V13.3651C21.1248 13.4828 21.1067 13.6049 21.0706 13.7313L23.8602 15.8438L20.8811 20.9896L17.6852 19.6354C17.4866 19.7799 17.279 19.9153 17.0623 20.0417C16.8456 20.1681 16.629 20.2764 16.4123 20.3667L15.979 23.8334H10.0206ZM13.054 16.7917C14.1012 16.7917 14.9949 16.4215 15.7352 15.6813C16.4755 14.941 16.8456 14.0472 16.8456 13C16.8456 11.9528 16.4755 11.059 15.7352 10.3188C14.9949 9.57849 14.1012 9.20835 13.054 9.20835C11.9887 9.20835 11.0902 9.57849 10.3586 10.3188C9.62703 11.059 9.26158 11.9528 9.2623 13C9.26303 14.0472 9.62883 14.941 10.3597 15.6813C11.0906 16.4215 11.9887 16.7917 13.054 16.7917Z" fill="#808080" />
                        </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {isMobile && (
                            <div className="mobile-menu">
                                <h5>Contact</h5>
                                <h5>Help Centers</h5>
                                <h5>Developers</h5>
                            </div>
                        )}
                        <ul className='swich-class-1'>
                            <ul className='swich-class-2'>
                                <li>
                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true"><path d="m25.21,17.73c.1-.53.15-1.06.16-1.61v-.22c0-.56-.06-1.11-.16-1.64l.82-.49,1.51-.9-.71-1.61c-.2-.45-.44-.91-.72-1.38-.24-.4-.52-.8-.82-1.18l-1.09-1.36-1.5.9-.82.49c-.34-.28-.7-.53-1.08-.75-.1-.07-.21-.13-.32-.19-.4-.22-.82-.42-1.26-.57v-2.73l-1.76-.21c-.49-.06-.97-.09-1.47-.09s-.98.03-1.47.09l-1.76.21v2.73c-.43.16-.85.35-1.26.57-.11.05-.22.12-.32.19-.38.23-.74.48-1.08.75l-.82-.49-1.5-.9-1.09,1.36c-.3.38-.58.78-.82,1.19-.28.46-.52.92-.71,1.37l-.71,1.61,1.51.9.82.49c-.1.53-.15,1.06-.16,1.61v.22c0,.56.06,1.11.16,1.64l-.82.49-1.51.9.71,1.61c.2.45.44.91.72,1.38.24.4.51.8.82,1.18l1.09,1.36,1.5-.9.82-.49c.34.28.7.53,1.08.75.1.07.21.13.32.19.4.22.82.42,1.26.57v2.73l1.76.21c.49.06.97.09,1.47.09s.98-.03,1.47-.09l1.76-.21v-2.73c.43-.16.85-.35,1.26-.57.11-.05.22-.12.32-.19.38-.23.74-.48,1.08-.75l.82.49,1.5.9,1.09-1.36c.3-.38.58-.78.82-1.19.28-.46.52-.92.71-1.37l.71-1.61-1.51-.9-.82-.49Zm-1.84-1.83v.2c-.01.91-.18,1.77-.5,2.57l2.14,1.28c-.17.39-.38.76-.61,1.11-.27.42-.57.82-.89,1.19l-2.13-1.23c-.77.68-1.68,1.22-2.68,1.56v2.41c-.37.04-.74.07-1.11.07s-.75-.03-1.11-.07v-2.41c-1-.34-1.9-.88-2.68-1.56l-2.13,1.23c-.32-.38-.62-.78-.89-1.19-.24-.35-.44-.72-.61-1.11l2.14-1.28c-.32-.8-.49-1.66-.5-2.57v-.2c.01-.91.18-1.77.5-2.57l-2.14-1.28c.17-.39.38-.76.61-1.11.27-.42.57-.82.89-1.19l2.13,1.23c.77-.68,1.68-1.22,2.68-1.56v-2.41c.37-.04.74-.07,1.11-.07s.75.03,1.11.07v2.41c1,.34,1.9.88,2.68,1.56l2.13-1.23c.32.38.62.78.89,1.19.24.35.44.72.61,1.11l-2.14,1.28c.32.8.49,1.66.5,2.57Z"></path></svg>
                                    <h6>Setting</h6>
                                </li>
                                <li>
                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true"><path d="m18.57,3.12h-5.14c-4.03,0-7.31,3.28-7.31,7.31v11.14c0,4.03,3.28,7.31,7.31,7.31h5.14c4.03,0,7.31-3.28,7.31-7.31V10.43c0-4.03-3.28-7.31-7.31-7.31Zm4.87,18.45c0,2.69-2.19,4.87-4.87,4.87h-5.14c-2.69,0-4.87-2.19-4.87-4.87V10.43c0-2.69,2.19-4.87,4.87-4.87h5.14c2.69,0,4.87,2.19,4.87,4.87v11.14Z"></path></svg>
                                    <h6>Profile</h6>
                                </li>
                                <li onClick={HandleHome}>
                                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="96px" height="96px"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z"/></svg>
                                    <h6>Home</h6>
                                </li>
                            </ul>
                            <ul className='swich-class-3'>
                                <li>
                                    <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true"><path d="m16,3.1C8.83,3.1,3.1,8.83,3.1,16c0,7.17,5.73,12.9,12.9,12.9s12.9-5.73,12.9-12.9S23.17,3.1,16,3.1Zm-2.22,17.58l-4.17-4.17,1.73-1.73,2.44,2.44,6.62-6.62,1.73,1.73-8.9,8.9Z"></path></svg>
                                    <h6 onClick={handleLogout}>Logout</h6>

                                </li>
                            </ul>
                        </ul>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            {/* Toast Container to show notifications */}
            <ToastContainer />
        </div>
    );
}

export default TempleteHeader;
