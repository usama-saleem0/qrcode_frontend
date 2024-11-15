import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import l1 from '../img/Vector.svg';
import l2 from '../img/Catalogs1.png';
import l3 from '../img/Catalogs2.png';
import l4 from '../img/Catalogs3.png';
import l5 from '../img/Catalogs4.png';
import l6 from '../img/Catalogs5.png';
import l7 from '../img/Catalogs6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business18 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR Codes in <span>Catalogs</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={l1} alt=""/>
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
                <p>Offer your customers your entire store catalog with a simple scan. QRFY will allow you to improve your customers' experience, guiding them to virtual catalogs, where they can search for products according to their needs and streamline their experience in the store.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={l2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={l3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={l4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={l5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={l6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={l7} alt=""/>
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
                    <h2>Benefits of using QR codes in catalogs</h2>
                    <p>During the Industrial Revolution, Aaron Montgomery Ward revolutionized commerce by publishing the first mail order catalog in the United States in 1872 through Montgomery Ward. This pioneering catalog of its time allowed consumers to order by mail and have products delivered to their homes, anticipating the convenience and efficiency of today's online shopping.</p>
                    <p>The integration of QR codes into modern catalogs continues this tradition of innovation, offering consumers instant access to additional information and a more interactive and convenient shopping experience. The massiveness achieved in the last decade by online marketing worldwide makes it essential to adapt marketing strategies towards the Internet: if the statistics show a constantly rising curve in online sales, it is evident that the most effective marketing campaigns will be those that integrate a virtual experience that helps generate greater interest in users.</p>
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Present your products in an original way
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Have you thought about how to better connect consumers with your products and services? The QR code is an extensive source of innovative ideas to present your items.
Imagine highlighting the star products of your catalog by redirecting customers to posts, videos or an Instagram reel where a celebrity explains the benefits of your product, with a Link List QR code. Or expand its content, without printing costs, by connecting your catalog with more products, using a PDF QR code or a Image Gallery QR code.
By presenting your products in an original way, you increase customer satisfaction, who will share their experience with other people and activate the famous word of mouth. Even if you are not sure about this and want to listen to the opinion and needs of your customers, to improve your products and services, just print a Feedback QR code in your catalog. This way, you can add all the questions and categories you want to the survey and receive the results directly in your email.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Improve customer experience
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                To captivate your audience, nothing beats offering an immersive experience. QR codes in catalogs thus become essential tools to strengthen brand awareness. By connecting customers with exclusive content or unique experiences through these codes, brands can create memorable interactions that leave a lasting impression in the consumer's mind.
When customers engage in interactive experiences facilitated by QR codes, they are more inclined to remember the brand and associate it with positive emotions. Whether through inspiring videos, helpful tutorials, or augmented reality experiences, every QR code interaction helps build a deeper, more meaningful relationship between customer and brand.
In these cases, the Apps QR code facilitates the download of applications, connecting the customer directly to Google Play, Amazon Appstore and other download platforms that can offer customers a complementary experience to printed material.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Optimize your marketing
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Printed materials used to be difficult to trace. That is, there was no way to know or quantify the effect of a printed advertisement on clients or potential clients. Today, QR codes can help you find the most effective point of sale for your business, by tracking the scans offered by our dynamic QR codes. By printing a Coupon QR code in your catalog, in addition to offering tempting benefits to your customers, you will be able to see the total number of scans, their locations, the hours of highest traffic as well as the devices and operating systems that were used in each scan. These numbers, added to the number of coupon downloads and sales, will allow you to know how effective your campaign was and make adjustments if necessary.
                                </AccordionItemPanel>

                            </AccordionItem>

                            

                          

                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for Catalogs?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Register to enter our QR code generator and select the type of QR code you want to use in your catalog. You can start with a QR code from URL.</p>
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
                    <p class="jss241">Finally, integrate your new QR code into your catalog design.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">QR Code Best Practices for <span class="blue">Catalogs</span></h3>
            <p class="jss245">Now you can design QR codes to your brand's image, with a wide variety of creative tools. Here are five tips for creating QR codes.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Add instructions</h4>
                <p class="jss249">Many times QR code users forget an essential detail for the success of their campaign: adding a brief written explanation of what the consumer will gain by scanning the code. When creating your QRFY code, don't forget to encourage consumers not to miss it and scan it, so that your marketing campaign is not ignored: “Visit our networks”, “Check out this incredible giveaway”, “Leave us your comments ”. The number of scans will largely depend on this.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Frame it</h4>
                <p class="jss249">Access our customizable frames so that your QR code matches the aesthetics of your brand or the design of your giveaway. Once the QR code is generated, you can choose from a wide variety of customizable frames and colors, with different CTA messages to attract consumers' attention. Additionally, if you want to add other details, you have the option to choose a different icon, modify the shape, and add completely custom text.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Add a logo inside your QR code</h4>
                <p class="jss249">Once you have customized the frame, shape and color of your code, you can also choose to include your own logo in the center of your QR code. While you can opt for one of the options offered by our QR code generator, you can also upload your own logo and even create your own CTA, such as "Follow us on Instagram" or "Enter an unmissable giveaway." When including your logo, you don't have to worry about image size: our system automatically detects the best size, to ensure your logo remains scannable.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">4. Save your designs</h4>
                <p class="jss249">Sign up for QRFY and you'll be able to reuse your saved QR code designs without needing to manually recreate an old one. With QRFY you can save all your designs and reuse them in new marketing campaigns: if you want to promote a new product or contest, but want to maintain the aesthetics of your design, you can reuse a saved design, instead of starting another one from scratch.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">5. Customizable URL</h4>
                <p class="jss249">By default, each dynamic QR code gets a random short URL that redirects to your page when the QR code is scanned. The short URL can be customized to your preferences, such as including your company name, to help differentiate you from the competition and build more trust among users.</p>
            </li>

           

        </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">Explore QR codes for Catalogs in action</h3>
            <p class="jss253"> If you don't know how to get started, here are six fictitious companies that use QR codes in their catalogs to inspire you to get creative in your marketing campaign.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Internal magazines</h4>
                    <p class="jss257">The business Shop Local wanted to offer its customers a better digital shopping experience, through its internal magazine. For this reason, they used the Coupon QR code to offer their customers digital coupons, through a simple scan: these coupons could be used either by entering their numerical code for payment in the virtual store, or by showing the code QR of the coupon downloaded in the physical store. QR codes thus allow customers to no longer have to cut out and save pieces of paper to enjoy discounts and can share them with their friends and family through email or social networks.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Event management</h4>
                    <p class="jss257">Always Together implemented a catalog to showcase all of its services and past successes, both in its physical and virtual customer service channels, as well as at commercial events and entrepreneur conferences. To optimize these catalogs and increase awareness of the company, they added a vCard Plus QR code on the cover, so that potential customers have instant access to their contact information and the form to book an appointment with his advisors.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Education</h4>
                    <p class="jss257"> SC School has always been noted for its annual exhibitions, where students offer visitors a showcase of their best work, including dance performances, plays and live painting. Seeing the success of these sessions in the reputation of the institution, SC School decided to add our Video QR codeto its catalog, to link those people who come to inquire about the academic offer with videos filmed during the annual exhibition, so that the catalog is no longer just a boring listing of courses and subjects.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Cities and Cultures</h4>
                    <p class="jss257"> Book clubs have recently seen an uptick in cultural activities in cities, as a way to connect people with Literature and local writers, new or famous. For this reason, the North CityCulture office began promoting its reading circle in the pages of its catalog of annual events and activities. Using our PDF QR code, they offered citizens a preview of the book they would begin reading at the next meeting, so that each reader knew its plot, before purchasing it and committing to the group reading. In addition, they created the QR code with a fun design, to attract the attention of readers, without spending extra money on paper and ink.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Fashion and influencers</h4>
                    <p class="jss257"> The women's clothing house Shop Local thought that a good way to promote its new collection was by creating content in collaboration with body positive Instagrammers or YouTubers. To do this, with our Link List QR code, printed in its catalogues, it gave its clients the possibility of seeing the outfits from its latest collection modeled on different body types. In addition, he significantly improved the number of his followers, thanks to publishing his videos and reels together with influencers with thousands of followers.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Consumer electronics</h4>
                    <p class="jss257"> A catalog allows for a limited amount of content, but Siekens wanted people to have access to the full listing and description of their appliances and, at the same time, increase traffic to their website. To do this, they used our dynamic URL QR code, so that consumers could directly and instantly access the online store, where they could explore all Siekens products in the comfort of their homes.</p>
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
                                    How small can I print a QR code?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Please note that codes must be at least 2 x 2 cm to be scanned. It is important to ensure that the QR code is large enough so that devices can scan it easily and accurately.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Is it safe to use a QR code?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                In general, using a QR code is safe, as it simply links to specific information without automatically running programs or actions on your device. But all technology can be misused. While it is not possible to hack a QR code, security problems can arise if its link connects the device to harmful information, such as malware or harmful websites.
                                </AccordionItemPanel>

                            </AccordionItem>


                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What type of information can I link to a QR code in catalogs?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The solutions that a QR code printed on your catalogs can offer you are multiple; since they can connect their audience with all types of information. You can share art projects using catalog products, customer reviews, video tutorial playlists, image galleries, music or podcasts, and more. You just have to start your imagination!
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Is it possible to customize QR codes to match the graphic design of my catalog?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Of course! Our dynamic QR code generator has a wide variety of options: you can customize the colors to match those of your company or business, add custom frames and borders, include your logo or other design in the center, and add your own call to the action (CTA).
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

export default Business18

