import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import o1 from '../img/Vector.svg';
import o2 from '../img/page71.png';
import o3 from '../img/page72.png';
import o4 from '../img/page73.png';
import o5 from '../img/page74.png';
import o6 from '../img/page75.png';
import o7 from '../img/page76.png';


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const Busines6 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR Codes on <span>Banners</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={o1} alt=""/>
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
                <p>Customize your banners by adding a QRFY code and have your outdoor advertising connect your customers to your website, platform, online promotions and more, with just a scan.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={o2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={o3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={o4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={o5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={o6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={o7} alt=""/>
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
                    <h2>Benefits of using QRFY codes in Banners</h2>
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Combine digital and traditional marketing
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The massive use of mobile devices makes it a priority for companies to redesign their marketing campaigns to include the mobile experience. By incorporating QR codes into your advertising campaigns for products, services or information, you no longer limit it only to people viewing the banners, but you also allow immediate access to your website or social network, the reservation of your service, the purchase of your product and much more, simplifying the connection between company and consumer, by linking the physical and virtual world, with just a scan. Your company gains a low-cost marketing strategy and the possibility of tracking the results of your campaign. Users, the possibility of improving their experience, by accessing information and other benefits, with just a scan. 
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Increase sales
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                A simple scan of the QR code on your banner and consumers will be able to access promotions, online offers and exclusive discounts. There are endless possibilities: use our Coupon QR code on your store's vinyl signs and Increase sales of your seasonal products: In addition, the QR code makes it easier for customers to save coupons and redeem them later. You can give your customers direct access to your virtual store or your home delivery service, with a Apps QR code on your banner. Or connect future attendees of your gym or sports club directly to the registration page, so they can start the activity, with a simple scan of our dynamic URL QR code. To do this, simply design an attractive QR code, which always includes a CTA that explains the advantages of scanning your Code.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Increase brand awareness
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                If your brand has already achieved some recognition and already has a well-defined and designed identity, banners can help you reach a larger audience, beyond the view that it is shown: you can go even further, with a QR code, that connects the physical information on the banner with your online information, helping you optimize your ads and increase traffic on your social networks and other virtual platforms.
To maintain a clientele linked to your products or services, it is necessary to generate a connection that transcends a one-time purchase: they talk to other people in your company and interact with you. To foster that connection, use our Link Listing QR code on your banners and continue the conversation with your customers online. Keep your brand at the top, generating interactions on networks and mentions, so that your audience continues talking about your products. If your company is still young, you can stand out at conventions, fairs or on the street, with eye-catching banners and a Business QR code with the necessary information so that people get to know you and know where and when they can find you .
The possibilities are endless. Your two-dimensional banner can contribute to the success of your brand, if you use the correct QR code.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Measurable advertising
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QRFY can help you learn more about your buyers and potential buyers, thanks to our Dynamic QR codes. These record when, where and with what device the scan was performed. Consulting this detailed information will help you measure the success of your advertising, so you can make the necessary adjustments during the current campaign or, in the next one, optimize your marketing strategy.
                                </AccordionItemPanel>

                            </AccordionItem>



                        </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR Code for your Banner?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Register to enter the QR code generator and select the QR code you want to incorporate into your food product. You can start with a QR from URL to get started.</p>
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
                    <p class="jss241">Click “Download” and receive your QRFY code in .jpeg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QR code into your packaging design.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">QR Code Best Practices on <span class="blue">Banners</span></h3>
            <p class="jss245">The QR code is no longer monochrome and now has a variety of design options that you can use to grab your audience's attention. Here is a list of tips to keep in mind if you want to use QR codes in your banner marketing strategy.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Add instructions</h4>
                <p class="jss249">Many times QR code users forget this essential detail for the success of their campaign: adding a brief written explanation of what the consumer will gain by scanning the code on your banner. When creating your code in QRFY, do not forget to encourage consumers not to miss it and scan it, so that your marketing campaign is not ignored: “join our networks”, “download our coupons”, “contact us ”. The number of scans will largely depend on this.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Frame it</h4>
                <p class="jss249">Access our customizable frames so that your QR code matches the design of your banner or adapts to the aesthetics of your brand or company. Once the QR code is generated, you can choose from a wide variety of customizable frames and colors, with different CTA messages to attract users' attention. Additionally, if you want to add other details, you have the option to choose a different icon, modify the shape, and add completely custom text.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Add a logo inside your QR code</h4>
                <p class="jss249">Once you have customized the frame, shape and color of your code, you can also choose to include your own logo in the center of the QR code. While you can choose one of the options offered by our QR code generator, you can also upload your own logo and even create your own CTA, such as "Visit our channel" or "Discover our offers." When including your logo, you don't have to worry about image size: our system automatically detects the best size, to ensure your logo remains scannable.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">4. Save your designs</h4>
                <p class="jss249">Sign up for QRFY and you'll be able to reuse your saved QR code designs without needing to manually recreate an old one. With QRFY you can save all your designs and reuse them in new marketing campaigns: if you want to promote a new seasonal collection, for a limited time or you have incorporated more services for your clients, but you want to maintain the aesthetics of your design, you can reuse a design saved, instead of starting another one from scratch.</p>
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
            <h3 class="jss252">Explore QR codes for Banners in Action</h3>
            <p class="jss253">If you still cannot imagine the scope and benefits of using a QR code on your banners, here we present some fictitious narratives, so that you can visualize the benefits that you can obtain in your business or company.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Business services</h4>
                    <p class="jss257">The fictitious consulting company Connect presented, at the last business fair, its new computer consultation application. In their brilliant presentation, they used a banner with our large-scale Apps QR code, which made it easy for attendees to access the new Connect app, without passing by their booth. The quality of the banner allowed attendees to scan the QR code remotely and download the application from any device, regardless of their operating system. Additionally, the page included a custom button, which linked directly to an explanatory video about the countless benefits of using their app. The effectiveness of the advertising campaign could be measured in an increase in the number of scans and downloads of the application.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Retailers</h4>
                    <p class="jss257">The brand Shop Local recently hired a new designer for its new fall-winter collection, unisex clothing line. To generate enthusiasm in its customers and attract new ones, without generating excessive spending, Shop Local printed a banner with our PDF QR code to place at the entrance of its stores. Thus, people were able to scan it and access an illustrated guide with photographs on how to implement the new unisex clothing line in their outfit. In addition, the page included a customizable button with the link to its virtual store, so that customers can buy at any time and from anywhere.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Software and game development</h4>
                    <p class="jss257">On the occasion of the upcoming launch of Space Heroes, the company carried out a banner campaign, which was located at strategic points in the city, capturing the attention of people who were traveling in the morning on their way to work or their study centers: The eye-catching design, accompanied by the image of memorable characters from the game saga, caused many passers-by to scan the large Video QR code located in the lower right corner of the banner, with a CTA message that encouraged people to scan it to get immediate access to the demo of the new game. The campaign was a success. Additionally, thanks to our dynamic QR code system, the company was able to analyze the number of people who scanned it, which locations received the most scans and in what time zone, so they could measure the achievements of their advertising efforts.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Tourism</h4>
                    <p class="jss257">Flamingo Beach began preparing for the high season, offering tourists kayak, surfboard and windsurf courses for beginners. They started the campaign a few months before; Since the head office is located in the center of the capital city, they thought it was a good opportunity to attract more people to their coastal city during the summer. To generate curiosity and enthusiasm for the town and its courses, they designed an eye-catching giant banner with images of its beaches and the key elements of the proposed activities and added our Coupon QR code with the CTA "Sign up for our courses and enjoy an unforgettable summer. When they scanned the QR code, it took them directly to a page with details of the courses and a personalized button to register with a promotional discount.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Educational institutions</h4>
                    <p class="jss257">The Escuela Superior de Arte SC School organized an end-of-year festival to present the final projects of the next class. Maintaining the traditional design of the institution's posters, they added our Event QR code to the festival promotion, to offer the necessary information to event attendees. With a simple scan, people were able to access the description of the event, its schedule of activities, the location information and even the link to Google Maps, to get to the event without problems. Additionally, to better plan catering, a custom RSVP button was added.</p>
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
                                    What is the benefit of using QR codes on banners?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Just as the web is a very extensive field whose possibilities multiply to unthinkable levels, the versatility of QR codes to connect with any platform or place on the network also multiplies its benefits. To begin with, they allow viewers to interact with the banner content quickly and, in a few moments, access additional information, offers, promotional videos or any type of content that you want to share and that can be uploaded to an internet site. Regarding the benefits for your company's marketing, we can highlight the fact that QR codes allow you to track the performance of your advertising campaign by tracking the number of scans and their location, among other data that will allow you to evaluate the success of your banner and make changes, if necessary. QR codes also allow you to include a greater amount of information in a limited space, avoiding saturating the banner design. They can also offer contact forms, subscriptions or application downloads, helping to increase the database of potential customers and boost the results of your advertising campaign.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How can I locate a QR code on a stand banner?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                To begin with, it is important that the QR code is in a clearly visible place on the banner and that it is accompanied by a call to action (CTA) that explains what visitors will get when they scan it. Whether it is a coupon, a link to social networks or a catalog, it is important that it attracts the attention of the target audience. Make sure they are visible, legible and scannable on a large, eye-catching banner with relevant information: QR codes not only show your web presence, they also connect customers with your products.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How big can the QR code be for a banner?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                There are no size limits for QR codes. In fact, all over the world, creative designs of gigantic proportions have seen the light of day. For example, in 2011 in Alberta, Canada, a QR code of approximately 29,000 square meters, which was visible from the air, was created as part of an advertising campaign to promote a technology company. In other cases, bushes or trees were used, as this Chinese village of Xilinshui did in 2017 as part of a tourism campaign. If you want to include a large QR Code on your banner, all you have to do is design it in our QR code generator and, once you have it, you can enlarge it to the size you want and go to a local printer to have it printed. Print with a banner printing machine.
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

export default Busines6