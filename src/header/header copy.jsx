import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"

import { baseurl } from "../baseurl";

import { GoogleLogin } from "@react-oauth/google";
import SignUp from "../login/signup";
import Login from "../login/login";
import logo1 from "../img/head-log.svg";


import n1 from "../img/n1.svg";
import n2 from "../img/n2.svg";
import n3 from "../img/n3.svg";
import n4 from "../img/n4.svg";
import n5 from "../img/n5.svg";
import n6 from "../img/n6.svg";
import n7 from "../img/n7.svg";
import n8 from "../img/n8.svg";
import n9 from "../img/n9.svg";
import n10 from "../img/n10.svg";
import n11 from "../img/n11.svg";
import n12 from "../img/n12.svg";
import n13 from "../img/n13.svg";
import Resources1 from "../Resources-file/Resources1";
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { i18n } = useTranslation();





  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Track if the screen is mobile or not
  const [showsignup, setshowsignup] = useState(true);
  const [showlogin, setshowlogin] = useState(false);
  const [showdashboard, setdashboard] = useState(false)

  const [data, setData] = useState({
    sub: null,
    user_name: null,
    email: null,
    email_verified: null,
    picture: null,
  });

  const [g_obj, setobj] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is less than or equal to 768px
    };

    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the initial state
    handleResize();

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };




  //

  const [googleLoaded, setGoogleLoaded] = useState(false);

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token: " + response.credential);
    var userobj = jwtDecode(response.credential);
    console.log(userobj, "TS");
    setobj(userobj);

    setData({ ...data, sub: g_obj.sub });
    setData({ ...data, email: g_obj.email });
    setData({ ...data, email_verified: g_obj.email_verified });
    setData({ ...data, picture: g_obj.picture });
    setData({ ...data, user_name: g_obj.name });

    if (userobj) {
      console.log("true");
    } else {
      console.log("false");
      console.log(g_obj);
    }
  }

  useEffect(() => {
    /* global google */
    if (typeof google !== "undefined" && google.accounts) {
      google.accounts.id.initialize({
        client_id:
          "908977573799-5d32tvsej91ipptrunk5orilqn3l02qk.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });
      setGoogleLoaded(true);
    }
  }, []);

  const handleCustomSignIn = () => {
    if (googleLoaded) {
      google.accounts.id.prompt();
    } else {
      console.error("Google API not loaded");
    }
  };
  const Stored_userID = g_obj.sub;

  const demo = async () => {
    try {
      // Make a POST request using axios
      const response = await axios.post(`${baseurl}/createuser`, g_obj);

      const Local_UserID = JSON.stringify(Stored_userID);
      localStorage.setItem("userid", Local_UserID);

      console.log(Local_UserID, "localstorage");

      window.location.href = "/dashboard";
      // Set the response data in state
    } catch (error) {
      // Handle errors
      console.error("Error:", error.message);
      // Display an error message to the user
      alert("Please Login First!");
    }
  };



  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code
  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code
  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const [isOpenz, setIsOpenz] = useState(false);
  const toggleDropdownz = () => {
    setIsOpenz(!isOpenz);
  };


  const closeDropdown = (event) => {
    if (!event.target.matches('.dropbtn')) {
      setIsOpen(false);
      setIsOpenz(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => {
      window.removeEventListener('click', closeDropdown);
    };
  }, []);

  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code
  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code
  // Dropdown--js--codeDropdown--js--codeDropdown--js--codeDropdown--js--code
  
  const navigate = useNavigate();

  const home = () => {
    navigate("/");
  };
  const login = () => {
    navigate("/login");
  };
  const sigup = () => {
    navigate("/signup");
  };
  const plas = () => {
    navigate("/Prices");
  };
  const Faq = () => {
    navigate("/Faq");
  };
  const page1 = () => {
    navigate("/Static");
  };
  const page2 = () => {
    navigate("/Bulk");
  };
  const page3 = () => {
    navigate("/Dynamic");
  };
  const page4 = () => {
    navigate("/Facebook");
  };
  const page5 = () => {
    navigate("/Varietyinner");
  };
  const page6 = () => {
    navigate("/Custom");
  };
  const page7 = () => {
    navigate("/Collaborating");
  };
  const page8 = () => {
    navigate("/Templates");
  };
  const page9 = () => {
    navigate("/Analytics");
  };
  const page10 = () => {
    navigate("/Tracking");
  };
  const page11 = () => {
    navigate("/Editing");
  };
  const page12 = () => {
    navigate("/Password");
  };
  const Resources1 = () => {
    navigate("/TypesQRcode");
  };
  const Resources2 = () => {
    navigate("/QRCodefor");
  };
  const Resources3 = () => {
    navigate("/QRCodeson");
  };
  const changeLanguages = (lang) => {

  
    i18n.changeLanguage(lang);
  };


  return (
    <>
      <header className="hero-header">
        <div class="main-row">
          <div className="your-main-logo-ul">
            <div className="your-logo" onClick={home}>
              <img src={logo1} alt="" />
            </div>

            <div className={`mobile-res ${showMenu && isMobile ? "show" : ""}`}>
            {/* Navigation Menu */}
            <ul >
              <li onClick={plas}>Plans and prices</li>
              <li onClick={Faq}>FAQ</li>
              <li>API</li>

              <div className="dropdown">
                <li onClick={toggleDropdown} className="dropbtn">

                  Resources
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M5.91996 7.49998C5.78835 7.50074 5.65789 7.47551 5.53605 7.42575C5.41422 7.37598 5.3034 7.30266 5.20996 7.20998L0.209961 2.20998L1.62996 0.789978L5.91996 5.08998L10.21 0.789978L11.63 2.20998L6.62996 7.20998C6.53652 7.30266 6.4257 7.37598 6.30387 7.42575C6.18203 7.47551 6.05157 7.50074 5.91996 7.49998Z" fill="#96949C" />
                  </svg>
                </li>

                <div id="myDropdown" className={`dropdown-content ${isOpen ? 'show' : ''}`}>
                  <a onClick={Resources1}>Types of QR code</a>
                  <a onClick={Resources2}>QR Codes for</a>
                  <a onClick={Resources3}>QR Codes on</a>
                  <a onClick={home}>QR Code Generator</a>

                </div>
              </div>


              <div className="dropdown">
                <li onClick={toggleDropdownz} className="dropbtn">

                  Features
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M5.91996 7.49998C5.78835 7.50074 5.65789 7.47551 5.53605 7.42575C5.41422 7.37598 5.3034 7.30266 5.20996 7.20998L0.209961 2.20998L1.62996 0.789978L5.91996 5.08998L10.21 0.789978L11.63 2.20998L6.62996 7.20998C6.53652 7.30266 6.4257 7.37598 6.30387 7.42575C6.18203 7.47551 6.05157 7.50074 5.91996 7.49998Z" fill="#96949C" />
                  </svg>
                </li>

                <div id="myDropdownz" className={`dropdown-content ${isOpenz ? 'show' : ''}`}>

                  <div className="Features-box">



                    <div className="Features-card" onClick={page1}>
                      <div className="Features-img-box">
                        <img src={n1} alt="" />
                      </div>

                      <span>
                        <h2>Static QR</h2>
                        <p>Permanent and unalterable QR codes.</p>
                      </span>
                    </div>

                    <div className="Features-card" onClick={page2}>
                      <div className="Features-img-box">
                        <img src={n7} alt="" />
                      </div>

                      <span>
                        <h2>Bulk creation and download</h2>
                        <p>Generate and download QRs on a large scale.</p>
                      </span>
                    </div>

                    <div className="Features-card" onClick={page3}>
                      <div className="Features-img-box">
                        <img src={n2} alt="" />
                      </div>

                      <span>
                        <h2>Dynamic QR</h2>
                        <p>QR codes updateable in real time.</p>
                      </span>
                    </div>

                    <div className="Features-card" onClick={page4}>
                      <div className="Features-img-box">
                        <img src={n8} alt="" />
                      </div>

                      <span>
                        <h2>Google pixel integration</h2>
                        <p>Improve the analysis of your digital campaigns.</p>
                      </span>
                    </div>

                    <div className="Features-card" onClick={page5}>
                      <div className="Features-img-box">
                        <img src={n3} alt="" />
                      </div>

                      <span>
                        <h2>Variety of download formats</h2>
                        <p>Expand the possibilities of use of your QRs.</p>
                      </span>
                    </div>

                    <div className="Features-card" onClick={page6}>
                      <div className="Features-img-box">
                        <img src={n10} alt="" />
                      </div>

                      <span>
                        <h2>Custom Domain</h2>
                        <p>Strengthen your brand with your own domain.</p>
                      </span>
                    </div>

                    <div className="Features-card" onClick={page7}>
                      <div className="Features-img-box">
                        <img src={n4} alt="" />
                      </div>

                      <span>
                        <h2>Limited contributing users</h2>
                        <p>Manage your QRs as a team.</p>
                      </span>
                    </div>

                    <div className="Features-card" onClick={page8}>
                      <div className="Features-img-box">
                        <img src={n11} alt="" />
                      </div>

                      <span>
                        <h2>Templates</h2>
                        <p>Save and reuse your own designs..</p>
                      </span>
                    </div>

                    <div className="Features-card " onClick={page9}>
                      <div className="Features-img-box">
                        <img src={n5} alt="" />
                      </div>

                      <span>
                        <h2>Complete analytics</h2>
                        <p>Understand performance with detailed data.</p>
                      </span>
                    </div>

                    <div className="Features-card" onClick={page10}>
                      <div className="Features-img-box">
                        <img src={n12} alt="" />
                      </div>

                      <span>
                        <h2>Event trackingtatic QR</h2>
                        <p>Track interactions.</p>
                      </span>
                    </div>

                    <div className="Features-card" onClick={page11}>
                      <div className="Features-img-box">
                        <img src={n6} alt="" />
                      </div>

                      <span>
                        <h2>Editing and management of QRs</h2>
                        <p>Customize and organize your QRs.</p>
                      </span>
                    </div>

                    <div className="Features-card" onClick={page12}>
                      <div className="Features-img-box">
                        <img src={n13} alt="" />
                      </div>

                      <span>
                        <h2>Password access protection</h2>
                        <p>Secure your codes.</p>
                      </span>
                    </div>





                  </div>
                </div>
              </div>

            </ul>
            
            <div
          // className="header-btn-box"
            className={`header-btn-box ${isMobile && showMenu ? "show" : ""}`}
          >
        <div>
          <select onChange={(e) => changeLanguages(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>


            <button className="Register" onClick={sigup}>
              Register
            </button>

            <button className="Login" onClick={login}>
              Log In
            </button>
            {
              showdashboard &&
              <button onClick={demo}>Dashboard</button>
            }
          </div>
</div>



          </div>

          {/* Hamburger Icon */}
          {isMobile && (

            <div className="hamburger" onClick={toggleMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6H21V8H3V6ZM3 12H21V14H3V12ZM3 18H21V20H3V18Z" fill="black" />
              </svg>
            </div>
          )}

          {/* <div
          className="header-btn-box"
            // className={`header-btn-box ${isMobile && showMenu ? "show" : ""}`}
          >



            <button className="Register" onClick={sigup}>
              Register
            </button>

            <button className="Login" onClick={login}>
              Log In
            </button>
            {
              showdashboard &&
              <button onClick={demo}>Dashboard</button>
            }
          </div> */}

        </div>
      </header>


    </>
  );
};

export default Header;
