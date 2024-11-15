// MyDoPlansAndPaymentsmains.js
import React, { useState, useEffect } from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import 'react-toastify/dist/ReactToastify.css';
import Qrcode from '../../img/QRFY_logo.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import AllCards from '../../img/allcards.png';

import { useNavigate } from "react-router-dom";
import { baseurl } from '../../baseurl';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';



const Formbook = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const [userdata, setUser] = useState({});


    const navigate = useNavigate();
    const [selectedButton, setSelectedButton] = useState('Company');
    const [subscriptionMonths, setSubscriptionMonths] = useState(1);
    const [TotalAmount, setTotalAmount] = useState(1);
    const [showSelectedPlanForm, setShowSelectedPlanForm] = useState(false);




    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };




    const handlecancel = () => {
        navigate("/plans-and-payments");
    }

    const handleHome = () => {
        navigate("/NewQR");
    }

    const storedUser = JSON.parse(localStorage.getItem("userData"));
    const userId = storedUser ? storedUser.id : null;


    const amount = parseFloat(localStorage.getItem('amount')) || 0;


    const FetchPaymentDetails = async () => {

        const storedUser = JSON.parse(localStorage.getItem("userData"));
        const userId = storedUser ? storedUser.id : null;


        try {
            const response = await axios.get(`${baseurl}/FetchPaymentDetails/${userId}`);

            if (response.data.length === 0) {
                toast.info("Kindly update your profile");
                setShowDiv('formMain');
               
            } else {
                setShowSelectedPlanForm(true);
                setFormData(response.data);
                setShowDiv('formPart2'); // Show Selected--plan--form--part2 div
            }
        } catch (error) {
            console.error("Error fetching  data:", error)        
        }
    };



    useEffect(() => {

        if (amount === 10) {
            setSubscriptionMonths(12);
            setTotalAmount(12 * 10);
        } else if (amount === 15) {
            setSubscriptionMonths(6);
            setTotalAmount(6 * 15);
        } else if (amount === 20) {
            setSubscriptionMonths(3);
            setTotalAmount(3 * 20);
        } else {
            setSubscriptionMonths(1); // Default to 1 month if no match
        }


        FetchPaymentDetails()
    }, [userId]);



    const [formData, setFormData] = useState({
        userId: userId,

        company: '',
        country: '',
        taxId: '',
        name: '',
        surname: '',
        address: '',
        postalCode: '',
        city: '',
        email: '',
    });
    const [showDiv, setShowDiv] = useState('formMain');


    const handleEditClick = () => {
        setShowDiv('formMain'); // Show formMain and hide formPart2
    };



    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isFormComplete = () => {
        const missingFields = Object.entries(formData)
            .filter(([key, value]) => typeof value === 'string' ? value.trim() === '' : !value)
            .map(([key]) => key);

        return missingFields;
    };



    const handleNextClick = async (e) => {
        e.preventDefault();

        const missingFields = isFormComplete();

        if (missingFields.length === 0) {
            setShowSelectedPlanForm(true);


            try {
                const response = await axios.post(`${baseurl}/createPaymentsDetails`, formData);
                toast.success(response.data.message);
                setShowDiv('formPart2');
            } catch (error) {
                console.error('Error submitting form:', error);
                toast.error('Failed to submit payment details');
            }
        } else {
            // Join missing field names into a single string for the toast message
            toast.error(`Please complete the following fields: ${missingFields.join(', ')}`);
        }
    };



  


    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     if (!stripe || !elements) {
    //         return;
    //     }





    //     // const amount = localStorage.getItem('amount');
    //     // const month = localStorage.getItem('month');

    //     // const amount = parseFloat(localStorage.getItem('amount'));

    //     const month = parseInt(localStorage.getItem('month'), 10);

    //     // const amount = 34.9


    //     console.log(amount, month)



    //     // Call the backend to create a payment intent
    //     const { clientSecret } = await fetch(`${baseurl}/createpaymentt`, {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             TotalAmount,
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
    //         toast.error(result.error.message)

    //     } else {
    //         if (result.paymentIntent.status === 'succeeded') {
    //             toast.success("Payment is Successful")
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
                    TotalAmount,
                    month,
                    userId: userdata.id,
                }),
            }).then(res => res.json());

            // Step 3: Confirm the card payment
            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: paymentMethod.id,
            });

            if (result.error) {

                toast.error(result.error.message);
            } else {
                if (result.paymentIntent.status === 'succeeded') {
                    toast.success("Payment is Successful");
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
            <div className="wholepage--payment">
                <header className='PaymentHeader'>
                    <div className="mainheader">
                        <div className="logo" onClick={handleHome}>
                            <img src={Qrcode} alt="logo" />
                        </div>

                        <div className="accountdetails">
                            <h3>{storedUser?.username || "Faizan"}</h3>
                            <svg fill="none" height="25" viewBox="0 0 24 25" width="24" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill="rgb(0,0,0)" fill-rule="evenodd"><path d="m12 3.5271c-5.10863 0-9.25 4.14137-9.25 9.25 0 5.1086 4.14137 9.25 9.25 9.25 5.1086 0 9.25-4.1414 9.25-9.25 0-5.10863-4.1414-9.25-9.25-9.25zm-10.75 9.25c0-5.93706 4.81294-10.75 10.75-10.75 5.9371 0 10.75 4.81294 10.75 10.75 0 5.9371-4.8129 10.75-10.75 10.75-5.93706 0-10.75-4.8129-10.75-10.75z" /><path d="m11.9915 8.5271c-.9694 0-1.7535.78451-1.7535 1.75 0 .9655.7841 1.75 1.7535 1.75.9695 0 1.7536-.7845 1.7536-1.75 0-.96549-.7841-1.75-1.7536-1.75zm-3.25353 1.75c0-1.79593 1.45763-3.25 3.25353-3.25s3.2536 1.45407 3.2536 3.25c0 1.7959-1.4577 3.25-3.2536 3.25s-3.25353-1.4541-3.25353-3.25zm7.21053 8.0083c-2.0461-2.2201-5.8556-2.1379-7.90604.0096-.28604.2996-.76079.3106-1.06038.0246-.29959-.2861-.31058-.7608-.02454-1.0604 2.613-2.7368 7.42656-2.8846 10.09396.0096.2807.3046.2614.7791-.0432 1.0598s-.7791.2614-1.0598-.0432z" /></g></svg>
                        </div>
                    </div>
                </header>


                <div className="container">


                    <div className="payment--main">


                        <div className="payment--main--part1">

                            <div className="Selected--plan">

                                <h3>Selected plan</h3>

                                <div className="editplan">
                                    <h5>{subscriptionMonths} months </h5>


                                    <svg onClick={handlecancel} height="401pt" viewBox="0 -1 401.52289 401" width="401pt" xmlns="http://www.w3.org/2000/svg"><path d="m370.589844 250.972656c-5.523438 0-10 4.476563-10 10v88.789063c-.019532 16.5625-13.4375 29.984375-30 30h-280.589844c-16.5625-.015625-29.980469-13.4375-30-30v-260.589844c.019531-16.558594 13.4375-29.980469 30-30h88.789062c5.523438 0 10-4.476563 10-10 0-5.519531-4.476562-10-10-10h-88.789062c-27.601562.03125-49.96875 22.398437-50 50v260.59375c.03125 27.601563 22.398438 49.96875 50 50h280.589844c27.601562-.03125 49.96875-22.398437 50-50v-88.792969c0-5.523437-4.476563-10-10-10zm0 0" /><path d="m376.628906 13.441406c-17.574218-17.574218-46.066406-17.574218-63.640625 0l-178.40625 178.40625c-1.222656 1.222656-2.105469 2.738282-2.566406 4.402344l-23.460937 84.699219c-.964844 3.472656.015624 7.191406 2.5625 9.742187 2.550781 2.546875 6.269531 3.527344 9.742187 2.566406l84.699219-23.464843c1.664062-.460938 3.179687-1.34375 4.402344-2.566407l178.402343-178.410156c17.546875-17.585937 17.546875-46.054687 0-63.640625zm-220.257812 184.90625 146.011718-146.015625 47.089844 47.089844-146.015625 146.015625zm-9.40625 18.875 37.621094 37.625-52.039063 14.417969zm227.257812-142.546875-10.605468 10.605469-47.09375-47.09375 10.609374-10.605469c9.761719-9.761719 25.589844-9.761719 35.351563 0l11.738281 11.734375c9.746094 9.773438 9.746094 25.589844 0 35.359375zm0 0" /></svg>
                                </div>

                            </div>


                            <div className="Selected--plan--form">
                                <h3>Payment</h3>

                                {showDiv === 'formMain' && (
                                    <div className="Selected--plan--form--main">
                                        <div className="Selected--plan--form--part1" >
                                            <svg height="512" viewBox="0 0 480 480" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><g id="_02.number_1" data-name="02.number_1"><path d="m240 0c-132.55 0-240 107.45-240 240 0 132.55 107.45 240 240 240 132.55 0 240-107.45 240-240 0-132.55-107.45-240-240-240zm41.45 345h-48v-159.3l-37.2 10.2-11.7-41.1 54.9-19.8h42z" /></g></g></svg>
                                            <h4>Invoicing</h4>
                                        </div>




                                        <div className="Selected--plan--form--part2">
                                            <h5>Type</h5>
                                            <div className="Selected--plan--form--part2--buttons">
                                                <button
                                                    onClick={() => handleButtonClick('Company')}
                                                    style={{
                                                        border: selectedButton === 'Company' ? '2px solid blue' : '1px solid gray'
                                                    }}
                                                >
                                                    Company
                                                </button>
                                                <button
                                                    onClick={() => handleButtonClick('Private')}
                                                    style={{
                                                        border: selectedButton === 'Private' ? '2px solid blue' : '1px solid gray'
                                                    }}
                                                >
                                                    Private
                                                </button>
                                            </div>

                                            <div className="Selected--plan--form--part2--Company">
                                                <label htmlFor="company">Company</label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    placeholder="Company name"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="Selected--plan--form--part2--Company">
                                                <label htmlFor="country">Country *</label>
                                                <input
                                                    type="text"
                                                    name="country"
                                                    placeholder="Country name"
                                                    value={formData.country}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="Selected--plan--form--part2--Company">
                                                <label htmlFor="taxId">Tax ID</label>
                                                <input
                                                    type="number"
                                                    name="taxId"
                                                    placeholder="Tax ID"
                                                    value={formData.taxId}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="Selected--plan--form--part2--flex">
                                                <div className="Selected--plan--form--part2--Company">
                                                    <label htmlFor="name">Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="Selected--plan--form--part2--Company">
                                                    <label htmlFor="surname">Surname</label>
                                                    <input
                                                        type="text"
                                                        name="surname"
                                                        placeholder="Surname"
                                                        value={formData.surname}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="Selected--plan--form--part2--Company">
                                                <label htmlFor="address">Address</label>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    placeholder="Address"
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="Selected--plan--form--part2--flex">
                                                <div className="Selected--plan--form--part2--Company">
                                                    <label htmlFor="postalCode">Postal Code</label>
                                                    <input
                                                        type="text"
                                                        name="postalCode"
                                                        placeholder="Postal Code"
                                                        value={formData.postalCode}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="Selected--plan--form--part2--Company">
                                                    <label htmlFor="city">City</label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        placeholder="City"
                                                        value={formData.city}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="Selected--plan--form--part2--Company">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="text"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="summary--main--cancel">
                                                <button
                                                    onClick={handleNextClick}
                                                // disabled={!isFormComplete()}
                                                >
                                                    Next
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                )}



                                {showDiv === 'formPart2' && (
                                    <div className="Selected--plan--form--main">
                                        <div className="Selected--plan--form--part1" >
                                            <svg height="512" viewBox="0 0 480 480" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><g id="_02.number_1" data-name="02.number_1"><path d="m240 0c-132.55 0-240 107.45-240 240 0 132.55 107.45 240 240 240 132.55 0 240-107.45 240-240 0-132.55-107.45-240-240-240zm41.45 345h-48v-159.3l-37.2 10.2-11.7-41.1 54.9-19.8h42z" /></g></g></svg>
                                            <h4>Invoicing</h4>
                                        </div>

                                        <div className="Selected--plan--form--part2" style={{display: 'Flex', alignItems: 'Flex-Start'}}>

                                            <div className="Selected--plan--form--part2--Company">
                                               <h6>Company</h6>
                                                <p>{formData.company}</p>
                                                <p>{formData.country}</p>
                                                <p>{formData.taxId}</p>
                                                <p>{formData.name}</p>
                                                <p>{formData.surname}</p>
                                                <p>{formData.address}</p>
                                                <p>{formData.postalCode}</p>
                                                <p>{formData.city}</p>
                                                <p>{formData.email}</p>

                                            </div>

                                            <div className="summary--main--cancel" onClick={handleEditClick}>

                                            <svg height="32" viewBox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g id="Layer_2" data-name="Layer 2"><path d="m12 23.5a11.5 11.5 0 1 1 11.5-11.5 11.5128 11.5128 0 0 1 -11.5 11.5zm0-22a10.5 10.5 0 1 0 10.5 10.5 10.512 10.512 0 0 0 -10.5-10.5z"/></g><g id="Layer_3" data-name="Layer 3"><path d="m17.0952 8.2593-1.354-1.3545a1.3985 1.3985 0 0 0 -.9971-.4048 1.64 1.64 0 0 0 -1.1479.4873l-6.5262 6.5259a1.6376 1.6376 0 0 0 -.4844 1.0605l-.0825 1.437a1.3841 1.3841 0 0 0 1.3948 1.4893q.0455 0 .0909-.0029l1.4375-.0825a1.6376 1.6376 0 0 0 1.0605-.4844l6.5259-6.5264a1.64 1.64 0 0 0 .4873-1.1479 1.3965 1.3965 0 0 0 -.4048-.9966zm-7.3152 7.9638a.6494.6494 0 0 1 -.4111.1934l-1.438.0825a.3874.3874 0 0 1 -.43-.43l.0825-1.4375a.6494.6494 0 0 1 .1934-.4111l4.7845-4.7838 2.0024 2.0024zm6.5259-6.5263-1.0349 1.035-2.0025-2.0024 1.0352-1.0351a.6335.6335 0 0 1 .44-.1943.4028.4028 0 0 1 .29.1118l1.3545 1.355a.401.401 0 0 1 .1118.2891.6356.6356 0 0 1 -.1943.4409z"/></g></svg>
                                        </div>
                                        </div>

                                    </div>

                                )}
                            </div>




                            {showSelectedPlanForm && (

                                <div className="Selected--plan--form">

                                    <div className="Selected--plan--form--main">
                                        <div className="Selected--plan--form--part1">
                                            <svg id="Layer_1" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m256 6c-138.071 0-250 111.929-250 250s111.929 250 250 250 250-111.929 250-250-111.929-250-250-250zm92.738 377.871h-185.476v-15.18c100.338-118.344 114.158-137.469 114.158-158.879 0-13.522-8.909-22.59-21.682-22.59-14 0-22.535 9.442-22.535 24.454v4.824h-65.922v-4.613c0-50.423 33.05-83.753 87.651-83.753 52.9 0 89.423 32.524 89.423 79.343 0 31.381-11.61 55.471-64.947 117.254h69.33z" /></svg>

                                            <h4>Payment method</h4>
                                        </div>


                                        <div className="Selected--plan--form--part2">
                                            <h5> </h5>

                                            <div className="Selected--plan--form--part2--buttons" style={{
                                                paddingBottom: '40px',
                                            }} >
                                                <button
                                                    onClick={() => handleButtonClick('Company')}
                                                    style={{
                                                        border: selectedButton === 'Company' ? '2px solid blue' : '1px solid gray'
                                                    }}
                                                >Card</button>
                                                <button>Google Play</button>
                                            </div>


                                            <CardElement />

                                            <div className="summary--main--cancel" style={{
                                                paddingTop: '60px',
                                            }}  >

                                                <button onClick={handleSubmit}>
                                                    Pay
                                                </button>
                                            </div>

                                        </div>

                                    </div>
                                </div>

                            )}
                        </div>

                        <div className="payment--main--part2">
                            <div className="summary--main">


                                <div className="summary--main--part1">

                                    <div className="summary--main--box1">
                                        <h2>Summary</h2>
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


                                    <div className="summary--main--box1">
                                        <h3>{subscriptionMonths} months</h3>
                                        <h5>$ {amount}/month</h5>
                                    </div>


                                    <div className="summary--main--box1">
                                        <h2>Total</h2>
                                        <h2>$ {TotalAmount}</h2>

                                    </div>

                                </div>


                                <div className="summary--main--part2">


                                    <div className="summary--main--box1">
                                        <svg id="Layer_2" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2"><g id="Icon"><path id="_36" d="m362 0h-212c-82.84 0-150 67.16-150 150v212c0 82.84 67.16 150 150 150h212c82.84 0 150-67.16 150-150v-212c0-82.84-67.16-150-150-150zm-145.23 364.47-103.12-103.12 35.36-35.36 67.77 67.77 146.24-146.24 35.36 35.36-181.59 181.59z" data-name="36" /></g></svg>


                                        <h4>Your Selected Plan will be ready to  be used Immediately</h4>

                                    </div>



                                    <div className="summary--main--box1">
                                        <svg id="Layer_2" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2"><g id="Icon"><path id="_36" d="m362 0h-212c-82.84 0-150 67.16-150 150v212c0 82.84 67.16 150 150 150h212c82.84 0 150-67.16 150-150v-212c0-82.84-67.16-150-150-150zm-145.23 364.47-103.12-103.12 35.36-35.36 67.77 67.77 146.24-146.24 35.36 35.36-181.59 181.59z" data-name="36" /></g></svg>


                                        <h4>You will recieve an invoice by email with your billing details</h4>

                                    </div>



                                    <div className="summary--main--box1">
                                        <svg id="Layer_2" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 2"><g id="Icon"><path id="_36" d="m362 0h-212c-82.84 0-150 67.16-150 150v212c0 82.84 67.16 150 150 150h212c82.84 0 150-67.16 150-150v-212c0-82.84-67.16-150-150-150zm-145.23 364.47-103.12-103.12 35.36-35.36 67.77 67.77 146.24-146.24 35.36 35.36-181.59 181.59z" data-name="36" /></g></svg>


                                        <h4>You can change the plan at any time</h4>

                                    </div>
                                </div>

                                <div className="summary--main--part3">
                                    <div className="summary--main--box1">

                                        <svg id="Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m458.115 196.692h-279.237v-32.407c0-42.525 34.597-77.122 77.122-77.122 28.883 0 55.986 16.879 69.051 43.001 12.165 24.317 37.398 27.628 56.036 18.331 18.524-9.239 30.993-31.228 18.983-55.378-13.146-26.435-33.3-48.793-58.281-64.659-25.709-16.328-55.374-24.958-85.79-24.958-42.783 0-83.115 16.77-113.565 47.22s-47.22 70.782-47.22 113.565v32.407h-41.329c-6.903 0-12.5 5.597-12.5 12.5v286.808c0 6.903 5.597 12.5 12.5 12.5h404.23c6.903 0 12.5-5.597 12.5-12.5v-286.808c0-6.903-5.597-12.5-12.5-12.5zm-337.901-32.407c0-74.872 60.913-135.785 135.785-135.785 51.037 0 98.802 29.733 121.687 75.75 6.828 13.73-5.263 20.63-7.757 21.873-1.552.773-15.369 7.15-22.519-7.143-8.373-16.741-21.173-30.907-37.016-40.969-16.327-10.368-35.137-15.849-54.395-15.849-27.123 0-52.726 10.665-72.091 30.031-19.366 19.365-30.031 44.968-30.031 72.091v32.407h-33.664v-32.407zm325.401 319.215h-379.23v-261.808h379.23zm-202.115-104.792v34.389c0 6.903 5.597 12.5 12.5 12.5s12.5-5.597 12.5-12.5v-34.389c21.732-5.573 37.843-25.325 37.843-48.771 0-27.759-22.584-50.342-50.343-50.342s-50.342 22.583-50.342 50.342c0 23.445 16.11 43.197 37.842 48.771zm12.5-74.112c13.974 0 25.343 11.368 25.343 25.342s-11.369 25.343-25.343 25.343-25.342-11.369-25.342-25.343 11.368-25.342 25.342-25.342z" /></svg>

                                        <h4>SECURE PAYMENT</h4>



                                    </div>


                                    <h3>Accepted Payments methods</h3>
                                    <img src={AllCards} alt="" srcset="" />
                                </div>


                                <div className="summary--main--cancel">
                                    <button onClick={handlecancel}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Formbook;
