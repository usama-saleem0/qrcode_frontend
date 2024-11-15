import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import j1 from '../img/Vector.svg';
import j2 from '../img/Bill1.png';
import j3 from '../img/Bill2.png';
import j4 from '../img/Bill3.png';
import j5 from '../img/Bill4.png';
import j6 from '../img/Bill5.png';
import j7 from '../img/Bill6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business17 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR codes on <span>Billboards</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={j1} alt=""/>
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
                <p>Billboard advertising can be more effective by simply adding a QRFY code. Make a difference with the competition and experience the benefits of their personalized designs.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={j2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={j3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={j4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={j5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={j6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={j7} alt=""/>
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
                    <h2>Benefits of using QR codes on billboards</h2>
                    <p>Marketing experts affirm that the billboard, widely used throughout the world, is not a medium that in itself generates profits, since its influence on increasing awareness of a brand, business or event cannot be calculated. Just because a passer-by sees the poster does not guarantee that they will purchase the product, service or ticket for the event that is advertised.</p>
                    <h3>So why continue investing in billboards?</h3>
                    <p>Because today there is a way to calculate the success of billboard advertising: QR codes. QR technology is an innovation that allows people to connect with all the essential information that is not found on the billboard, but online: a QR code turns the billboard from something static, that you only have to look at, into a renewed way of offering and selling products and services in a dynamic way. In addition, the QR code allows you to track the scans and be able to know the performance of the campaign in real time.</p>
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Track profits
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The return on investment (ROI) was very difficult to calculate in traditional signage, since there was no way to monitor customer behaviors after seeing a certain print or audiovisual advertisement. QR codes now make it possible to know how successful a specific billboard is and its effect on sales. All dynamic QR codes come with tracking functionality, which includes not only the number of scans, but also the location, time, device and operating system used in each one.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Improve locations
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The fact that a billboard is successful depends fundamentally on it being placed in the right place. Thanks to the metrics from our tracking function, you can place billboards in different cities and know which one was most successful, to optimize future marketing campaigns.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Integrate media
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                As we already said, in the billboards of the past their connection with a real and concrete action of the customer could not be measured. However, QR codes not only solve this problem, but also offer a large number of options to generate concrete actions in people: subscribe to a social network, buy a product, acquire a service or buy a ticket for a event, among others. Whatever action is prompted by the client, a QR code will always show you its results.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Custom designs
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The design of your billboard is essential to your success among the campaign's target audience. With our dynamic QR code generator you can choose optimized and diversified design options, leaving behind the monochrome of the beginnings of QR technology. Now you can customize your QR codes with different frames, adapt the colors to those of your brand, add a logo and a corresponding CTA (call to action) so that passersby don't miss it. If you want more inspiration on how to design your custom QR codes, click here.
                                </AccordionItemPanel>

                            </AccordionItem>

                             <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Avoid costly printing errors
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Making a mistake in printed materials involves a huge expense that we would not want to have to pay. Luckily, all of our dynamic QR codes allow you to edit the information contained in your QR code whenever you need to. Whether it is an error in the destination link or a change in the information or content you want to share, you can update them in a few seconds. You can even change the type of QR code and keep the original appearance of your code, without any additional expense or effort.
                                </AccordionItemPanel>

                            </AccordionItem>

                          

                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for Billboards?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Sign up to enter our QR code generator and select the type of QR code you want to use on your billboard. We recommend starting with a QR code from URL.</p>
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
                    <p class="jss241">Click “Download” and receive your QR code in .jpeg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QR code into your billboard design.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">QR Code Best Practices on <span class="blue">Billboards</span></h3>
            <p class="jss245">Billboards have professional graphic design and the message as fundamental elements. To do this, you must take into account what you want to convey, how to attract attention and what information about the brand or company the advertisement will include. Here are some tips for designing your billboard with QR codes.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Give a short and direct message</h4>
                <p class="jss249">Billboards must be readable from a distance and quickly, so use few words (less than ten) throughout the entire billboard. Writing more than this will probably result in it not being read. If you can't convey your message in a few words, perhaps you chose the wrong medium. If you can do it, the QR code will take passersby where you want them to go.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Play with contrasts</h4>
                <p class="jss249">A short and clear text, with bright and well-contrasted colors, will not go unnoticed. But if the design is overloaded and the colors don't match, people probably won't stand in the middle of the street trying to interpret it, or scan your code. Make sure the colors of your QR code match the rest of the design, that the contrast is optimal for scanning, and that the information on your billboard is legible and clear, from near and far.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Show don't tell</h4>
                <p class="jss249">A picture is worth a thousand words: convey your message with images, text should be limited to the essential minimum. Therefore, the images themselves must attract your target audience, clearly represent your brand and, fundamentally, be of high quality.</p>
            </li>

           

        </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">Discover the QR codes for Billboards in action</h3>
            <p class="jss253"> If you still can't visualize what QR codes would look like on your billboards, here are some examples of fictitious companies so you can start creating your own.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Gyms and wellness</h4>
                    <p class="jss257">It is common to see billboards advertising gyms and other types of wellness centers in all cities. The trendy gym 4x4 Training, decided to add a video QR code to its already traditional billboards, located in front of its branches, to promote its seasonal activities, such as trekking, outdoor swimming and aikido. The QR code redirected users to an informative video with images of the activities and a personalized button to the registration form.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Retailers</h4>
                    <p class="jss257">Shop Local recently launched its new virtual store. To promote the download of the application for mobile phones, it added a Apps QR code to the billboard of its stores, so that users can directly access, without having to write and search, the download link in the usual app stores. This way, Shop Local can also track the number of scans and downloads of the app.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Concerts</h4>
                    <p class="jss257">Large concerts usually use large billboards to promote them. The musical band The Storms decided to announce the last concert of the year, placing a Event QR code on their billboards, so that their fans can, by scanning it, buy their tickets with a simple click and schedule the event on your calendars.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Editors</h4>
                    <p class="jss257"> María Inés Cortés, one of the best-selling authors of Editorial Q, published her new science fiction novel last winter. Customers who scanned Evento's QR code on its billboards were able to access its presentation at literary cafes across the country, with a live reading by the writer, a musical show, and a book signing.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Real Estate Agencies</h4>
                    <p class="jss257"> The real estate agency Real Build has put new houses and apartments for sale in the central area of ​​the city. Customers can access information about each property by simply scanning a Image Gallery QR code placed on their billboards. Although the size of its billboards is limited, the QR code allows complete information to be provided, so that potential buyers can choose the home of their dreams.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Finance</h4>
                    <p class="jss257"> The financial advisory company Mifintech wanted to expand knowledge of its company among the general public and in neighboring countries. To do this, those in charge of the marketing sector added Link List QR codes to billboards in different local strategic points and in urban centers in neighboring countries, so that users who might be interested in their services, access the information provided by their social media accounts, as well as interact directly with the company and make inquiries.</p>
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
                                    Is billboard advertising still relevant?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Billboards remain an effective tool for reaching specific audiences, especially in high-traffic urban areas. Its physical presence guarantees constant exposure and can generate a memorable impact in the minds of consumers. Additionally, billboards offer broad visibility and reach, the ability to build brand awareness and convey impactful messages. Although in the past billboards had the drawback of difficulty in measuring ROI (return on investment), this has been overcome thanks to the inclusion of dynamic QR codes, so that today you can measure the results of your advertising campaigns. billboards. For this reason, they continue to be valuable today in comprehensive marketing strategies.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Is there a specific type of QR code I should use for billboards?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The answer is no: the type of QR Code will depend on the objectives of your campaign and the product or service you want to promote. For example, perhaps you want to promote a new product of your brand with a promotional video, in that case it would be most convenient to choose our Video QR code; If you would like to promote an event and offer guests or the general public information about date, time and location, access to a map or confirmation of attendance, the most useful thing will be to choose an Event QR code. For the full list of our dynamic QR code types, click here.
                                </AccordionItemPanel>

                            </AccordionItem>


                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Should I use QR codes on billboards?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                It would be a great advantage for your campaign: using QR codes on billboards will allow you to track and improve the results of your advertising efforts, accurately, to be able to calculate ROI (return on investment), something that was unthinkable in the past. This way you can adjust your campaigns to optimize their performance. You can also link users with specific actions by scanning your QR codes: participate in contests, enter your store, follow you on social networks and much more. Another benefit is that QR codes can integrate seamlessly with your outdoor advertising, as our code generator allows you to choose from a wide variety of colors, frames and styles and incorporate an image or logo at the center of the design.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How big should a QR code be on a billboard?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The correct size of the QR codes will depend on the presence or importance that you want to give it within your design. You may want to highlight your message more and decide to make it smaller. In that case, make sure it is large and visible enough so that people can find it and scan it.
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

export default Business17

