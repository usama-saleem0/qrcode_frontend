import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import c1 from '../img/Vector.svg';
import c2 from '../img/Menus1.png';
import c3 from '../img/Menus2.png';
import c4 from '../img/Menus3.png';
import c5 from '../img/Menus4.png';
import c6 from '../img/Menus5.png';
import c7 from '../img/Menus6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business22 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR Codes in <span>Menus</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={c1} alt=""/>
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
                <p>Digital menus represent a great advance in the field of gastronomy. Offering your customers a virtual menu, whether in your restaurant, bar, cafeteria or delivery service, will allow you to keep your list of prices and products updated, without having to invest again in paper printing.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={c2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={c3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={c4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={c5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={c6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={c7} alt=""/>
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
                    <h2>Benefits of using QR codes in Menus</h2>
                    <p> During the COVID-19 pandemic, QR became an essential element for many businesses; The most obvious example is that of the restaurants that, thanks to a Menu QR Code , allowed many people to once again enjoy a dinner or lunch away from home, without the risk of becoming infected through contact with analog impressions of traditional menus. However, this is not the only benefit of implementing QR codes on menus: it also favors updating your content without printing costs, following digital marketing trends, offering payment options, taking orders faster and more efficiently, among other benefits.</p>
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    The boom of QR codes during COVID-19
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                2020 meant a drastic change in their habits for people and companies around the world. The new normal focused on slowing the spread of COVID-19, primarily through hygiene and other infection prevention methods. Restaurants implemented delivery and takeout services to continue generating income while their doors were closed, while QR codes were an easy and accessible solution for customers to maintain social distancing, avoiding contact with objects that could be contaminated, such as printed menus, catalogues, dataphones, bills and coins, among others. Thus, most gastronomic establishments began to offer digital menus and took advantage of QR technology to connect their diners with online platforms. Since then, QR codes are here to stay!
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    An ecological and hygienic alternative for your menus
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Nowadays, it is common to offer the digital menu through a table tent with a QR code in gastronomic establishments, as it allows customers to easily access the menu, place orders and make payments. Using a Menu QR code to share the various menus of the day minimizes contact between staff and customers, as well as significantly reducing printing costs. Another benefit is that, thanks to smartphones, the menu is saved on each device and makes it easier to place future orders at any time and from anywhere, such as after a tiring day, being able to order food made from the comfort of your home.

In addition, in these digital menus you can share Link List QR code, to redirect diners to your Instagram, Facebook or other platforms accounts, to attract online customers, by uploading images of your dishes and accompany them with a QR code to connect, in turn, with the media to place orders. In this way, you encourage the subscription and following of customers on your social media channels, guaranteeing greater visibility and participation.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Improve your customers' experience
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Many restaurants and bars offer more than just good food, whether it is some form of entertainment, whether musical or theatrical. You can also offer entertainment to your customers, whether they are dining at your restaurant or purchasing takeout. A good way is to share a MP3 QR code, to collaborate with friendly bands in their dissemination.
Additionally, you can offer your customers a virtual tour of your kitchens or your supply chain, to promote transparency and trust in your customers. This can be achieved with a Video QR code, which redirects your guests to a video playlist.
And if you want to promote your latest offer, like a 2X1 for returning customers or a discount on the next meal, you can place a Coupon QR code on your menus, so they can easily save the coupon to their mobile devices and redeem it on your next order.
The variety of codes that QRFY has available gives you a solution for each type of content, in order to keep your diners interested.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Take advantage of the tracking feature
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                By choosing our dynamic QR codes, you will have access to real-time tracking data for all marketing campaigns in which they are used. This data includes information such as location by city and country, scan time, type of device used, and the difference between single and total scans. This allows you to accurately evaluate the effectiveness of your QR codes and determine if their information is reaching your target audience. With this information, you will be better prepared to make improvements and adjustments in the future.
                                </AccordionItemPanel>

                            </AccordionItem>
                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR code for Menus?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Register and enter our QR code generator and select the type of QR code you want to incorporate into your menus. You can start with a Menu QR code.</p>
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
                    <p class="jss241">Then, select colors that match the identity of your business or restaurant.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">5</span>
                    <p class="jss241">Click “Download” and receive your QR code in .jpeg format in seconds.</p>
                </li>
                <li class="jss239">
                    <span class="jss240">6</span>
                    <p class="jss241">Finally, integrate your new QR code into your menu design.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">QR Code Best Practices in <span class="blue">Menus</span></h3>
            <p class="jss245">QR codes are no longer limited to the black and white aesthetic of their traditional design, but offer a wide range of colors, which can adapt to your brand image. Additionally, you can use various creative tools to make your designs unique. Here are five best practices for creating QR codes.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Add instructions</h4>
                <p class="jss249">Many times QR code users forget an essential detail for the success of their campaign: adding a brief written explanation of what the consumer will gain by scanning the code. When creating your code with QRFY to include in your menu, don't forget to encourage consumers not to miss it and scan it: “Get to know our executive menu”, “Get discounts on your next dinner”, “Delivery orders”. The number of scans will largely depend on this.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Frame it</h4>
                <p class="jss249">Access our customizable frames so that your QR code matches the design of your advertising or adapts to the aesthetics of the brand. Once the QR code is generated, you can choose from a wide variety of customizable frames and colors, with different CTA messages to attract consumers' attention. Additionally, if you want to add other details, you have the option to choose a different icon, modify the shape, and add completely custom text.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Add a logo inside your QR code</h4>
                <p class="jss249">Once you have customized the frame, shape and color of your code, you can also choose to include your own logo in the center of your QR code. While you can opt for one of the options offered by our QR code generator, you can also upload your own logo and even create your own CTA, such as "Visit our site" or "Check out these promotions." When including your logo, you don't have to worry about image size: our system automatically detects the best size, to ensure your logo remains scannable.</p>
            </li>


            <li class="jss247">
                <h4 class="jss248">4. Save your designs</h4>
                <p class="jss249">Sign up for QRFY and you'll be able to reuse your saved QR code designs without needing to manually recreate an old one. With QRFY you can save all your designs and reuse them in new marketing campaigns: if you want to promote a new product, but want to maintain the aesthetics of your design, you can reuse a saved design, instead of starting another one from scratch.</p>
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
            <h3 class="jss252">Discover the QR codes for Menus in action</h3>
            <p class="jss253"> If you still haven't decided how to use QR Codes in your menus and need inspiration, here are five real and fictional examples showing ideas for QR Codes in menus.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Allows you to pay without cash</h4>
                    <p class="jss257">An easy and accessible solution to introduce cashless payment, both for dine-in customers and for online orders, is to add an Apps QR code, included on your digital or printed menus and at the register, in order to promote your restaurant's payment application.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Make ordering easy with images</h4>
                    <p class="jss257">If you have a food stall or cart in a public space or in a shopping center, the space to promote your dishes is more limited than in a restaurant. The fictitious fast food chain Los Burgueses, inaugurated its dessert island in the shopping malls of its city, offering its customers promotional prices on all its cakes and ice creams. To do this, he decorated his stall with some delicious photographs of his dishes and a Menu QR code that redirected customers to the menu of the day with photographs of all the desserts; Then, using a Coupon QR code located next to the promotional products, diners could access the discounts, in addition to being able to easily share them with friends and family, by text message, email or social networks, through a custom button.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Show the production process of your dishes</h4>
                    <p class="jss257">QR codes can redirect the user to any type of content, allowing you to connect the physical/face-to-face with the virtual. Thus, you can take your customers on a virtual tour of your kitchen by scanning a Video QR code on your menu so that your guests know how your meals are prepared, while they wait for their order in your restaurant or at their home. This will give you the opportunity to build trust with your customers.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Create your online community</h4>
                    <p class="jss257">A Link Listing QR code can connect directly to your online channels and help you promote your restaurant; This way they won't have to type the name in a search bar to reach your business's distribution channels. Additionally, our dynamic QR codes allow you to keep information up to date on any changes to menus, hours, locations and special offers.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Less paper waste</h4>
                    <p class="jss257">The use of QR codes on menus allows restaurants, bars and food chains to include all menus in one. If you previously had separate drink and dessert menus, now you can provide your customers with all your options in a MenuQR code. This way you save space on the table and reduce paper waste. Plus, our dynamic QR code can be edited at any time to add new dishes and combos, fix errors, or update your holiday menu, without spending extra time and money reprinting.</p>
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
                                    Why don't we find QR codes on restaurant menus?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The reluctance of some restaurants to implement QR codes on their menus can be attributed to concerns about changing service dynamics and possible customer resistance to new technologies. Additionally, some establishments may perceive investment in technology as an initially insurmountable barrier rather than recognizing its potential to improve the customer experience and optimize internal operations. Without going any further, in Singapore QR codes have transformed the dining experience by allowing customers to scan a code at the table to access the digital menu and place orders from their mobile devices. This has significantly reduced wait time and improved service efficiency, providing diners with a more convenient and contactless experience.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What are the advantages of using a digital menu application in a restaurant?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The advantages of using a digital menu application in a restaurant are diverse and significant. First, it offers a more interactive and personalized experience for customers, who can easily explore menu options, get detailed information about dishes, and conveniently order and pay from their own mobile devices. Additionally, using a digital menu app reduces the costs of printing and distributing physical menus, while allowing for quick and easy updating of product prices and availability. This not only improves the restaurant's operational efficiency, but also contributes to a modern, technology-oriented image, which can attract a younger, digitally active clientele.
                                </AccordionItemPanel>

                            </AccordionItem>

                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What are the advantages of using a digital menu application in a restaurant?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The advantages of using a digital menu application in a restaurant are diverse and significant. First, it offers a more interactive and personalized experience for customers, who can easily explore menu options, get detailed information about dishes, and conveniently order and pay from their own mobile devices. Additionally, using a digital menu app reduces the costs of printing and distributing physical menus, while allowing for quick and easy updating of product prices and availability. This not only improves the restaurant's operational efficiency, but also contributes to a modern, technology-oriented image, which can attract a younger, digitally active clientele.
                                </AccordionItemPanel>

                            </AccordionItem>


                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Do digital menus represent the future of the gastronomic industry?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Digital menus are certainly emerging as a major trend in the dining industry. With the advancement of technology and the increasing reliance on mobile devices, we are likely to see an increase in the adoption of digital menus in restaurants. They offer a number of benefits, such as the ability to easily update prices and products, provide detailed nutritional information, and adapt to individual customer preferences. Additionally, in a post-COVID-19 world, digital menus are presented as a contactless option that can be more hygienic and safer for customers. Therefore, digital menus are likely to continue to gain popularity and become a common feature in restaurants.
                                </AccordionItemPanel>

                            </AccordionItem>


                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Will digital menus replace traditional menus in restaurants?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The main purpose of digital menus and QR codes is not necessarily to replace traditional menus, but to complement them. However, as we look to adopt more sustainable marketing practices, it is important to consider waste and unnecessary production of printed materials. QR codes allow information to be shared efficiently in a mobile and compact format, taking advantage of printed materials as a starting point. In this way, digital menus represent an extension of the physical world, offering a more interactive and intelligent dining experience.
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

export default Business22

