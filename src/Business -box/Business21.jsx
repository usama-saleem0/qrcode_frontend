import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import x1 from '../img/Vector.svg';
import x2 from '../img/TV1.png';
import x3 from '../img/TV2.png';
import x4 from '../img/TV3.png';
import x5 from '../img/TV4.png';
import x6 from '../img/TV5.png';
import x7 from '../img/TV6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business21 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR Codes in <span>TV Commercials</span></h2>
            <button class="jss2570">
                <span class="jss2570-span">Select other examples
                    <img src={x1} alt=""/>
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
                <p>Add a QR code to your TV commercials to engage your audience. This excellent marketing strategy offers viewers immediate access to platforms, services, promotions and much more, from the comfort of their armchair.</p>
            </div>


            <div class="jss163">
                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={x2} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={x3} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={x4} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>



                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={x5} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180 half">
                    <div class="jss181">
                        <img class="jss182" src={x6} alt=""/>
                    </div>
                    <div class="jss183">
                        <a href="#">Create QR code</a>
                    </div>
                </div>

                <div class="jss180">
                    <div class="jss181">
                        <img class="jss182" src={x7} alt=""/>
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
                    <h2>Benefits of using QR codes in Television Commercials</h2>
                    <p> If you think that television advertisements no longer have a reason to exist, a marketing medium in the process of extinction, you only have to look at the Champions League commercials or other popular musical or sporting events, to see that the television audience, although there changed over the years, it is still a real audience that many companies seek to reach. If you are interested in taking your advertising to television, QR codes are the optimal solution to make a call to action to viewers and, at the same time, be able to measure the success of your campaign.</p>
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Optimizing the viewer experience: From TV to mobile
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Our QRFY code generator has different types of codes that can link people from your commercial to any type of additional information. Many fast food chains use our Coupon QR code in their commercials to offer exclusive discounts to viewers and increase sales in their stores. You can increase the number of followers on your social networks by adding a Link List QR codeto your television commercial. Or advertise your new application in a television commercial and have the public download it instantly, thanks to a Apps QR code. Share the nutritional information of your packaged products, connect people with your store, offer online advice and much more through our various types of QR codes.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Track and test your campaigns
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                As in other traditional marketing media, in the past it was difficult to obtain metrics and calculate the audience reach and success of a television advertisement. However, thanks to the tracking feature of QR codes, this is no longer a cause for concern.
With our dynamic QR codes you will have an effective tool to monitor the statistics of all your codes, vital to be able to make adjustments and optimize your marketing campaign, knowing what worked and what didn't. Our dynamic QR codes collect the frequency of scans and the location, date, time, device, and operating system information used for each scan. This way you will always be up to date on the performance of your QR code.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Always updateable information
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                With dynamic QR codes, you can edit information, correct any errors, or change the type of QR code, even after you've generated it, printed it, or launched it in your ads.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Expand your brand awareness
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Regardless of the marketing material you choose for your advertising campaign, QRFY allows you to combine the colors and aesthetics of your QR code with those of your brand, so that users identify it wherever you undertake your marketing efforts.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    About television advertisements
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The best television advertisements are those that become iconic, that leave a timeless mark on viewers, who continue to remember them even many years after they have gone out of circulation. According to a study conducted by Forbes, three key elements were identified that make a television advertisement effective and memorable:
Its ability to generate laughter or move the viewer. A notable example is the Pepsi ads, which highlight moments of connection between people from different cultures.
A memorable jingle or slogan, like Apple's famous "Think Different" or Kit Kat's "Have a Break, Have a Kit Kat."
The participation of celebrities, such as Scarlett Johansson in advertising campaigns for fashion brands such as Dolce & Gabbana and Robert Downey Jr. in advertisements for technology brands such as OnePlus, which add a touch of glamor and recognition to the product.
It is worth mentioning that many television commercials, since their beginnings in 1941, appeal to people's identity, since they seek to make them feel identified, both in their lifestyle and in their desires and ambitions, which that can lead a target audience to connect with the brand.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Advantages of using television for advertising
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The average duration of television commercials is 15 to 60 seconds, in which advertisers have to capture the attention of viewers and tell them who you are and what products or services you offer. It doesn't seem like a lot of time, but it can be further optimized with a QR code, by connecting the audience directly to your products published in a virtual store or linking them to your services, on a website or social network.
                                </AccordionItemPanel>

                            </AccordionItem>


                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR Code for television commercials?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Sign up to access our QR code generator and select the type of QR code you want to incorporate into your television commercial. You can start with a QR code from URL.</p>
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
                    <p class="jss241">Finally, integrate your new QR code into the design of your commercial.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">Best QR Code Practices in <span class="blue">Television Commercials</span></h3>
            <p class="jss245">Today, QR codes are no longer restricted to the boring monochrome initial design. Now you can design it to your liking with a variety of creative tools, including to fit the aesthetic of your brand or campaign. Here we present some of the functions at your disposal.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Add instructions</h4>
                <p class="jss249">Many times QR code users forget an essential detail for the success of their campaign: adding a brief written explanation of what the consumer will gain by scanning the code. When creating your code with QRFY, do not forget to encourage consumers not to miss it and scan it, so that your marketing campaign is not ignored: “Join our networks”, “Get discounts”, “Contact us”. The number of scans of your QR in television commercials will largely depend on thi</p>
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
            <h3 class="jss252">Discover the QR codes for Television Commercials in action</h3>
            <p class="jss253"> Still undecided on how to use QR codes in your television commercials? Don't worry: here are some fictional narratives and some real-life TV commercials to help you come up with your next campaign.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Coca Cola</h4>
                    <p class="jss257">Some Coca-Cola television commercials have included QR codes, which allow viewers, through a simple scan from their smartphones, to access the company's website, to participate in contests, access exclusive content or redeem prizes. Thanks to brand awareness, viewers do not hesitate to scan the QR code on the screen, making your campaigns foolproof, and the inclusion of QR technology has improved the consumer experience and made your promotional campaigns a success. .</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">McDonald's</h4>
                    <p class="jss257">More than once, fast food chain McDonald's has used QR codes in television ads to promote special offers. For example, to promote a new combo, they included a QR code in the ad, through which viewers could access a discount coupon for the purchase of their new product. It is quite difficult to resist the temptation of scanning a QR code when the benefit is significant and accessible from any device.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">The fictitious company ZenYog shares its recipes with a QR code</h4>
                    <p class="jss257"> The dairy products company ZenYogwanted to boost its sales through a series of television advertisements, which show recipes for savory dishes and pastries that can be cooked with its products. But they didn't just give a small taste of the use of their various products, they also actively involved viewers by including our PDF QR code to share the full recipes with viewers. A tasty incentive to buy their products!</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">The Storms</h4>
                    <p class="jss257"> In 2022, the fictional band The Storms adopted the use of QR codes to market their new songs. Their television and YouTube advertisements included a MP3 QR code, which redirected users to an audio track, where they could listen to their new song and a bonus track. Additionally, using a personalized button, access the virtual record store where you can buy the complete album in different formats.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Flamingo Beach</h4>
                    <p class="jss257"> Last summer, Flamingo Beach made a television advertisement with images of their tours so that viewers could visualize their ideal vacation. In addition, with a Coupon QR code they offered them an 18% discount, redeemable at their commercial offices or as a code applicable to online reservations. Stored directly on the viewer's phone, the promotion can be shared with friends and family via text or email.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Space Heroes</h4>
                    <p class="jss257"> Space Heroes released a commercial promoting their new mobile game. The 6-second “Download Now for Free” ad's call to action (CTA) was accompanied by a QR code that allowed viewers to download the app in real time, by redirecting the user directly to the app store of their choice, be it Google Play, Apple Store or other application download stores.</p>
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
                                    Is it really necessary to use QR codes on television?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Being a versatile marketing tool, QR codes can be adapted to any media. The massive use of mobile devices is a fact that cannot be missed when addressing our marketing efforts: now it is much more likely that a person, sitting in their chair, will see a QR code on their television screen and scan it, as most of the current devices have integrated a QR code reader. Therefore, they are the perfect marketing tool to connect the television audience directly with your products and services.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Why isn't my QR code working?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                If users have trouble scanning your QR codes, it may be because the size is inappropriate, there is a lack of contrast between the code and its background, or the destination link is broken or non-existent. For this reason, it is important to test the code before launching the campaign, to check with different devices that the code is scannable and that it takes users to the desired site.
                                </AccordionItemPanel>

                            </AccordionItem>

                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can adding a QR code to my TV commercials increase my brand awareness?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Of course! Our dynamic QR code generator allows you to adapt the design of your QR code, its colors and aesthetics, so that viewers relate it to the identity of your brand; but also, with the call to action (CTA) indicated, viewers will not hesitate to scan the code to learn more about your company and what you have to offer.
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

export default Business21

