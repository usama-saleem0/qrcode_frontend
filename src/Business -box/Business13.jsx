import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import s1 from '../img/Vector.svg';
import s2 from '../img/tickets1.png';
import s3 from '../img/tickets2.png';
import s4 from '../img/tickets3.png';
import s5 from '../img/tickets4.png';
import s6 from '../img/tickets5.png';
import s7 from '../img/tickets6.png';


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business13 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR codes on <span>Tickets</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={s1} alt=""/>
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
                <p>QRFY will allow you to expand the functionality of your tickets, offering your customers additional content: access to your website, social networks, future event schedules, promotions and discounts, with a simple scan. A QR code on your tickets can improve interaction on your networks, attract more followers, and offer benefits to keep your customers coming back for more.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={s2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={s3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={s4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={s5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={s6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={s7} alt=""/>
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
                    <h2>Benefits of using QR codes on your Tickets</h2>
                    {/* <p>Table tents or tabletop signs are marketing materials created from easel-folded cardstock or plastic, which are often intended to make additional sales in your culinary or retail business, like a small tabletop version of advertising signs. When done correctly, they can increase brand or product awareness, promote exclusive offers, and allow easy access to your products and services, among many other possibilities.
                    Capable of storing up to 7,089 digits or 4,296 characters, the QR code, which means “Quick Response”, has become a fundamental element in digital marketing, thanks to the massive use of smartphones in recent years. By designing strategies to improve user experiences, they have gained great popularity, in addition to the fact that they are easily accessible to everyone and their large data capacity. Let's look at some ways QR codes can help you improve your business's table tents.</p> */}
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    The importance of mobile marketing.
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Mobile marketing today is an essential tool to reach the largest number of users possible: the marketing strategy focused on digital and the diversity of media and channels, aims to reach a certain audience from any mobile device. , which means redirecting users of smartphones, tablets or any other mobile device to websites, email, social networks, applications or any content in the cloud.
With the arrival of 5G and the constant increase in the use of smartphones, people's daily lives are increasingly trending towards forms of digital interaction and the use of mobile phones in different experiences that previously required analog means of writing and communication. In this way, it also changes the way people connect with a company or product. Therefore, it is important to define and develop a good digital marketing strategy in your brand campaign. As a tip, it is important that you take into account the audience to which your product or service is directed and that you optimize your online content based on this. Additionally, you need to make sure your CTAs are true calls to action for mobile users. 
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    The digital benefits of the QR code
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                With more and more people carrying smartphones, using them regularly and expecting more convenience, transparency and environmental friendliness from brands, it's no surprise that QR codes are building a bridge to the future, allowing direct access from outside online to the world to virtual platforms, by involving your customers with your products, in a sustainable way and with always updated information about your company and event.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Renew your tickets with QR codes
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                A QR code on your event tickets can help attendees speed up registration and entry, as many organizing companies such as Eventbrite or Ticketmaster have done. But that's not the only function that the QR code on your tickets can have! A QR code can connect your concert attendees with your social networks, in a simple scan, without having to write or search for yourself with a magnifying glass. You can also offer them a discount for the next event as a gift by adding a coupon QR code on your party tickets, to reward your loyal customers and attract new customers. In addition, thanks to our dynamic URL QR code printed on the tickets, you can link attendees to your song playlist, your social networks or your website, to learn more about your company or band and find out about upcoming events.
A QR code can also give the public the chance to comment on the event, with a Feedback QR code, or give them a preview of your next music album with our MP3 QR code. These and many more options make QR codes a wonderful opportunity to optimize your mobile marketing campaign.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Monitor the results of your campaign
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Thanks to the tracking function of our dynamic URLQR codes, you will be able to monitor the statistics of your QR code. This is essential for making adjustments and optimizing your marketing campaign, seeing what worked and what didn't. Our tracking feature allows you to collect the frequency of scans, as well as detailed information about the location, date, time, device, and operating system used for each scan. With this real-time data, you will always be updated on the performance of your QR code.
                                </AccordionItemPanel>

                            </AccordionItem>

                            


                            



                        </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for your Tickets?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Register to access our QR code generator and select the type of QR code you want to add to your tickets. We recommend starting with a QR code from URL.</p>
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
                    <p class="jss241">Then, select colors that combine the identity of your company, business or musical group.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">5</span>
                    <p class="jss241">Click “Download” and receive your QR code in .jpeg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QR code into your ticket design.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">QR Code Best Practices on <span class="blue">Tickets</span></h3>
            <p class="jss245">Today, QR codes are no longer restricted to the boring monochrome initial design. Now you can design it to your liking with a variety of creative tools, including to fit the aesthetic of your brand or campaign. Here we present some of the functions at your disposal.</p>
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
            <h3 class="jss252">Explore QR codes for Tickets in Action</h3>
            <p class="jss253"> If you want to be inspired to use QR Codes in a creative and innovative way, here are some examples of fictitious brands, which actively use QR Codes on tickets, so you can visualize how QR technology will improve the marketing of your events.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Retailers</h4>
                    <p class="jss257">For the launch of its latest spring-summer collection, Shop Local organized a fashion show with musical performances, in order to show the new pieces and attract new customers to its stores, both physical and virtual. To do this, they added a dynamic URL QR code to each ticket provided for the event, with the link to their website, where attendees could access the latest catalogue, virtual store and locations and opening hours of their physical stores.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Photographers and videographers</h4>
                    <p class="jss257">The company JHP Photographer was invited to participate in a photographers' convention in a neighboring city. To promote their services, they organized a raffle for a photo session among all attendees, who received a ticket when passing by their stand. Each ticket was printed with our Business QR code, which ensured that all participants carried contact information, their store address, and opening hours.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Musicians and artists</h4>
                    <p class="jss257">During their last tour, the band The Storms decided to give their concert attendees the first song from their next album exclusively: for this they included an MP3 QR code on the ticket printing, generating enthusiasm in his fans for his new release.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Software and game developers</h4>
                    <p class="jss257">Space Heroes organizes an annual tournament of its classic games, which hundreds of fans attend year after year. For the last event, they printed a Apps QR code on the tickets to give attendees the demo of their new mobile game, available in all downloadable apps. In addition, they included in the demo a personalized button that linked to the download of the full game and a video tutorial to learn about the game, its mechanics and some tricks.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Cities and Cultures</h4>
                    <p class="jss257">To promote their local events, North City made the decision to add a EventQR code to tickets. This dynamic QR code allowed them to update information periodically, so that after each event ended, attendees could access information about future activities, whether it was a chess championship, a music festival, or an informational meeting.</p>
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
                                    Will a QR code from a screenshot work?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Of course. As long as the QR code is of good quality and readable, it will work in various formats, whether printed or as a screenshot, in a photocopy or on a computer or mobile screen. Giant QR codes have even been made, which can be seen from the air, with different materials. The key is in the design and the high contrast between the points that make it up and the background, to guarantee its accessibility when scanning it.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What do companies use QR codes on tickets for?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Large companies such as Ticketmaster or Eventbrite, which offer ticketing and event management services in several countries, actively promote the use of QR codes on event tickets. Many cinemas in different parts of the world also use QR codes: when a spectator buys their ticket online, they receive an email confirmation with their ticket in the form of a QR code to present when entering the theater on the day of the performance. But streamlining entry to events isn't the only goal of QR codes on tickets: They can also be linked to additional information about the event (times, location, instructions, artist details, and more); exclusive content, such as music, promotional videos or interviews; special promotions, such as discounts on products related to the event, among other benefits. This is just one of the many ways QR codes can improve the experience of viewers or guests at your event.
                                </AccordionItemPanel>

                            </AccordionItem>


                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Are there use cases for QR codes that have improved the user experience?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Of course! The Museum of Modern Art (New York), for example, has used QR codes next to works of art since 2010 to provide visitors with detailed information about each work. Many businesses and gastronomic establishments, such as Starbucks, since 2011, use QR codes to pay through their mobile application, streamlining the purchasing process, or to offer promotions to their customers. In 2014, Airbnb began using QR codes on its listings to allow guests to access information about the property, its location, and house rules. In 2017, alternative rock band Imagine Dragons used QR codes on merchandise and concert programs during their "Evolve" tour, linked to fan-only content such as behind-the-scenes videos, interviews with members of the band and images of rehearsals. We hope that these real cases inspire you to use QR codes in your marketing campaigns and that you can apply them to your event tickets.
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

export default Business13

