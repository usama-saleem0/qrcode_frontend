import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Qrcode from '../../img/QRFY_logo.svg';
import addnewicon from '../../img/DashobradAddnew.png';
import StatsIcon from '../../img/NavarStats.png';
import Domain from '../../img/NavbarDomain.png';
import Payments from '../../img/NavbarPayment.png';
import qr from '../../img/Navbarqr.png';
import Templete from '../../img/navbarTemplete.png';
import Close from '../../img/Close.png';
import bulkNavbar from '../../img/Navbarbulk qr.png';
import Clock from '../../img/timeNavbar.png';
import { baseurl } from '../../baseurl';
import axios from 'axios';
import { useNavigate } from "react-router-dom";




const Navbar = ({ onToggle }) => {
    
    const navigate = useNavigate();


    const navigatetopayments = () => {
        navigate('/plans-and-payments');
    }

    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
      };

      
      

    const [remainingDays, setRemainingDays] = useState(null);


    const getUserFromLocalStorage = () => {
        const user = localStorage.getItem('userData');
        return user ? JSON.parse(user) : null;
    };

    const calculateExpireDate = (isoDate, months) => {
        const date = new Date(isoDate);
        date.setMonth(date.getMonth() + months);
        return date;
    };

    const getRemainingDays = (expiryDate) => {
        const today = new Date();
        const differenceInTime = expiryDate - today;
        return Math.ceil(differenceInTime / (1000 * 60 * 60 * 24)); // Convert ms to days
    };



    const fetchSubscribedUsers = async () => {
        try {
          const storedUser = getUserFromLocalStorage();
          const userId = storedUser ? storedUser.id : null;
    
          if (!userId) {
            console.error("No user ID found");
            return;
          }
    
          const response = await axios.get(`${baseurl}/getTotalSubscribers`);
          console.log('Response for Total Subscribers:', response.data);
    
          const matchedSubscription = response.data.find(subscription => subscription.userId === userId);
    
          let expiryDate;
          let daysRemaining;
    
          if (matchedSubscription) {
            // User has a subscription
            const { amount, createdAt } = matchedSubscription;
    
            let subscriptionMonths;
            switch (amount) {
              case 10:
                subscriptionMonths = 12;
                break;
              case 15:
                subscriptionMonths = 6;
                break;
              case 20:
                subscriptionMonths = 3;
                break;
              default:
                subscriptionMonths = 1; // Default to 1 month if no match
            }
    
            expiryDate = calculateExpireDate(createdAt, subscriptionMonths);
            daysRemaining = getRemainingDays(expiryDate);
          } else {
            // User does not have a subscription, set expiry date to 7 days after account creation
            const accountCreatedAt = storedUser.createdAt; // Ensure 'createdAt' exists in storedUser
            expiryDate = addDays(new Date(accountCreatedAt), 7);
            daysRemaining = getRemainingDays(expiryDate);
          }
    
          // Convert days to "months and days" format if more than 30 days
          const months = Math.floor(daysRemaining / 30);
          const days = daysRemaining % 30;
          const formattedRemaining = months > 0
            ? `${months} month(s) and ${days} day(s)`
            : `${days} day(s)`;
    
          // Store the expiry date in localStorage
          localStorage.setItem("subscriptionExpiry", expiryDate);
    
          // Ensure that if daysRemaining is negative, set it to 0
          setRemainingDays(daysRemaining >= 0 ? formattedRemaining : "0 day(s)");
        } catch (error) {
          console.error('Error fetching subscription data:', error);
        }
      };


      
   
    const [isOpen, setIsOpen] = useState(true);

    // Function to close sidebar if screen width is less than 1024px
    const handleResize = () => {
        if (window.innerWidth <= 1024) {
            setIsOpen(false);
            onToggle(false); // Update parent component about sidebar state
        }
    };

    useEffect(() => {
        
        handleResize();

        fetchSubscribedUsers();

        if (remainingDays === "7 day(s)") {
            let countdown = 7;
            const intervalId = setInterval(() => {
                countdown -= 1;
                setRemainingDays(`${countdown} day(s)`);
                if (countdown <= 0) clearInterval(intervalId);
            }, 86400000); // 24 hours in milliseconds

            return () => clearInterval(intervalId);
        }


        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);

    }, [remainingDays]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        onToggle(!isOpen); // Update parent component about sidebar state
    };




    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div onClick={toggleSidebar} className="toggle-button">
                    {isOpen ? (
                        <div className="navbar-logo">
                            <img src={Qrcode} alt="logo" />
                            <img src={Close} alt="close" />
                        </div>
                    ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H21V8H3V6ZM3 12H21V14H3V12ZM3 18H21V20H3V18Z" fill="white" />
                        </svg>
                    )}
                </div>
                <nav className="sidebar-nav">
                    <ul className='sidebar-nav-ul'>
                        <li className="menu-item">
                            <div className="Navbar-icons" style={{ paddingRight: '10px' }}>
                                {/* <img src={addnewicon} alt="addnewicon" /> */}
                                <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{ fontSize: '24px', fill: '#8d8d8d' }}><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"></path><path d="M12.0076 9.99889L10.0065 12L12.0076 14.0011L14.0088 12L12.0076 9.99889Z"></path><path d="M8.00213 10.5842L6.58792 11.9984L8.00213 13.4126L9.41635 11.9984L8.00213 10.5842Z"></path><path d="M15.999 10.5874L14.5848 12.0016L15.999 13.4158L17.4132 12.0016L15.999 10.5874Z"></path><path d="M12.0021 6.58737L10.5879 8.00159L12.0021 9.4158L13.4163 8.00159L12.0021 6.58737Z"></path><path d="M11.999 14.5842L10.5848 15.9984L11.999 17.4126L13.4132 15.9984L11.999 14.5842Z"></path></svg>
                            </div>
                            <Link to="/NewQR" className="menu-link">New QR</Link>
                        </li>
                        <li className="menu-item">
                            <div className="Navbar-icons">
                                <img src={bulkNavbar} alt="bulk qr" />
                            </div>
                            <Link to="/Bulkqrcode" className="menu-link">Bulk QR generation</Link>
                        </li>
                        <li className="menu-item">
                            <div className="Navbar-icons">
                                <img src={qr} alt="qr" />
                            </div>
                            <Link to="/my-qr-codes" className="menu-link">My QR Codes</Link>
                        </li>
                        <li className="menu-item">
                            <div className="Navbar-icons">
                                <img src={StatsIcon} alt="stats" />
                            </div>
                            <Link to="/stats" className="menu-link">Stats</Link>
                        </li>
                        <li className="menu-item">
                            <div className="Navbar-icons">
                                <img src={Templete} alt="template" />
                            </div>
                            <Link to="/DashboardTemplates" className="menu-link">Templates</Link>
                        </li>
                        <li className="menu-item">
                            <div className="Navbar-icons">
                                <img src={Domain} alt="domain" />
                            </div>
                            <Link to="/my-domains" className="menu-link">My Domains</Link>
                        </li>
                        <li className="menu-item">
                            <div className="Navbar-icons">
                                <img src={Payments} alt="payments" />
                            </div>
                            <Link to="/plans-and-payments" className="menu-link">Plans and Payments</Link>
                        </li>

                        <div className="Navbar--end">
                            <div className="Navbar--end--text">
                                <img src={Clock} alt="time" />
                                {remainingDays !== null ? (
                                    <h3>{remainingDays}  remaining</h3>
                                ) : (
                                    <h3>Loading...</h3>
                                )}
                            </div>
                            <div className="Navbar--end--button">
                                <button onClick={navigatetopayments}> Upgrade </button>
                            </div>
                        </div>
                    </ul>
                </nav>
            </div>
            {!isOpen && (
                <div className="hamburger-icon" onClick={toggleSidebar}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H21V8H3V6ZM3 12H21V14H3V12ZM3 18H21V20H3V18Z" fill="black" />
                    </svg>
                </div>
            )}
        </>
    );
};

export default Navbar;
