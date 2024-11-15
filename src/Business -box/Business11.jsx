import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import i1 from '../img/Vector.svg';
import i2 from '../img/page11.png';
import i3 from '../img/page12.png';
import i4 from '../img/page13.png';
import i5 from '../img/page14.png';
import i6 from '../img/page15.png';
import i7 from '../img/page1.5.png';


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business11 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR codes in <span>Stationery</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={i1} alt=""/>
                </span>

            </button>
        </div>
    </div>



    <div class="busines-inner-1">
        <div class="qr-cont">
            <div class="jss160">
                <div class="jss161">
                    <div class="jss164">
                        <a href="#benefit" class="btnnn-1">Benefits</a>
                        <a href="#best-practices">Best practices</a>
                        <a href="#use-cases">Use Cases</a>
                        <a href="#faq">FAQ</a>
                    </div>
                </div>
                <p>Add a QRFY code to your resume or business cards and you can showcase your best work with just a scan or connect your clients to your website and social networks.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={i2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={i3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={i4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={i5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={i6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={i7} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>
                </div>
                </div>
                </div>

            <section className='hello-my-faq-code' id='benefit'>
            <div class="jss251">


                <div className="benefitsofusing">
                    <h2>Benefits of using QR codes in Stationery</h2>
                    <p>Your printed material can further captivate your audience with a QR code, connecting them to the online world. This is an opportunity to enhance the reach of your traditional stationery store and add a little magic to your marketing campaign.</p>
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How much information can you include in a QR code?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Many times, the space of traditional stationery becomes insufficient to include all the information we want. The QR code is the solution: each QR code can store up to 7089 digits or 4296 characters, allowing you to encode characters, numbers, entire phrases and even Internet addresses. The more data is added, the more complex its structure becomes. 
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Personal use
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                With a QRFY code you can make your letters and invitations more informative, original and entertaining. Add a cheerful touch to your greeting cards by printing a Video QR code with a music video or a recorded surprise message. Or you can add a Event QR code to your birthday invitations to provide your guests with all the information about the event and the possibility of scheduling it on the calendars of their devices. You can also offer your guests, along with the invitation, a Image Gallery QR Code, in which you can upload a photo album to show your memories after the party and involve the guests.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Commercial use
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Traditional stationery combined with QR code technology offers a creative digital advantage, connecting print and digital. A QR code in your marketing campaign, used correctly, will allow you to obtain a broader audience by generating a direct link between potential customers and your company, by giving them direct access to your social networks, email or any communication channel. communication you want. You can enhance information about your business with engaging images or other interactive experiences, such as games, sweepstakes, and discount coupons. QR codes are thus often the engine of your advertising campaign, establishing a connection between your company or business, customers and your online platforms.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    A renewed stationery store
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Office supplies, envelopes, letterhead, cards, invitations, etc., are small spaces that make it difficult to write all the desired information and maintain legibility. Imagine having to write the company name, phone number and website on the shaft of a business pen… It's not so difficult anymore! With our vCard QR code you can offer potential customers your contact information with just one scan. You can even treat your customers to Christmas discounts by including a Coupon QR code to your postcard. When sending marketing correspondence, always be sure to define your audience and add a call to action (CTA), to guide customers to your online platforms. Always remember to follow up to analyze the traffic of your website, social media channels or online store and verify the effectiveness of your QR code.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Measure your campaign
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                With our dynamic QR code tracking service, you can track where and how many people scan your codes and export that data in reports - so you'll have all the statistics you need in one place and you can save time and resources by making the necessary adjustments to your campaign, if you did not obtain the expected results, so that your message reaches the right people.
                                </AccordionItemPanel>

                            </AccordionItem>


                            



                        </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for Stationery?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Sign up to access our QR code generator and select the type of QR code you want to add to your stationery item. You can start with a QR code URL.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">2</span>
                    <p class="jss241">Enter your website link and your QR code will be generated automatically.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">3</span>
                    <p class="jss241">Customize the design of your QR code: add a frame and a “Scan me” legend.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">4</span>
                    <p class="jss241">Then, select colors that combine the identity of your company or business.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">5</span>
                    <p class="jss241">Click “Download” and receive your QR code in .jpg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QR code into your stationery design.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">Best practices in QR codes for <span class="blue">Stationery</span></h3>
            <p class="jss245">Gone are the boring, monochromatic QR codes. Now you can design them to fit your brand or your own identity, with a wide variety of creative tools. Here we offer you a guide with some of the functions at your disposal.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Add instructions</h4>
                <p class="jss249">Many times QR code users forget an essential detail for the success of their campaign: adding a brief written explanation of what the consumer will gain by scanning the code. When creating your code in QRFY, don't forget to incentivize consumers not to miss it and scan it, so that your marketing campaign is not ignored: “Join our networks”, “Watch the trailer”, “Get more information ”. The number of scans will largely depend on this.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Frame it</h4>
                <p class="jss249">Access our customizable frames so that your QR code matches the design of your clothing items, or adapts to the brand's aesthetics. Once the QR code is generated, you can choose from a wide variety of customizable frames and colors, with different CTA messages to attract consumers' attention. Additionally, if you want to add other details, you have the option to choose a different icon, modify the shape, and add completely custom text.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Add a logo inside your QR code</h4>
                <p class="jss249">Once you have customized the frame, shape and color of your code, you can also choose to include your own logo in the center of your QR code. While you can opt for one of the options offered by our QR code generator, you can also upload your own logo and even create your own CTA, such as "See our new collection" or "Follow us on Instagram." When including your logo, you don't have to worry about image size: our system automatically detects the best size, to ensure your logo remains scannable.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">4. Save your designs</h4>
                <p class="jss249">Sign up for QRFY and you'll be able to reuse your saved QR code designs without needing to manually recreate an old one. With QRFY you can save all your designs and reuse them in new marketing campaigns: if you want to promote a new drink or a new flavor for a limited time, but want to maintain the aesthetics of your design, you can reuse a saved design, instead of starting another one from scratch. zero.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">5. Customizable URL</h4>
                <p class="jss249">By default, each dynamic QR code gets a random short URL that redirects to your page when the QR code is scanned. The short URL can be customized to your preferences, such as including your company name, to help differentiate you from the competition and build more trust among users.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">6. Test before printing</h4>
                <p class="jss249">When printing your QR code, you must keep in mind that the minimum recommended print size is 2 x 2 centimeters. It is not recommended to make it smaller, but you can always make it larger, so that your QR code is always readable and can be scanned without difficulty. To ensure that all users can access your QR code, you should test with various smartphone models and apps.</p>
            </li>

        </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">QR Codes for Stationery in action</h3>
            <p class="jss253"> QR codes are an innovative and creative way to renew your marketing campaigns. In this section we show you some examples of fictitious brands to stimulate your creativity and learn about some of the multiple possibilities that QR codes offer in stationery.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Finance and insurance companies</h4>
                    <p class="jss257">The financial advisors at Mifintech were looking for an efficient way to connect their clients with their digital information and commercial online platforms. To do this, they updated their advertising letters with a vCard Plus QR code printed in the header. By making it easier for potential clients to save their contact information on their mobile devices, they received more calls and emails, with requests for advice and quotes, in addition to increasing traffic on their social networks.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Real Estate Agencies</h4>
                    <p class="jss257">Many people are looking for a new home, but they don't know how many possibilities there are in the real estate market. The agency Real Build, by keeping track of the personal information of its clients, sends by postal mail a greeting card on their birthdays, in which it adds a PDF QR code that It links to a digital catalog of current properties, with their respective images, giving the client access to everything the agency can offer with a single scan.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Health and doctors</h4>
                    <p class="jss257">Health Clinic was looking for a solution to the repeated questions from its patients about all the specialties offered by its clinic. With our Video QR code printed on notebooks located in the waiting room, you provided instant access to not just one, but an entire playlist of educational videos on procedures and services available to your patients. Many people took it home, being able to answer their questions and, if not, write down those that the videos did not answer.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Cities and Culture</h4>
                    <p class="jss257">Wanting to promote the city's anniversary celebrations, North City decided to send letters to residents announcing upcoming events. To do this, we included in the letters our Events QR code, where neighbors could access all the information about the proposed activities: the musical band contest, the retro party, the local craftsman fair, the drive-in cinema, the independent theater day... People, with just a scan, were able to save times, date and location of their favorite event, directly on their favorite mobile device so as not to miss it and even schedule it on their digital calendar.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Repairs and home maintenance</h4>
                    <p class="jss257">Repair company Builder Construction wanted to promote its new payments app to its customers. But to do this I had to know how to encourage them correctly and how to make their download accessible to everyone. That's why they printed our Apps QR code on their invoices, adding this option to the list of payment methods. Available on Apple, Google or Amazon download apps, customers were able to download the app without any issues.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Event management</h4>
                    <p class="jss257">Always Together wanted to implement a new system to receive comments and ratings on the services provided at the events they organize, to measure the degree of customer satisfaction in different aspects such as catering, music and service of young men. With a Feedback QR Code on their “Thank you for attending” cards, attendees were able to access a form where they could rate each of the services provided with stars and a space to express their opinions about the event.</p>
                </li>

                
                </ul>

                <p class="jss257">If you need more ideas to know how to use our QRFY codes to promote your company, visit our page How to use QRFY for your Business.</p>
            
        </div>
    </div>



            <section className='hello-my-faq-code' id='faq'>
            <div class="jss251">
                <div className="your-faq-box">
                    <div className="Everything-faq-box more-faq">
<h3>FAQ</h3>
                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can QR codes improve my company's stationery?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Clear! Think of all the information you could provide to your clients without cluttering your stationery with text. You can print them on envelopes or letters, letterheads, recipe books, checkbooks, invoices and even pens, to expand the marketing strategies of your business, company, educational institution or medical office.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can QR codes help me write business letters?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                While QR codes can't help you write better, they can help optimize the message of your marketing letter and redirect traffic to your online channels. Our codes allow you to integrate your traditional marketing with online marketing, so that your audience will obtain a greater amount of information, without generating extra costs for paper and printing. In addition, the Video QR code and the MP3 QR code can make your commercial letter shorter and more original, since you yourself can record the message for your clients, tell them news or present your latest offers and promotions.
                                </AccordionItemPanel>

                            </AccordionItem>

                            

                            <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Do I need to add a QR code to my stationery?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Although it is not mandatory, think about all the possibilities that open up when you renew your traditional stationery! Most companies have already adopted QR codes as part of their marketing strategies and a high percentage of the world's population is connected 24/7 to the internet, so why not take advantage of this great resource? A QR code on your stationery will allow you to reach new customers and optimize your virtual channels, offer benefits on their next purchase, invite them to events and even receive their comments, to be able to improve your products and services or improve service in your business.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How to include a QR code in my stationery design?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Every successful advertising campaign takes aesthetic balance into account when designing marketing materials. Therefore, it is a great benefit that QR codes are versatile in terms of design: dynamic QR codes can adapt to the aesthetics of your brand or company, since they allow you to choose from a wide variety of color options, shapes, frames, borders, CTAs, and even allow you to add a custom logo in the center.
                                </AccordionItemPanel>

                            </AccordionItem>

                            


                            



                        </Accordion>
                    </div>
                    <div className="main-know-box">


                        <div className="know-box">
                            <h2>Have more questions?    </h2>
                            <p>For more information visit our help center.
                            </p>
                           
                            <button>Visit us</button>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <Footer />

        </>
    )
}

export default Business11

