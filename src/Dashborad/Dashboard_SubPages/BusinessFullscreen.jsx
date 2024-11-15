import React, { useState, useEffect } from 'react';
import logo from "../../img/profilelogo.webp";
import { baseurl } from '../../baseurl';
import axios from 'axios';
import rain from "../../img/Social1.png";

import moreinfo from "../../img/more-info.png";
import { useParams } from 'react-router-dom';


const BusinessFullscreen = () => {

    const [qrtemplete, setQrtemplete] = useState(null);
    const [showSplash, setShowSplash] = useState(false);



    const fetchQRtepmlete = async (id) => {
        try {
            const response = await axios.get(`${baseurl}/getqrtempletebusinessById/${id}`);
            setQrtemplete(response.data.data); // Directly set the template object
        } catch (error) {
            console.error('Error fetching QR template by ID:', error);
        }
    };

    const { id } = useParams();

    useEffect(() => {
    const userId = localStorage.getItem('fetchId');

    if(id){
        fetchQRtepmlete(id);

    }

    else{
        fetchQRtepmlete(userId);

    }

        setTimeout(() => {
            showSplashScreen();
        }, 1000);

    }, []);



    const showSplashScreen = () => {
        // if(qrtemplete.animationimage){


        setShowSplash(true);
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);
        return () => clearTimeout(timer);
    }


    const gotonew = () => {
        const data = {};
        localStorage.setItem('myData', JSON.stringify(data));
    };

    return (
        <div className='fullscreen'>
            {qrtemplete ?
                <div>


                    {showSplash && qrtemplete.animationimage ? (
                        <div className="splash-screen">
                            <div className="splash-image" style={{ backgroundImage: `url(${qrtemplete.animationimage || rain})` }}></div>
                        </div>
                    ) : (


                        <div>
                            {qrtemplete.SelectedTemplte === 1 && (
                                <div className='templetes1' style={{ backgroundImage: `url(${qrtemplete.selectedCover || rain})`, }}>


                                    <div className='grad' style={{ background: `transparent ` }}>

                                        <div className='setlogs hero-li-list-box'>



                                            <div className='hell-box-inside' style={{ background: ` ${qrtemplete.bottom}` }}>
                                                <p className='logsp' style={{ fontFamily: qrtemplete.desFont }}>
                                                    {qrtemplete.Name || 'developer'}
                                                </p>


                                                <img className='logsimage' src={qrtemplete.selectedImage || logo} alt="Link" />


                                                <span className='logsspan' style={{ fontFamily: qrtemplete.titleFont }}>

                                                    {qrtemplete.TitleEvent || 'Full Stack dev'}
                                                </span>


                                                <h3>{qrtemplete.DescriptionEvent}</h3>



                                                <a href={qrtemplete.ButtonURl}>
                                                    <button>{qrtemplete.ButtonDescription}</button>
                                                </a>

                                            </div>



                                            <div className="hell-2-box-inside" style={{ background: ` #fff` }}>

                                                <div className="hell-2-box-inside-card">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.26,8.22a10,10,0,1,0-13.14,13A10.12,10.12,0,0,0,12,22,10,10,0,0,0,21.26,8.22ZM19.37,15.1A8,8,0,1,1,4.63,8.9a8,8,0,1,1,14.74,6.2Z"></path><path d="M13,11.5V8a1,1,0,0,0-2,0v4.5l4.4,3.3a1,1,0,0,0,.6.2,1,1,0,0,0,.8-.4,1,1,0,0,0-.2-1.4Z"></path></svg>
                                                    <span>
                                                        <h2>Opening hours</h2>
                                                        <p>Open now</p>
                                                    </span>
                                                </div>


                                                <div className="hell-2-box-inside-card">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M12,21a1,1,0,0,1-.41-.09C11.28,20.77,4,17.4,4,11.28V11a8,8,0,0,1,16,0,.66.66,0,0,1,0,.14.66.66,0,0,1,0,.14c0,6.12-7.28,9.49-7.59,9.63A1,1,0,0,1,12,21ZM12,5a6,6,0,0,0-6,6v.1s0,.12,0,.15c0,4.14,4.58,6.88,6,7.63,1.42-.75,6-3.5,6-7.6,0,0,0-.16,0-.18s0-.09,0-.1h0A6,6,0,0,0,12,5Z"></path><path d="M12,15a4,4,0,1,1,4-4A4,4,0,0,1,12,15Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,9Z"></path></svg>
                                                    <span>
                                                        <h2>{qrtemplete.SearchAddress || "Gran Via 15, 28013, Madrid"}</h2>
                                                        <p>Show on map</p>
                                                    </span>
                                                </div>



                                                <div className="hell-2-box-inside-card">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M14,12H10a6,6,0,0,0-6,6,3,3,0,0,0,3,3H17a3,3,0,0,0,3-3A6,6,0,0,0,14,12Zm3,7H7a1,1,0,0,1-1-1,4,4,0,0,1,4-4h4a4,4,0,0,1,4,4A1,1,0,0,1,17,19Z"></path><path d="M12,11A4,4,0,1,0,8,7,4,4,0,0,0,12,11Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,12,5Z"></path></svg>
                                                    <span>
                                                        <h2>{qrtemplete.FirstName || "Special Coffee"} </h2>
                                                        <p>Name</p>
                                                    </span>
                                                </div>



                                                <div className="hell-2-box-inside-card">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M16.18,21.3a5,5,0,0,1-3.53-1.46L4.16,11.35a5,5,0,0,1,0-7.07l.71-.7a3,3,0,0,1,4.24,0L11.23,5.7a3,3,0,0,1,0,4.24l-.6.6,2.83,2.83.6-.6a3,3,0,0,1,4.24,0l2.12,2.12a3,3,0,0,1,0,4.24l-.7.71A5,5,0,0,1,16.18,21.3ZM7,4.7A1,1,0,0,0,6.28,5l-.7.71a3,3,0,0,0,0,4.24l8.48,8.48a3,3,0,0,0,4.24,0l.71-.7a1,1,0,0,0,0-1.42l-2.12-2.12a1,1,0,0,0-1.42,0l-2,2L7.8,10.54l2-2a1,1,0,0,0,0-1.42L7.7,5A1,1,0,0,0,7,4.7Z"></path></svg>
                                                    <span>
                                                        <h2>{qrtemplete.Phone || "1139133924"}</h2>
                                                        <p>Mobile phone</p>
                                                    </span>
                                                </div>



                                                <div className="hell-2-box-inside-card">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm0,2h0l-5.84,5a1.89,1.89,0,0,1-2.34,0L5,6H19Zm0,12H5a1,1,0,0,1-1-1V7.79L9.53,12.5a3.91,3.91,0,0,0,4.94,0L20,7.79V17A1,1,0,0,1,19,18Z"></path><path d="M7.29,13.29l-2,2a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l2-2a1,1,0,0,0-1.42-1.42Z"></path><path d="M16.71,13.29a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"></path></svg>
                                                    <span>
                                                        <h2>{qrtemplete.Email || "specialcoffe@gmail.com"}</h2>
                                                        <p>Email</p>
                                                    </span>
                                                </div>


                                                <div className="hell-2-box-inside-card">
                                                    <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" ><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></svg>
                                                    <span>
                                                        <h2>{qrtemplete.Website || "https://specialcoffee.com"}</h2>
                                                        <p>Website:</p>
                                                    </span>
                                                </div>


                                                <div className="hell-2-box-inside-card">
                                                    <h4>Facilities
                                                    </h4>
                                                    <div className="div-box-ipot">
                                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M18.13,23a1,1,0,0,0-1.31.53A4.08,4.08,0,1,1,11.88,18a1,1,0,0,0-.6-1.92,6.11,6.11,0,1,0,7.38,8.24A1,1,0,0,0,18.13,23Z"></path><circle cx="15" cy="7" r="2"></circle><path d="M22.27,20,16,18.25V14l1.2,1.6a1,1,0,0,0,.8.4h3a1,1,0,0,0,0-2H18.5l-2.7-3.6-.05-.05-.15-.13a.54.54,0,0,0-.16-.1l-.17-.07-.2,0H15l-.12,0-.19,0-.19.09-.1,0-.05.05-.13.15a.91.91,0,0,0-.11.16l-.06.17c0,.07,0,.13,0,.2S14,11,14,11v8a1,1,0,0,0,.73,1L21,21.75V27a1,1,0,0,0,2,0V21A1,1,0,0,0,22.27,20Z"></path></svg>
                                                    </div>



                                                    <div className="div-box-ipot">
                                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M26.93,15.8A3.5,3.5,0,0,0,24,13V10a5,5,0,0,0-5-5H13a5,5,0,0,0-5,5v3a3.51,3.51,0,0,0-2.93,2.78A3.82,3.82,0,0,0,5,16.5V19a4.5,4.5,0,0,0,.16,1.25,5,5,0,0,0,3.58,3.57A3.63,3.63,0,0,0,8,26a1,1,0,0,0,2,0,2.3,2.3,0,0,1,2.5-2h7A2.3,2.3,0,0,1,22,26a1,1,0,0,0,2,0,3.63,3.63,0,0,0-.74-2.18,4.94,4.94,0,0,0,3.57-3.55A4.38,4.38,0,0,0,27,19V16.5A4.26,4.26,0,0,0,26.93,15.8ZM13,7h6a3,3,0,0,1,3,3v3.35a3.51,3.51,0,0,0-1.93,2.47,3.82,3.82,0,0,0-.07.68V17H12v-.5a4.26,4.26,0,0,0-.07-.7A3.5,3.5,0,0,0,10,13.35V10A3,3,0,0,1,13,7ZM25,19a2.61,2.61,0,0,1-.1.75A3,3,0,0,1,22,22H10a3,3,0,0,1-2.91-2.27A2.75,2.75,0,0,1,7,19V16.5a1.32,1.32,0,0,1,0-.3,1.5,1.5,0,0,1,2.94,0,1.66,1.66,0,0,1,0,.32V18a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V16.5a1.32,1.32,0,0,1,0-.3,1.5,1.5,0,0,1,2.94,0,1.66,1.66,0,0,1,0,.32Z"></path></svg>
                                                    </div>



                                                    <div className="div-box-ipot">
                                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M25,11a5,5,0,0,0-5-5H17a1,1,0,0,0-1,1v5H10.62l-.73-1.45A1,1,0,0,0,9,10H7a1,1,0,0,0,0,2H8.38L9,13.24V14a7,7,0,0,0,7,7h2a7,7,0,0,0,7-7V13a1,1,0,0,0-.15-.5A1,1,0,0,0,25,12Zm-7,8H16a5,5,0,0,1-5-5H23A5,5,0,0,1,18,19Zm0-7V8h2a3,3,0,0,1,3,3v1Z"></path><circle cx="12.5" cy="24.5" r="2.5"></circle><circle cx="21.5" cy="24.5" r="2.5"></circle></svg>
                                                    </div>


                                                    <div className="div-box-ipot">
                                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M25,4a6,6,0,0,0-6,6v6a1,1,0,0,0,1,1h.88L20,24.89A.41.41,0,0,0,20,25a3,3,0,0,0,6,0V5A1,1,0,0,0,25,4Zm-4,6a4,4,0,0,1,3-3.87V15H21Zm3,15a1,1,0,0,1-2,.05l.9-8H24Z"></path><path d="M15,4a1,1,0,0,0-1,1v7a1,1,0,0,1-1,1H12V5a1,1,0,0,0-2,0v8H9a1,1,0,0,1-1-1V5A1,1,0,0,0,6,5v7a3,3,0,0,0,2,2.82V25a3,3,0,0,0,6,0V14.82A3,3,0,0,0,16,12V5A1,1,0,0,0,15,4ZM12,25a1,1,0,0,1-2,0V15h2Z"></path></svg>
                                                    </div>



                                                    <div className="div-box-ipot">
                                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M25,11H15a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1V14A3,3,0,0,0,25,11Zm1,4H16V13h9a1,1,0,0,1,1,1Z"></path><path d="M27,18H6V11a1,1,0,0,0-2,0V22a1,1,0,0,0,2,0V20H26v2a1,1,0,0,0,2,0V19A1,1,0,0,0,27,18Z"></path><circle cx="10.5" cy="14.5" r="2.5"></circle></svg>
                                                    </div>



                                                    <div className="div-box-ipot">
                                                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 32 32" aria-hidden="true" ><path d="M27,14.83s0-.07,0-.1L25.38,9.18A3,3,0,0,0,22.49,7H19V6a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1V7H9.51A3,3,0,0,0,6.62,9.18L5,14.73s0,.07,0,.1A1,1,0,0,0,5,15V26a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V24H23v2a1,1,0,0,0,1,1h2a1,1,0,0,0,1-1V15A1,1,0,0,0,27,14.83ZM8,22H7V16H25v6H8ZM8.55,9.73a1,1,0,0,1,1-.73h13a1,1,0,0,1,1,.73L24.67,14H7.33Z"></path><path d="M12,18H10a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"></path><path d="M22,18H20a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Z"></path></svg>
                                                    </div>


                                                </div>



                                            </div>


                                        </div>


                                    </div>



                                </div>
                            )}


                        </div>
                    )}
                </div>

                :

                <div>Loading...</div>
            }





        </div>
    );
};

export default BusinessFullscreen;
