// BulkQr.js
import React, { useState } from 'react';
import website from '../../img/Website.png';
import Listlinks from '../../img/listlinks.png';
import pdf from '../../img/pdf.png';
import vcard from '../../img/vcard.png';
import video from '../../img/video.png';
import BusinessIcon from '../../img/bussiness.png';
import MenuIcon from '../../img/menu.png';
import MP3Icon from '../../img/mp3.png';
import feedback from '../../img/feedback.png';
import landing from '../../img/landing.png';
import barcode from '../../img/2dbarcode.png'
import socialmedia from '../../img/socialmedia.png';
import event from '../../img/event.png';
import playlist from '../../img/playlist.png';
import coupon from '../../img/coupon.png';
import apps from '../../img/apps.png';
import ImagesIcon from '../../img/imageicon.png';
import DeviceHover from '../../img/Device hover.png';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';


const BulkQr = () => {

    const items = [
        { id: 1, icon: website, title: 'Website', description: 'Open a URL', link: '/website' },
        { id: 2, icon: Listlinks, title: 'List of links', description: 'Group links', link: '/listlinks' },
        { id: 3, icon: video, title: 'Video', description: 'Show a video', link: '/video' },
        { id: 4, icon: vcard, title: 'vCard Plus', description: 'Show contact details', link: '/vcard' },
        { id: 5, icon: apps, title: 'Apps', description: 'Redirect to an app store', link: '/apps' },
        { id: 6, icon: pdf, title: 'PDF', description: 'Show a PDF', link: '/pdf' },
        { id: 7, icon: ImagesIcon, title: 'Images', description: 'Show an image gallery', link: '/images' },
        { id: 8, icon: BusinessIcon, title: 'Business', description: 'Share information about your business', link: '/business' },
        { id: 9, icon: MenuIcon, title: 'Menu', description: 'Display the menu of a restaurant or bar', link: '/menu' },
        { id: 10, icon: MP3Icon, title: 'MP3', description: 'Play an audio file', link: '/mp3' },
        { id: 11, icon: feedback, title: 'Feedback', description: 'Collect feedback and get rated', link: '/feedback' },
        { id: 12, icon: landing, title: 'Landing', description: 'Create your own page', link: '/landing' },
        { id: 13, icon: coupon, title: 'Coupon', description: 'Share a coupon', link: '/coupon' },
        { id: 14, icon: socialmedia, title: 'Social Media', description: 'Share your social profiles', link: '/socialmedia' },
        { id: 15, icon: event, title: 'Event', description: 'Promote and share an event', link: '/event' },
        { id: 16, icon: playlist, title: 'Playlist', description: 'Share your own music', link: '/playlist' },
        { id: 17, icon: barcode, title: 'Barcode', description: 'Supports GS1 standard', link: '/barcode' },
    ];

    return (
        <>
<div className="main-dashbord-contanir">


                <div className='NewQR'>



                    <div className="main-content--b--flex">
                        <div className="main-content--b">
                        <div className="top-content--b--flex">
                        <div className="top-content--b">
                            <h1>Dynamic QR</h1>
                            <button>WITH TRACKING</button>
                        </div>
                  
                    </div>

                    <div className="top-content--b--para">
                        <p>Update content in real time, without changing your code</p>
                    </div>

                        <div className="item-list-box">
                            {items.map((item) => (
                                <Link to={item.link} key={item.id} className="icon-grid-item">
                                    <img src={item.icon} alt={item.title} className="icon-grid-icon" />
                                    <div className="icon-grid-text">
                                        <h3 className="icon-grid-title">{item.title}</h3>
                                        <p className="icon-grid-description">{item.description}</p>
                                    </div>
                                </Link>
                            ))}
                               </div>
                               <div className="bottom-content--b">
                        <h1>Static QR</h1>
                        <button>NO TRACKING</button>
                    </div>

                    <div className="bottom-content--b--para">
                        <p>Reprint required when updating Content</p>
                    </div>
                        </div>


                        <div className="main-content--b--image">
                            <h4>Example</h4>
                            <img src={DeviceHover} alt="Device Hover" />
                        </div>

                    </div>

                  

                </div>
                </div>

        </>
    );
};

export default BulkQr;
