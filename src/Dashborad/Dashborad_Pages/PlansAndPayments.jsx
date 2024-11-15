// MyDoPlansAndPaymentsmains.js
import React, { useState } from 'react';
import QRcode from '../../img/QRCODEbardcode.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Toggle from '../../img/qrcodestoogle.png';
import Tick from '../../img/planstick.png';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Container } from 'react-bootstrap';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { baseurl } from '../../baseurl';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


import { Col, Modal, Row } from 'react-bootstrap';



const PlansAndPayments = () => {


    const stripe = useStripe();
    const elements = useElements();
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [showModal, setshowModal] = useState(false);
    const [userdata, setUser] = useState({});
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [buttonEnabled, setButtonEnabled] = useState(false);




    const handleSubmits = () => {

        console.log('yes')
        setshowModal(false);


    }


    const handleSelectChanges = (amount, month) => {
        const storedUser = localStorage.getItem("userData");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUser(user)
        }
        else {
            toast.error('Please Complete your Registration for Subscription')
            return;
        }


        localStorage.setItem('amount', amount);
        localStorage.setItem('month', month);

        setButtonEnabled(true);

        console.log('amount', amount)

        // navigate('/Formbook');

    };

    const handleBuyClick = () => {
        const storedUser = localStorage.getItem("userData");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            // Proceed with the logic for the user, like navigating or processing the purchase
            console.log('User:', user);
            navigate('/Formbook');
        } else {
            toast.error('Please Complete your Registration for Subscription');
        }
    };
    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!stripe || !elements) {
    //         return;
    //     }





    //     // const amount = localStorage.getItem('amount');
    //     // const month = localStorage.getItem('month');

    //     const amount = parseFloat(localStorage.getItem('amount'));

    //     const month = parseInt(localStorage.getItem('month'), 10);

    //     // const amount = 34.9


    //     console.log(amount, month)



    //     // Call the backend to create a payment intent
    //     const { clientSecret } = await fetch(`${baseurl}/createpaymentt`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             amount,
    //             month,
    //             userId: userdata.id,


    //         }) // Amount in cents ($10)
    //     }).then(res => res.json());

    //     const cardElement = elements.getElement(CardElement);

    //     // Confirm the card payment with Stripe
    //     const result = await stripe.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: cardElement,
    //         },
    //     });

    //     if (result.error) {
    //         setError(result.error.message);
    //         toast.error(result.error.message)

    //     } else {
    //         if (result.paymentIntent.status === 'succeeded') {
    //             toast.success("Payment is Successful")
    //             setshowModal(false);
    //             setPaymentSuccess(true);

    //             setTimeout(() => {
    //                 toast.success('Payment Successfully')
    //             }, 1000);


    //         }
    //     }
    // };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const amount = parseFloat(localStorage.getItem('amount'));
        const month = parseInt(localStorage.getItem('month'), 10);
        const cardElement = elements.getElement(CardElement);

        // Step 1: Validate the card details
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            // Show error if card details are invalid

            toast.error(error.message);
            return;
        }

        try {
            // Step 2: Card details are valid, proceed to create payment intent
            const { clientSecret } = await fetch(`${baseurl}/createpaymentt`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    amount,
                    month,
                    userId: userdata.id,
                }),
            }).then(res => res.json());

            // Step 3: Confirm the card payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
            });

            if (result.error) {
                setError(result.error.message);
                toast.error(result.error.message);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    toast.success("Payment is Successful");
                    setshowModal(false);
                    setPaymentSuccess(true);

                    setTimeout(() => {
                        toast.success('Payment Successfully');
                    }, 1000);
                }
            }
        } catch (error) {
            console.error("Error in payment process:", error);
            toast.error("There was an error processing your payment.");
        }
    };



    return (
        <>

            <ToastContainer />
            <Modal
                show={showModal}

                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered

            >
                <Modal.Body style={{ backgroundColor: 'white', border: '3px solid green', borderRadius: '20px', height: '300px', padding: '50px' }}>

                    <Row className='hello-row'>
                        <Col lg={12} className='text-center' style={{ paddingBottom: '30px' }}>

                            <h1>
                                Pay With Strip
                            </h1>
                        </Col>



                        <Col lg={12} className='hello-col-1'>
                            <form className='hello-form-1' onSubmit={handleSubmit}>
                                <CardElement />
                                <Col lg={12} className='text-center mt-4' >
                                    <button type="submit" disabled={!stripe}>Pay</button>

                                </Col>

                                <Col lg={12} className='text-center mt-4' >
                                    <button type="submit" onClick={handleSubmits}
                                        style={{ backgroundColor: "#ff2930" }}

                                    >Close</button>

                                </Col>
                            </form>
                            {error && <div>{error}</div>}
                            {paymentSuccess && <div>Payment Successful!</div>}
                        </Col>
                    </Row>


                </Modal.Body>
            </Modal>


            <div className="main-dashbord-contanir">
                <div className="MyTempletes">
                    <div className="MyTempleteshehader">
                        <h1>Plans & Payments</h1>
                    </div>

                    <div className="plansandpaymants--main">
                        <div className="plansandpaymants--main--text">
                            <h1>Subscribe the plan that best suits you</h1>
                            <div className="dropdown">
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-Second">
                                        Currency
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="plansandpaymants--main--text--sub">

                            <div className="plansandpaymants--main--text--left">
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p>Subscribe the plan that best suits you</p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p>Variety of QR types </p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p>Editing and management of QR codes </p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p> Unlimited scans</p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p>Variety of download formats </p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p>Unlimited users </p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p> Bulk create</p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p>Integrate Google and Facebook pixel </p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p>Premium Support </p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p>Cancel whenever you want </p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p>Custom Domain </p>
                                </div>
                                <div className="plansandpayments--text">
                                    <img src={Tick} alt="tick" />
                                    <p> Bulk create</p>
                                </div>
                            </div>


                            <div className="plansandpaymants--main--text--right">
                                <div className="plansandpaymants--main--text--right--1">
                                    <div className="plansandpaymants--main--text--left--content">

                                        <input type="radio" id="html" name="fav_language" value="HTML" onClick={() => handleSelectChanges(10, 1)} />
                                        <div className="right--text--billing">
                                            <h6>12 Months</h6>
                                            <p>Billed Annually</p>
                                        </div>
                                        <div className="right--text--best">
                                            <p>Best Value</p>
                                        </div>
                                    </div>


                                    <div className="plansandpaymants--main--text--right--content" >
                                        <div className="plansandpaymants--main--price">
                                            {/* <h3>USD 12,037.00</h3> */}
                                            <h3>USD 10</h3>
                                        </div>
                                        <p>/ month</p>
                                        <h5>Save 50% annually</h5>
                                    </div>
                                </div>

                                <div className="plansandpaymants--main--text--right--1">
                                    <div className="plansandpaymants--main--text--left--content">

                                        <input type="radio" id="html" name="fav_language" value="HTML" onClick={() => handleSelectChanges(15, 1)} />
                                        <div className="right--text--billing">
                                            <h6>6 Months</h6>
                                            <p>Billed Annually</p>
                                        </div>
                                    </div>


                                    <div className="plansandpaymants--main--text--right--content">
                                        <div className="plansandpaymants--main--price">
                                            {/* <h3>USD 14,037.00</h3> */}
                                            <h3>USD 15</h3>
                                        </div>
                                        <p>/ month</p>
                                        <h5>Save 50% annually</h5>
                                    </div>
                                </div>

                                <div className="plansandpaymants--main--text--right--1">
                                    <div className="plansandpaymants--main--text--left--content">

                                        <input type="radio" id="html" name="fav_language" value="HTML" onClick={() => handleSelectChanges(20, 1)} />
                                        <div className="right--text--billing">
                                            <h6>3 Month</h6>
                                            <p>Billed Annually</p>
                                        </div>

                                    </div>


                                    <div className="plansandpaymants--main--text--right--content">
                                        <div className="plansandpaymants--main--price">
                                            {/* <h3>USD 8,037.00</h3> */}
                                            <h3>USD 20</h3>
                                        </div>
                                        <p>/ month</p>
                                        <h5>Save 50% annually</h5>
                                    </div>
                                </div>

                                <div className="plansandpaymants--main--text--right--last">
                                    <h3>Value added tax not included in the amounts</h3>

                                    {/* <button>Buy</button> */}
                                    <button
                                        style={{ backgroundColor: buttonEnabled ? 'blue' : 'gray' }}
                                        onClick={handleBuyClick}
                                        disabled={!buttonEnabled}  // Disable the button until a selection is made
                                    >
                                        Buy
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="PlayandPayments--Faqs">
                        <h1>Question about
                            Plans</h1>


                        <div className="MyDomains-faq-box">
                            <Accordion allowZeroExpanded>
                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>

                                            Can I change my plan?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>
                                            The term “QR” stands for “quick response” and refers to instant access to the information
                                            contained in the Code. It is, in short, the evolution of the barcode, made up of patterns of
                                            black and white pixels. <span> Denso Wave</span>, a Japanese subsidiary of Toyota Denso, developed them
                                            in order to mark the components of their cars and thus speed up logistics in their production.
                                            Currently, it has gained great popularity, due to its versatility and accessibility, thanks to the
                                            functions of smart phones.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>


                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Do you offer refunds for umused subscription period?

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            You will have noticed that more and more companies choose to include QR, as a fundamental resource for the marketing and commercialization of their products and services. Its growing popularity is due to the multiplicity of uses that you can give it: to receive payments from your clients, share links to web pages, catalogs and price lists, receive comments on your products or services, invite the client to share images or videos , promote your business events and much more, with just a scan!
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>


                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>

                                            Do i have full access with any plan?

                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            Many devices already have a built-in QR code reader. In this case, all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen. In case this does not happen, go to settings to check that QR scanning is enabled. If you don't have the feature, just download and install a QR code reader from your app store.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Can I try for free?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            Many devices already have a built-in QR code reader. In this case, all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen. In case this does not happen, go to settings to check that QR scanning is enabled. If you don't have the feature, just download and install a QR code reader from your app store.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            What payment methods do you accept?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            Many devices already have a built-in QR code reader. In this case, all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen. In case this does not happen, go to settings to check that QR scanning is enabled. If you don't have the feature, just download and install a QR code reader from your app store.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem>
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How can i cancel my subscription?
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9" />
                                            </svg>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p>

                                            Many devices already have a built-in QR code reader. In this case, all you have to do is open the camera on your mobile phone and hold it over a code for a few seconds, until a notification appears on the screen. In case this does not happen, go to settings to check that QR scanning is enabled. If you don't have the feature, just download and install a QR code reader from your app store.
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>


                            </Accordion>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default PlansAndPayments;
