import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux

// Import your Redux store
import store from "./redux/store";
import "../src/css/App.css";
import Landing from "./home/landing";
import Login from "./login/login";
import Editinginner from "./marketing-page/Editinginner";
import Dynamicinner from "./marketing-page/Dynamicinner";
import Collaborating from "./marketing-page/Collaboratinginner";
import Links from "./Dashborad/Dashboard_Routing/Routing";
import Varietyinner from "./marketing-page/Varietyinner";
import Analytics from "./marketing-page/Analyticsinner";
import Facebook from "./marketing-page/Facebook";
import Templates from "./marketing-page/Templates";
import Static from "./marketing-page/Static";
import Bulk from "./marketing-page/Bulk";
import Custom from "./marketing-page/Custom";
import Password from "./marketing-page/Password";
import Tracking from "./marketing-page/Tracking";
import Signup from "./login/signup";
import Qrtypeone from "./generate-qr-types/qr-type-1/Qrtypeone";
import Qrtype3 from "./generate-qr-types/qr-type-3/Qrtype3";
import Prices from "./prices/Prices";
import Faq from "./faq/Faq";
import Resources1 from "./Resources-file/Resources1";
import Resources2 from "./Resources-file/Resources2";
import Resources3 from "./Resources-file/Resources3";
import ContactForm from "./Contact/Contact";
import Business from "./Business -box/Business";
import Business1 from "./Business -box/Business1";
import Business2 from "./Business -box/Business2";
import QRCodeScanner from "./Dashborad/Dashborad_Pages/qrscan";
import Business3 from "./Business -box/Business3";
import Business4 from "./Business -box/Business4";
import Business6 from "./Business -box/Business6";
import Business7 from "./Business -box/Business7";
import Business8 from "./Business -box/Business8";
import Business9 from "./Business -box/Business9";
import Business10 from "./Business -box/Business10";
import Business11 from "./Business -box/Business11";
import Business12 from "./Business -box/Business12";
import Business13 from "./Business -box/Business13";
import Business14 from "./Business -box/Business14";
import Business15 from "./Business -box/Business15";
import Business16 from "./Business -box/Business16";
import Business17 from "./Business -box/Business17";
import Business18 from "./Business -box/Business18";
import Business19 from "./Business -box/Business19";
import Business20 from "./Business -box/Business20";
import Business21 from "./Business -box/Business21";
import Business22 from "./Business -box/Business22";
import Business23 from "./Business -box/Business23";
import Business24 from "./Business -box/Business24";
import Business25 from "./Business -box/Business25";
import Business26 from "./Business -box/Business26";
import Business27 from "./Business -box/Business27";
import Business28 from "./Business -box/Business28";
import Business29 from "./Business -box/Business29";
import Business30 from "./Business -box/Business30";
import Business31 from "./Business -box/Business31";
import Business32 from "./Business -box/Business32";
import Business33 from "./Business -box/Business33";
import Business34 from "./Business -box/Business34";
import Business35 from "./Business -box/Business35";
import Businessz from "./Businessz/Businessz";
import Businessz1 from "./Businessz/Businessz1";
import Businessz2 from "./Businessz/Businessz2";
import Businessz3 from "./Businessz/Businessz3";
import Businessz4 from "./Businessz/Businessz4";
import Businessz5 from "./Businessz/Businessz5";
import Businessz6 from "./Businessz/Businessz6";
import Businessz7 from "./Businessz/Businessz7";
import Businessz8 from "./Businessz/Businessz8";
import Businessz9 from "./Businessz/Businessz9";
import Businessz10 from "./Businessz/Businessz10";
import Businessz11 from "./Businessz/Businessz11";
import Businessz12 from "./Businessz/Businessz12";
import Businessz13 from "./Businessz/Businessz13";
import Businessz14 from "./Businessz/Businessz14";
import Businessz15 from "./Businessz/Businessz15";
import Businessz16 from "./Businessz/Businessz16";
import Businessz17 from "./Businessz/Businessz17";
import Businessz18 from "./Businessz/Businessz18";
import Businessz19 from "./Businessz/Businessz19";
import Businessz20 from "./Businessz/Businessz20";
import Businessz21 from "./Businessz/Businessz21";
import Businessz22 from "./Businessz/Businessz22";
import Businessz23 from "./Businessz/Businessz23";
import Businessz24 from "./Businessz/Businessz24";
import Businessz25 from "./Businessz/Businessz25";
import Businessz26 from "./Businessz/Businessz26";
import Businessz27 from "./Businessz/Businessz27";
import Businessz28 from "./Businessz/Businessz28";
import Businessz29 from "./Businessz/Businessz29";
import Qrtypetwo from "./generate-qr-types/qr-type-2/Qrtypetwo";
import Qrtype4 from "./generate-qr-types/qr-type-4/Qrtype4";

import Qrtype9 from "./generate-qr-types/qr-type-9/Qrtype9";

import Qrtype5 from "./generate-qr-types/qr-type-5/Qrtype5";
import Qrtype10 from "./generate-qr-types/qr-type-10/Qrtype10";
import Mp3Qr from "./generate-qr-types/qr-type-1/Mp3Home";

import CouponhomeQr from "./generate-qr-types/qr-type-1/Couponhome";
import MenuhomeQr from "./generate-qr-types/qr-type-1/Menuhome";
import BusinesshomeQr from "./generate-qr-types/qr-type-1/Bussinesshome";
import PlaylisthomeQr from "./generate-qr-types/qr-type-1/Playlisthome";
import EventhomeQr from "./generate-qr-types/qr-type-1/Eventhome";
import FeedbackhomeQr from "./generate-qr-types/qr-type-1/Feedbackhome";
import LandinghomeQr from "./generate-qr-types/qr-type-1/Landinghome";
import Web1 from "./website-salider/web1";
import "./i18n";
import Web2 from "./website-salider/web2";
import Web3 from "./website-salider/web3";
import Web4 from "./website-salider/web4";
import AdminDashboard from "./Admin-dashbord/AdminDashboard";
import Formbook from "./Dashborad/Dashborad_Pages/Formbook";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

function App() {
const stripePromise = loadStripe('pk_live_51QFhoQLKhv2N3DtdL91TO2CW6tMi1GfQ6ZcWQoYCkLxkfQJ3B53o3W9e2qvN9tYEB55TqH16WYmVSgn48Rm8S3uY009xxnr1o0');


  return (
    <Provider store={store}>
      {" "}
      {/* Wrap your App with Provider */}
      <Router>
        <Routes>
          <Route path="/" exact element={<Landing />} />

          <Route path="/AdminDashboard/*" exact element={<AdminDashboard />} />


          <Route path="/Prices" exact element={<Prices />} />
          <Route path="/Faq" exact element={<Faq />} />
          <Route path="/TypesQRcode" exact element={<Resources1 />} />
          <Route path="/QRCodefor" exact element={<Resources2 />} />

          <Route path="/Businessz" element={<Businessz />} />

          {/* Done Coverzation by basit*/}
          <Route path="/Businessz1" element={<Businessz1 />} />

          <Route path="/Businessz2" element={<Businessz2 />} />

          <Route path="/Businessz3" element={<Businessz3 />} />

          <Route path="/Businessz4" element={<Businessz4 />} />
          <Route path="/Businessz5" element={<Businessz5 />} />
          <Route path="/Qrtype3" element={<Qrtype3 />} />



 







          <Route path="/Editing" exact element={<Editinginner />} />
          <Route path="/Dynamic" exact element={<Dynamicinner />} />
          <Route path="/Collaborating" exact element={<Collaborating />} />
          <Route path="/Varietyinner" exact element={<Varietyinner />} />
          <Route path="/Analytics" exact element={<Analytics />} />
          <Route path="/Facebook" exact element={<Facebook />} />
          <Route path="/Templates" exact element={<Templates />} />
          <Route path="/Static" exact element={<Static />} />
          <Route path="/Bulk" exact element={<Bulk />} />
          <Route path="/Custom" exact element={<Custom />} />
          <Route path="/Password" exact element={<Password />} />
          <Route path="/Tracking" exact element={<Tracking />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          
          <Route path="/Qrtypeone" exact element={<Qrtypeone />} />
















          <Route path="/QRCodeson" exact element={<Resources3 />} />
          <Route path="/Contactss" exact element={<ContactForm />} />
          <Route path="/Business" exact element={<Business />} />
          <Route path="/Business1" exact element={<Business1 />} />
          <Route path="/Business2" exact element={<Business2 />} />
          <Route path="/qrscan" element={<QRCodeScanner />} />
          <Route path="/Business3" exact element={<Business3 />} />
          <Route path="/Business4" exact element={<Business4 />} />
          <Route path="/Business6" exact element={<Business6 />} />
          <Route path="/Business7" exact element={<Business7 />} />
          <Route path="/Business8" exact element={<Business8 />} />
          <Route path="/Business9" exact element={<Business9 />} />
          <Route path="/Business10" exact element={<Business10 />} />
          <Route path="/Business11" exact element={<Business11 />} />
          <Route path="/Business12" exact element={<Business12 />} />
          <Route path="/Business13" exact element={<Business13 />} />
          <Route path="/Business14" exact element={<Business14 />} />
          <Route path="/Business15" exact element={<Business15 />} />
          <Route path="/Business16" exact element={<Business16 />} />
          <Route path="/Business17" exact element={<Business17 />} />
          <Route path="/Business18" exact element={<Business18 />} />
          <Route path="/Business19" exact element={<Business19 />} />
          <Route path="/Business20" exact element={<Business20 />} />
          <Route path="/Business21" exact element={<Business21 />} />
          <Route path="/Business22" exact element={<Business22 />} />
          <Route path="/Business23" exact element={<Business23 />} />
          <Route path="/Business24" exact element={<Business24 />} />
          <Route path="/Business25" exact element={<Business25 />} />
          <Route path="/Business26" exact element={<Business26 />} />
          <Route path="/Business27" exact element={<Business27 />} />
          <Route path="/Business28" exact element={<Business28 />} />
          <Route path="/Business29" exact element={<Business29 />} />
          <Route path="/Business30" exact element={<Business30 />} />
          <Route path="/Business31" exact element={<Business31 />} />
          <Route path="/Business32" exact element={<Business32 />} />
          <Route path="/Business33" exact element={<Business33 />} />
          <Route path="/Business34" exact element={<Business34 />} />
          <Route path="/Business35" exact element={<Business35 />} />














          <Route path="/Mp3home" exact element={<Mp3Qr />} />
          <Route path="/Couponhome" exact element={<CouponhomeQr />} />
          <Route path="/menuhome" exact element={<MenuhomeQr />} />
          <Route path="/businesshome" exact element={<BusinesshomeQr />} />
          <Route path="/playlisthome" exact element={<PlaylisthomeQr />} />
          <Route path="/eventhome" exact element={<EventhomeQr />} />
          <Route path="/feedbackhome" exact element={<FeedbackhomeQr />} />
          <Route path="/landinghome" exact element={<LandinghomeQr />} />

        

          {/* my-new-route-code-my-new-r-my-new-route-codeoute-code
my-new-route-code-my-new-r-my-new-route-codeoute-code
my-new-route-code-my-new-r-my-new-route-codeoute-code
my-new-route-code-my-new-r-my-new-route-codeoute-code */}

          <Route path="/Businessz6" element={<Businessz6 />} />
          <Route path="/Businessz7" element={<Businessz7 />} />
          <Route path="/Businessz8" element={<Businessz8 />} />
          <Route path="/Businessz9" element={<Businessz9 />} />
          <Route path="/Businessz10" element={<Businessz10 />} />
          <Route path="/Businessz11" element={<Businessz11 />} />
          <Route path="/Businessz12" element={<Businessz12 />} />
          <Route path="/Businessz13" element={<Businessz13 />} /> 
          <Route path="/Businessz14" element={<Businessz14 />} />



          <Route path="/Qrtype2" element={<Qrtypetwo />} />
          <Route path="/Qrtype4" element={<Qrtype4 />} />

          <Route path="/Qrtype9" element={<Qrtype9 />} />

          <Route path="/Qrtype5" element={<Qrtype5 />} />
          <Route path="/Qrtype10" element={<Qrtype10 />} />
          <Route path="/Businessz15" element={<Businessz15 />} />
          <Route path="/Businessz16" element={<Businessz16 />} />
          <Route path="/Businessz17" element={<Businessz17 />} />
          <Route path="/Businessz18" element={<Businessz18 />} />
          <Route path="/Businessz19" element={<Businessz19 />} />
          <Route path="/Businessz20" element={<Businessz20 />} />
          <Route path="/Businessz21" element={<Businessz21 />} />
          <Route path="/Businessz22" element={<Businessz22 />} />
          <Route path="/Businessz23" element={<Businessz23 />} />
          <Route path="/Businessz24" element={<Businessz24 />} />
          <Route path="/Businessz25" element={<Businessz25 />} />
          <Route path="/Businessz26" element={<Businessz26 />} />
          <Route path="/Businessz27" element={<Businessz27 />} />
          <Route path="/Businessz28" element={<Businessz28 />} />
          <Route path="/Businessz29" element={<Businessz29 />} />
          <Route path="/web1" element={<Web1 />} />


          

          {/* y-new-route-code-my-new-r-my-new-route-codeoute-code
my-new-route-code-my-new-r-my-new-route-codeoute-code
my-new-route-code-my-new-r-my-new-route-codeoute-code
my-new-route-code-my-new-r-my-new-route-codeoute-code */}

          <Route path="/web2" element={<Web2 />} />
          <Route path="/web3" element={<Web3 />} />
          <Route path="/web4" element={<Web4 />} />

          {/* <Route path="/Formbook" element={<Formbook />} />  */}

          <Route
          path="/Formbook"
          element={
            <Elements stripe={stripePromise}>
              <Formbook />
            </Elements>
          }
        />

          {/* salider-route-boby-salider-route-boby-salider-route-boby */}
          {/* salider-route-boby-salider-route-boby-salider-route-boby */}
          {/* salider-route-boby-salider-route-boby-salider-route-boby */}
          {/* salider-route-boby-salider-route-boby-salider-route-boby */}

          {/* salider-route-boby-salider-route-boby-salider-route-boby */}
          {/* salider-route-boby-salider-route-boby-salider-route-boby */}
          {/* salider-route-boby-salider-route-boby-salider-route-boby */}
          {/* salider-route-boby-salider-route-boby-salider-route-boby */}

          {/* All Dashboard related routes */}
          <Route path="/*" element={<Links />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
