import React, { useState , useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import NewQR from '../Dashborad_Pages/NewQR';
import MyQRCodes from '../Dashborad_Pages/MyQRCodes';
import Stats from '../Dashborad_Pages/Stats';
import MyDomains from '../Dashborad_Pages/MyDomains';
import PlansAndPayments from '../Dashborad_Pages/PlansAndPayments';
import Navbar from '../DashboardNav/Navbar';
import BulkQr from '../Dashborad_Pages/BulkQr';
import Header from '../DashboardNav/Header';
import TempleteHeader from '../DashboardNav/TempleteHeader';
import InnerHeaderWebsite from '../DashboardNav/InnerHeaderWebsite';
import NewQR_Website from '../Dashboard_SubPages/NewQR_Website';
import DashboardTemplates from '../Dashborad_Pages/DashboardTemplates';
import NewQR_Link from '../Dashboard_SubPages/NewQR_List';
import VideoQr from '../Dashboard_SubPages/VideoQr';
import BarcodeQr from '../Dashboard_SubPages/BarcodeQr';
import Playlist from '../Dashboard_SubPages/PlaylistQr';
import EventQr from '../Dashboard_SubPages/EventQr';
import SocailmediaQr from '../Dashboard_SubPages/SocailmediaQr';
import CouponQr from '../Dashboard_SubPages/CouponQr';
import LandingQr from '../Dashboard_SubPages/LandingQr';
import FeedbackQr from '../Dashboard_SubPages/feedbackQr';
import MP3Qr from '../Dashboard_SubPages/Mp3Qr';
import MenuQr from '../Dashboard_SubPages/MenuQr';
import BussinessQr from '../Dashboard_SubPages/Bussiness';
import ImageQr from '../Dashboard_SubPages/ImageQr';
import PdfQr from '../Dashboard_SubPages/PdfQr';
import AppQr from '../Dashboard_SubPages/AppQr';
import VcardQr from '../Dashboard_SubPages/VcardQr';
import Creatqrcode from '../Dashboard_SubPages/Creatqrcode';
import UploadCSV from '../Dashboard_SubPages/UploadCSV';
import BulkCreatqrcode from '../Dashboard_SubPages/BulkCreatqrcode';
import BulkNewQR from '../Dashborad_Pages/BulkQrCode';
import QRCodeGenerator from '../Dashborad_Pages/qrtest';
import QRCodeScanner from '../Dashborad_Pages/qrscan';
import FullScreenView from '../Dashboard_SubPages/fullscreenview';
import Businessz from '../../Businessz/Businessz';
import VcradFullscreen from '../Dashboard_SubPages/VcradFullscreen';
import PdfScreenView from '../Dashboard_SubPages/pdfscreenview';
import VideoScreenView from '../Dashboard_SubPages/videoscreenview';
import AppScreenView from '../Dashboard_SubPages/appscreenview';
import ImageScreenView from '../Dashboard_SubPages/Imagescreen';
import AudioScreenView from '../Dashboard_SubPages/audioscreen';
import CouponScreenView from '../Dashboard_SubPages/couponscreen';
import PlaylistScreenView from '../Dashboard_SubPages/playlistscreenview';
import LandingscreenView from '../Dashboard_SubPages/landingscreenview';
import SocailScreenView from '../Dashboard_SubPages/socailscreenview';
import EventFullscreen from '../Dashboard_SubPages/EventFullscreen';
import BusinessFullscreen from '../Dashboard_SubPages/BusinessFullscreen';
import MenuFullscreen from '../Dashboard_SubPages/MenuFullscreen';
import Createtemplate from '../Dashboard_SubPages/Createtemplate';
import ProductQr from '../Dashboard_SubPages/product';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Formbook from '../Dashborad_Pages/Formbook';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Links() {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [qrCodeData, setQRCodeData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  

const stripePromise = loadStripe('pk_test_51ONGSUJf5CYoJPVsmhVV5W3GMEu0dVMj0RVrroS6aISJLVGYrMLe1D7LziLXPY3WgLsJRZOprKbUQzCb2kbVHWMm00dDxogEMK');


    console.log("Current path:", location.pathname)


    useEffect(() => {
        
        const protectedRoutes = ['/NewQR', '/Bulkqrcode' ,  '/BulkQr', '/my-qr-codes', '/stats', '/DashboardTemplates', '/my-domains'];
        const currentRoute = window.location.pathname;

        // Check if the user is on a protected route
        if (protectedRoutes.includes(currentRoute)) {
            const expiryDate = localStorage.getItem('subscriptionExpiry');
            const currentDate = new Date();

            if (expiryDate) {
                const expiryDateObj = new Date(expiryDate);

                // If the subscription has expired, redirect to /plans-and-payments
                if (currentDate > expiryDateObj) {
                    toast.error('Subscription has been Expired')
                    navigate('/plans-and-payments');
                }
            } else {
                // If there's no expiry date in localStorage, redirect to /plans-and-payments
                navigate('/plans-and-payments');
            }
        }
    }, [navigate]);



    const navbarRoutes = [
        '/NewQR', 
        '/BulkQr', 
        '/my-qr-codes', 
        '/stats', 
        '/DashboardTemplates', 
        '/my-domains', 
        '/plans-and-payments',
        '/website',
        '/listlinks',
        '/video',
        '/barcode',
        '/playlist',
        '/event',
        '/socail',
        '/coupon',
        '/landing',
        '/feedbackqr',
        '/mp3',
        '/menu',
        '/bussiness',
        '/image',
        '/pdf',
        '/app',
        '/vcard',
        '/Creatqrcode',
        '/uploadcsv',
        '/BulkCreatqrcode',
        '/Bulkqrcode',
        '/createcustomtemplate',
        '/products',
        
    ];

    const headerOnlyRoutes = [
        '/NewQR', 
        '/BulkQr',
        '/Bulkqrcode'
        
    ];

    const restheaderOnlyRoutes = [
        '/my-qr-codes', 
        '/stats',
        '/DashboardTemplates',
        '/my-domains',
        '/plans-and-payments'
    ];

    const innerRoutesNewQR = [
        '/website',
        '/listlinks',
   
        '/video',
        '/barcode',
        '/playlist',
        '/event',
        '/socail',
        '/coupon',
        '/landing',
        '/feedbackqr',
        '/mp3',
        '/menu',
        '/bussiness',
        '/image',
        '/pdf',
        '/app',
        '/vcard',
       
        '/Creatqrcode',
        '/uploadcsv',
        '/BulkCreatqrcode',
        '/products',
       
        
        
       
    ];


    const isDynamicRoute = (path) => {
        return /^\/listlinkedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };


    const isDynamicRoute2 = (path) => {
        return /^\/websiteedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };


    const isDynamicRoute3 = (path) => {
        return /^\/Videoedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };


    const isDynamicRoute4 = (path) => {
        return /^\/vcardedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };


    const isDynamicRoute5 = (path) => {
        return /^\/pdfedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };



    const isDynamicRoute6 = (path) => {
        return /^\/bussinessedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };


    const isDynamicRoute7 = (path) => {
        return /^\/menuedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };

    const isDynamicRoute9 = (path) => {
        return /^\/mp3edit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };


    const isDynamicRoute10 = (path) => {
        return /^\/landingedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };



    const isDynamicRoute11 = (path) => {
        return /^\/socailedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };

    const isDynamicRoute12 = (path) => {
        return /^\/eventedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };

    const isDynamicRoute13 = (path) => {
        return /^\/playlistedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };


    const isDynamicRoute14 = (path) => {
        return /^\/barcodeedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };


    const isDynamicRoute15 = (path) => {
        return /^\/appedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };


    const isDynamicRoute16 = (path) => {
        return /^\/couponedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };

    const isDynamicRoute17 = (path) => {
        return /^\/imageedit\/\d+$/.test(path); // Matches paths like /listlinkedit/123
    };





    // const showNavbar = navbarRoutes.includes(location.pathname);
    const showHeader = headerOnlyRoutes.includes(location.pathname);
    const showrestHeader = restheaderOnlyRoutes.includes(location.pathname);
    // const showinnerMyQRHeader = innerRoutesNewQR.includes(location.pathname);

    const showNavbar = navbarRoutes.includes(location.pathname) || isDynamicRoute(location.pathname) || isDynamicRoute2(location.pathname  )  || isDynamicRoute3(location.pathname) || isDynamicRoute4(location.pathname) || isDynamicRoute5(location.pathname)|| isDynamicRoute6(location.pathname) || isDynamicRoute7(location.pathname) ||isDynamicRoute9(location.pathname)|| isDynamicRoute10(location.pathname) || isDynamicRoute11(location.pathname) || isDynamicRoute12(location.pathname) || isDynamicRoute13(location.pathname) || isDynamicRoute14(location.pathname) || isDynamicRoute15(location.pathname) || isDynamicRoute16(location.pathname) || isDynamicRoute17(location.pathname);
  const showinnerMyQRHeader = innerRoutesNewQR.includes(location.pathname) || isDynamicRoute(location.pathname) || isDynamicRoute2(location.pathname) || isDynamicRoute3(location.pathname) || isDynamicRoute4(location.pathname) || isDynamicRoute5(location.pathname) || isDynamicRoute6(location.pathname) || isDynamicRoute7(location.pathname) ||isDynamicRoute9(location.pathname) || isDynamicRoute10(location.pathname) || isDynamicRoute11(location.pathname) || isDynamicRoute12(location.pathname) || isDynamicRoute13(location.pathname) || isDynamicRoute14(location.pathname) || isDynamicRoute15(location.pathname) || isDynamicRoute16(location.pathname) || isDynamicRoute17(location.pathname);

    const handleSidebarToggle = (isOpen) => {
        setIsSidebarOpen(isOpen);
    };

    const saveQRCode = () => {
        console.log('ahti')
        setQRCodeData('ahti')
      };
   
    return (
        <div className="main-content">
            {showNavbar && <Navbar onToggle={handleSidebarToggle} />}
            {showHeader && <Header />}
            {showrestHeader && <TempleteHeader />}
            {showinnerMyQRHeader && <InnerHeaderWebsite saveQRCode={saveQRCode}  loading = {loading}/>}

            <div className={`page-content ${isSidebarOpen ? 'with-sidebar' : 'full-width'}`}>


                <Routes>
                    <Route path="/NewQR" element={<NewQR />} /> 
                    <Route path="/BulkQr" element={<BulkQr />} />
                    <Route path="/my-qr-codes" element={<MyQRCodes />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/DashboardTemplates" element={<DashboardTemplates />} />
                    <Route path="/my-domains" element={<MyDomains />} />
                    {/* <Route path="/plans-and-payments" element={<PlansAndPayments />} /> */}

        <Route
          path="/plans-and-payments"
          element={
            <Elements stripe={stripePromise}>
              <PlansAndPayments />
            </Elements>
          }
        />


                    <Route path="/website" element={<NewQR_Website />} />
                    <Route path="/websiteedit/:id" element={<NewQR_Website />} />

                    <Route path="/listlinks" element={<NewQR_Link />} />
                    <Route path="/listlinkedit/:id" element={<NewQR_Link />} />

                    <Route path="/video" element={<VideoQr />} />
                    <Route path="/Videoedit/:id" element={<VideoQr />} />

                    <Route path="/barcode" element={<BarcodeQr />} />
                    <Route path="/barcodeedit/:id" element={<BarcodeQr />} />

                    <Route path="/playlist" element={<Playlist />} />
                    <Route path="/playlistedit/:id" element={<Playlist />} />

                    <Route path="/event" element={<EventQr />} />
                    <Route path="/eventedit/:id" element={<EventQr />} />

                    <Route path="/socail" element={<SocailmediaQr />} />
                    <Route path="/socailedit/:id" element={<SocailmediaQr />} />

                    <Route path="/coupon" element={<CouponQr />} />
                    <Route path="/couponedit/:id" element={<CouponQr />} />
                    <Route path="/landing" element={<LandingQr />} />
                    <Route path="/landingedit/:id" element={<LandingQr />} />

                    <Route path="/feedbackqr" element={<FeedbackQr />} />
                    <Route path="/mp3" element={<MP3Qr />} />
                    <Route path="/mp3edit/:id" element={<MP3Qr />} />

                    <Route path="/menu" element={<MenuQr />} />
                    <Route path="/menuedit/:id" element={<MenuQr />} />

                    <Route path="/bussiness" element={<BussinessQr />} />
                    <Route path="/bussinessedit/:id" element={<BussinessQr />} />

                    <Route path="/image" element={<ImageQr />} />
                    <Route path="/imageedit/:id" element={<ImageQr />} />

                    <Route path="/pdf" element={<PdfQr />} />
                    <Route path="/pdfedit/:id" element={<PdfQr />} />

                    <Route path="/app" element={<AppQr />} />
                    <Route path="/appedit/:id" element={<AppQr />} />
                    <Route path="/vcard" element={<VcardQr />} />
                    <Route path="/vcardedit/:id" element={<VcardQr />} />

                    <Route path="/products" element={<ProductQr />} />
                    {/* <Route path="/Creatqrcode" element={<Creatqrcode  qrCodeData={qrCodeData} />} /> */}
                    <Route path="/Creatqrcode" element={<Creatqrcode  qrCodeData={qrCodeData} setLoading = {setLoading} />} />

                    <Route path="/BulkCreatqrcode" element={<BulkCreatqrcode />} />
                    <Route path="/Bulkqrcode" element={<BulkNewQR />} />
                    <Route path="/uploadcsv" element={<UploadCSV />} />
                    <Route path="/test" element={<QRCodeGenerator />} />
                    <Route path="/fullscreen" element={<FullScreenView />} />
                    <Route path="/fullscreen/:id" element={<FullScreenView />} />
                    <Route path="/VcradFullscreen" element={<VcradFullscreen />} />
                    <Route path="/VcradFullscreen/:id" element={<VcradFullscreen />} />
                    <Route path="/EventFullscreen" element={<EventFullscreen />} />
                    <Route path="/EventFullscreen/:id" element={<EventFullscreen />} />
                    <Route path="/BusinessFullscreen" element={<BusinessFullscreen />} />
                    <Route path="/BusinessFullscreen/:id" element={<BusinessFullscreen />} />
                    <Route path="/MenuFullscreen" element={<MenuFullscreen />} />
                    <Route path="/MenuFullscreen/:id" element={<MenuFullscreen />} />
                    <Route path="/pdfscreen" element={<PdfScreenView />} />
                    <Route path="/pdfscreen/:id" element={<PdfScreenView />} />
                    <Route path="/videoscreen" element={<VideoScreenView />} />
                    <Route path="/videoscreen/:id" element={<VideoScreenView />} />
                    <Route path="/appscreen" element={<AppScreenView />} />
                    <Route path="/appscreen/:id" element={<AppScreenView />} />
                    <Route path="/imagescreen" element={<ImageScreenView />} />
                    <Route path="/imagescreen/:id" element={<ImageScreenView />} />
                    <Route path="/audioscreen" element={<AudioScreenView />} />
                    <Route path="/audioscreen/:id" element={<AudioScreenView />} />
                    <Route path="/couponscreen" element={<CouponScreenView />} />
                    <Route path="/couponscreen/:id" element={<CouponScreenView />} />
                    <Route path="/playlisscreen" element={<PlaylistScreenView />} />
                    <Route path="/playlisscreen/:id" element={<PlaylistScreenView />} />
                    <Route path="/landingscreen" element={<LandingscreenView />} />
                    <Route path="/landingscreen/:id" element={<LandingscreenView />} />
                    <Route path="/socailscreen" element={<SocailScreenView />} />
                    <Route path="/socailscreen/:id" element={<SocailScreenView />} />
                    <Route path="/createcustomtemplate" element={<Createtemplate />} />
                    <Route path="/createcustomtemplate/:id" element={<Createtemplate />} />


                    {/* <Route path="/fullscreen" element={<FullScreenView />} /> */}

                



                </Routes>


            </div>
        </div>
    );
}

export default Links;
