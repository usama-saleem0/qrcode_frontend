import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import cz1 from '../img/Vector.svg';
import cz2 from '../img/Badges1.png';
import cz3 from '../img/Badges2.png';
import cz4 from '../img/Badges3.png';
import cz5 from '../img/Badges5.png';
import cz6 from '../img/Badges4.png';
import cz7 from '../img/Badges6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business27 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR Codes in <span>Badges</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={cz1} alt=""/>
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
                <p>Admission control is essential in any type of event. Streamlining them is essential for large events, such as concerts, festivals and conferences. To avoid inconveniences, delays and crowding, nothing better than a QR code on each badge or ticket to your event.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cz2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cz3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={cz4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cz5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={cz6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={cz7} alt=""/>
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
                    <h2>Benefits of using QR codes on Badges</h2>
                    <p> QR codes allow you to add much more information to ID badges at events. Its storage capacity exceeds that of old barcodes and is even more resistant to possible damage that would make it difficult to read. Their use is diverse, they can link to any type of information that your company needs and adapt to the designs of your most creative identification cards or badges.</p>
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Customize them for each design
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                With our dynamic QR code generator you can design each code to perfectly match the design of your ID cards: choose from the wide variety of custom frames and borders, add a pre-designed CTA or write your own to attract more users , select colors that match your event or brand, add a logo or image in the center and adjust the sizebadges so that your personalized badges are scannable from any type of device. In short, a functional, effective design in line with your brand.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Additional Marketing
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                A long time ago, event organizing companies began using QR codes on their tickets to speed up entry to recitals, sports competitions and other events. In the same way it works with identification badges, both at events and in companies and institutions, to control the entry of their staff members or external service providers. But you can also use your employees' badges to add an additional marketing tool: with a dynamic URL QR code, you can redirect customers from the seller's badges to your online store, so they can access to the list of products for sale; or with a Link Listing QR code increase the number of followers on your accounts; You can even promote the download of an application with a Apps QR code, so that your customers have access to exclusive services and benefits when downloading it. All this easily and instantly, with just one scan.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Monitoring and optimization
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                If you want to know if your ad was effective, our dynamic QR codes are the solution. QR codes allow you to access real-time tracking data, metrics such as location and scan time, device and operating system used, in addition to counting scans. Monitoring this data lets you know how well your QR code is performing, so you can make any necessary adjustments in future campaigns. This is possible because dynamic QR codes can also be edited and updated at any time without changing the appearance of your original QR code. You can fix any errors and even change the type of QR code (for example, from a Coupon QR code to a Link Listing QR code), without having to generate another code new from scratch.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Expand your information
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                On our site you can find a wide variety of QR codes developed for each type of media and adapted to the information you need to share: from videos to podcasts, from applications to image galleries, in any printed or digital media, whether networks or brochures. traditional; Whatever you want to share with your customers, QR codes are the effective way to do it.
                                </AccordionItemPanel>

                            </AccordionItem>

                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for your Badges?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Register to access our QR code generator and select the type of QR code you want to add to your identification cards. You can start with a QR code from URL.</p>
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
                    <p class="jss241">Next, select colors that match the aesthetic of your badge.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">5</span>
                    <p class="jss241">Click “Download” and receive your QR code in .jpeg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QR code into the design of your badges.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">QR Code Best Practices for <span class="blue">Badges</span></h3>
            <p class="jss245">We present some tips that you should keep in mind when starting to design a QR code to incorporate into your personalized identification cards.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Choose the right size</h4>
                <p class="jss249">When creating your QR code, you must keep in mind that the minimum recommended size, both printed and digital, is 2 x 2 centimeters. It is not recommended to make it smaller, but you can always make it larger: if you are worried that the code size on your badges is too small, it is better to increase it so that it is always readable and users can scan it without difficulty.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Combine your design</h4>
                <p class="jss249">Our QR code generator offers complete customization functions so that, with all the options available, you can adapt it to the aesthetics of your company or brand: with a wide variety of frames and borders, CTA messages, customizable colors and the option to add an icon or logo, your QR code will look much better, reflecting a professional brand style.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Add a CTA</h4>
                <p class="jss249">It is essential to optimize the use of QR codes to always use a call to action (CTA) because it clarifies what the user will gain by scanning your code. This is essential for any QR code marketing campaign.</p>
            </li>

            </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">Discover QR codes for Badges in action</h3>
            <p class="jss253">To inspire you when creating your own badges with QR codes, for your event or company, here we present some examples of fictional narratives so that you can activate your imagination and create your own campaign.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Restaurants</h4>
                    <p class="jss257">The fast food chain Los Burgueses opened a new location in a tourist area and decided to organize an opening event to publicize it. Many businesses and companies in the area contributed to publicizing the event, in exchange for reserving places for their guests. Those who collaborated with the dissemination were instructed to complete their information in an online form, to obtain a badge with a vCard Plus QR code, which allowed them free access to the event and a free Deluxe combo.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Musicians and artists</h4>
                    <p class="jss257">The Storms offered a special VIP pass at their last concert so fans could meet the band. People who purchased the “meet & greet” pass received a personalized identification card that also included a CouponQR code, which gave them access to videos and photographs taken behind the scenes, so they can Keep them as a memory of that unique experience.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Event management</h4>
                    <p class="jss257">The event organizing company Always Together does not miss the opportunity, in each event of its brand, to promote its products and services. At the last dental congress, organized by the company, they included our dynamic URL QR codeon the attendees' badges, so that they can have access to the company's information, the services provided and , through a personalized button, to a form to request quotes. In addition, Always Together waiters always carry a personalized badge, with their name, the name of the company and an Image Gallery QR code, so that guests can later access the images on that particular event. An effective marketing strategy that attracted many potential clients.</p>
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
                                    Why are QR codes better than barcodes?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QR codes are better than barcodes in several ways. First, QR codes can store much more information than traditional barcodes, making them more versatile for a variety of applications. In addition, QR codes are easier to scan with mobile devices, since they do not require a specific scanner and can be read from different angles. They also allow links to online content, such as websites, videos or apps, making them ideal for marketing and promotion.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    When should you use static QR codes?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Static QR codes are appropriate when the information they contain does not need to be updated regularly and when scans do not need to be tracked. Additionally, it is important to keep in mind that once the QR code is created, the information contained in it cannot be modified. Therefore, they are ideal for linking permanent information such as main websites, standard contact details or fixed instructions.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What information should I link to QR codes on badges?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The information linked to the QR codes on the badges may vary depending on the type of business, service or event attended. For example, for conferences or business networking events, a vCard Plus QR may be the best option, allowing contact information and professional details to be shared efficiently. For conventions, a Link Listing QR with all relevant social profiles can be useful to promote online interaction and social media participation for the event. It is important to adapt the information linked to the specific interests and needs of those who will scan the QR codes on the badges, so that they provide maximum value and utility for users.
                                </AccordionItemPanel>

                            </AccordionItem>

                             
                            </Accordion>




                    </div>
                    <div className="main-know-box">


                        <div className="know-box">
                            <h2>Have more questions?</h2>
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

export default Business27

