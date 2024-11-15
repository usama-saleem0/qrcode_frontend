import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import d1 from '../img/Vector.svg';
import d2 from '../img/page41.png';
import d3 from '../img/page42.png';
import d4 from '../img/page43.png';
import d5 from '../img/page44.png';
import d6 from '../img/page45.png';
import d7 from '../img/page46.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const Business3 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
                <div class="inner-bussines">
                    <h2>QR codes on <span>Stickers and Labels</span></h2>
                    <button class="jss2570">
                        <span class="jss2570-span">Select other examples
                            <img src={d1} alt="" />
                        </span>

                    </button>
                </div>
            </div>



            <div class="busines-inner-1">
                <div class="qr-cont">
                    <div class="jss160">
                        <div class="jss161">
                            <div class="jss164">
                                <a href="#" class="btnnn-1">Benefits</a>
                                <a href="#best-practices">Best practices</a>
                                <a href="#use-cases">Use Cases</a>
                                <a href="#">FAQ</a>
                            </div>
                        </div>
                        <p>Add a QR code to your stickers and labels, to expand the exposure and visibility of your marketing campaign.</p>
                    </div>


                    <div class="jss163">
                        <div class="jss180 half">
                            <div class="jss181">
                                <img class="jss182" src={d2} alt="" />
                            </div>
                            <div class="jss183">
                                <a href="#">Create QR code</a>
                            </div>
                        </div>

                        <div class="jss180 half">
                            <div class="jss181">
                                <img class="jss182" src={d3} alt="" />
                            </div>
                            <div class="jss183">
                                <a href="#">Create QR code</a>
                            </div>
                        </div>

                        <div class="jss180">
                            <div class="jss181">
                                <img class="jss182" src={d4} alt="" />
                            </div>
                            <div class="jss183">
                                <a href="#">Create QR code</a>
                            </div>
                        </div>



                        <div class="jss180 half">
                            <div class="jss181">
                                <img class="jss182" src={d5} alt="" />
                            </div>
                            <div class="jss183">
                                <a href="#">Create QR code</a>
                            </div>
                        </div>

                        <div class="jss180 half">
                            <div class="jss181">
                                <img class="jss182" src={d6} alt="" />
                            </div>
                            <div class="jss183">
                                <a href="#">Create QR code</a>
                            </div>
                        </div>

                        <div class="jss180">
                            <div class="jss181">
                                <img class="jss182" src={d7} alt="" />
                            </div>
                            <div class="jss183">
                                <a href="#">Create QR code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='hello-my-faq-code'>
            <div class="jss251">


                <div className="benefitsofusing">
                    <h2>The benefits of using QR codes in Flyers</h2>
                    <p>Easy to create and distribute, digital flyers have not gone out of style. Distributing them in your marketing campaigns appropriately will always allow you to reach a larger audience. The effectiveness of your digital flyer can be even greater by adding a QR code. A scan will make the difference with the traditional flyer: QRFY optimizes your marketing strategy, as it will allow your ad to contact people directly with your online platforms, offers, promotions, social networks and much more.</p>

                    <h3>Renew your traditional flyers with QRFY</h3>

                    <p>This combination of traditional and digital marketing can increase interaction with your audience and will attract new customers to your product or service. With a traditional, well-designed flyer and the inclusion of a QR code, you can catch people's attention and expand the reach of your business, increase popularity on your social networks and attract new customers.</p>


                    <p>Additionally, a dynamic QR code will allow you to record the reach of your flyer, by computing the number and location of scans and even what device the code was scanned with each time. Monitoring these statistics will also allow you to check the effectiveness of the campaign and make changes to the strategy, if necessary; for example, modifying the distribution area or changing the design.</p>
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can a QR code on a flyer direct people to a website?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The answer is yes: it is one of the many advantages of adding a QR code to your flyers. Most of our QR codes contain a link to the home page of a website or any subpage within a given site. Simply access our QR code generator and create a dynamic <span>URL QR code    </span>.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How much information can a QR code on a flyer store?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                A QR code can store up to 4,296 alphanumeric signs, which can be decoded by any type of smartphone or tablet. Their wide accessibility means that more and more people and companies incorporate them into their marketing campaigns.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What is the purpose of placing a QR code on flyers?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Today, QR codes are a vital tool for marketing, as they offer customers direct contact with companies and their online platforms, as well as allowing you to access your campaign statistics in real time and make adjustments whenever necessary. necessary. A QR code on a flyer allows your clients and potential clients access to all types of online content, so that your promotional campaign is a success.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What benefit would it bring me to place a QR code on my flyer?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                First of all, it is an effective way to increase and accelerate the return on investment (ROI), since it improves the connection between customers and your companies: not only does it allow you to share more information without saturating the content of your flyer. Secondly, it improves user interaction and promotes “word of mouth”, by allowing your clients to share it digitally with their family and friends, attracting other potential clients. Thirdly, it allows you to collect scan statistics in real time, as well as allowing you to know where, when and from what type of device the scans were performed. This way, you can ensure that your brochures reach your target audience
                                </AccordionItemPanel>

                            </AccordionItem>



                        </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
                <div class="jss236">
                    <h3 class="jss237">How to create a QR code for Stickers or Labels?</h3>
                    <ul class="jss238">
                        <li class="jss239">
                            <span class="jss240">1</span>
                            <p class="jss241">Sign up to enter the QR code generator and select the QR code you want to add to your sticker. You can start with a <a href="#">QR from URL</a> to get started.</p>
                        </li>
                        <li class="jss239">
                            <span class="jss240">2</span>
                            <p class="jss241">Enter your website link: your QRFY code will be generated automatically.</p>
                        </li>
                        <li class="jss239">
                            <span class="jss240">3</span>
                            <p class="jss241">Customize the design of your QRFY code: add a frame and a “Scan Me” caption.</p>
                        </li>
                        <li class="jss239">
                            <span class="jss240">4</span>
                            <p class="jss241">Then, select colors that combine the identity of your company or business.</p>
                        </li>
                        <li class="jss239">
                            <span class="jss240">5</span>
                            <p class="jss241">Click “Download” and receive your QRFY code in .jpg format in seconds.</p>
                        </li>
                        <li class="jss239">
                            <span class="jss240">6</span>
                            <p class="jss241">Finally, integrate your new QR code into the design of your sticker or label.</p>
                        </li>
                    </ul>

                </div>
            </div>

            <div class="jss242" id="best-practices">
                <div class="jss243">
                    <h3 class="jss244">QR Code Best Practices on <span class="blue">Stickers and Labels</span></h3>
                    <p class="jss245">Gone are the monochromatic and boring QR codes. Now you can design it with your own identity and with a wide variety of creative tools. For your promotional sticker campaign and your product labels to be effective, they must capture the attention of customers and potential customers. Here is a guide to some useful practices at your disposal.</p>
                    <ul class="jss246">

                        <li class="jss247">
                            <h4 class="jss248">1. Add instructions</h4>
                            <p class="jss249">Many times QR code users forget this essential detail for the success of their campaign: adding a brief written explanation of what the consumer will gain by scanning their code. When creating your QRFY code on stickers or labels, don't forget to encourage consumers to scan your code, so that they don't miss it and so that your marketing campaign is successful.</p>
                        </li>

                        <li class="jss247">
                            <h4 class="jss248">2. Add a frame</h4>
                            <p class="jss249">Access our customizable frames so that your QR code matches the design of your sticker or label. Once your QR code is generated, you can choose from a wide variety of customizable frames and colors, with different CTA messages to attract users' attention. Additionally, if you want to add other details, you have the option to choose a different icon, customize the shape, or add completely custom text.</p>
                        </li>

                        <li class="jss247">
                            <h4 class="jss248">3. Add a logo inside your QR code</h4>
                            <p class="jss249">Once you have customized the frame, shape and color, you can also choose to include your own logo in the center of your QR code. While you can opt for one of the options offered by our QR code generator, you can also upload your own logo and even create your own CTA (such as "Visit our channel", "Discover our offers" or "Get to know us"). When including your logo, you don't have to worry about the image size: our system automatically detects the best size, to ensure that the logo is always scannable.</p>
                        </li>

                        <li class="jss247">
                            <h4 class="jss248">4. Save your designs</h4>
                            <p class="jss249">Sign up for QRFY and you'll be able to reuse your saved QR code designs without needing to manually recreate an old one. With QRFY you can save all your designs as templates and reuse them in new marketing campaigns: if you want to promote a new product from the same line or have included new services for clients, you can reuse a saved design, instead of starting another design from scratch.</p>
                        </li>

                        <li class="jss247">
                            <h4 class="jss248">5. Test before printing</h4>
                            <p class="jss249">Before printing the QR code on your stickers and labels, you should keep in mind that the minimum recommended print size is 2 x 2 centimeters. It is not recommended to make it smaller, but you can always make it larger, so that your QR code is always readable and can be scanned without difficulty. To ensure that all users can access your QR code, you should test with various smartphone models and apps.</p>
                        </li>

                    </ul>



                    <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>



                </div>
            </div>


            <div class="jss250" id="use-cases">
                <div class="jss251">
                    <h3 class="jss252">QR Codes for Stickers and Labels in action</h3>
                    <p class="jss253">If you still cannot imagine the scope and benefits of using a QR code on your stickers and labels, here we present some fictitious narratives, so that you can visualize the benefits that you can obtain in your business or company.</p>

                    <ul class="jss254">
                        <li class="jss255">
                            <h4 class="jss256">Cities and Culture</h4>
                            <p class="jss257">The fictional city of North City began using our QR codes on the welcome sign at the entrance to the city, to share with visitors and tourists a PDF QR code, with a map and a list of places of interest and gastronomic establishments in the city. To further improve the experience of their visitors, they decided to also create stickers with a MP3 QR code, for each referenced site: each scan redirects visitors to a different recorded audio guide, to accompany the visit at each location. They also added a button to the MP3 page to link to the full playlist on different platforms, such as Google Play Music and Amazon Music, so that tourists could listen to it at any time.</p>
                        </li>

                        <li class="jss255">
                            <h4 class="jss256">Nonprofit organizations</h4>
                            <p class="jss257">The fictitious Foundation Save Native Birdsregularly faces a decline in donations, so it decided to create an online community so that its collaborators are more connected and informed about the organization and its actions. In addition, it decided to include a Video QR codeon its stickers, to share with bird lovers informative videos about its actions in habitat conservation and the rescue and rehabilitation of endangered species. On another occasion, they included a Image Gallery QR code so that collaborators have access to the collection of wallpapers, with images of birds seen by their volunteers, as a thank you for their donations.</p>
                        </li>

                        <li class="jss255">
                            <h4 class="jss256">Consumer packaged goods</h4>
                            <p class="jss257">The brand ZenYog, after a successful social media marketing campaign, took advantage of the rise of its products and the testimonials of its consumers, to attract new potential customers to its dairy products. To do this, they added a Image Gallery QR code to each of their product labels: there people will find photographs of the desserts they could make with their products and, at the bottom of each image, the link to their respective recipe page. Thanks to the use of dynamic QR codes, you can upload new images as many times as you want, without having to reprint the code.</p>
                        </li>

                        <li class="jss255">
                            <h4 class="jss256">Personal use</h4>
                            <p class="jss257">Juan Pablo organized an alternative theater series together with the cultural center of his neighborhood, in which five theater companies from his city participated. For the event to be a success and be repeated next year, it was necessary for the campaign to be attractive enough to guarantee considerable attendance. To do this, he decided to create stickers with a striking design, which were distributed among members of the companies, friends and family, who stuck them on flower beds, posts and benches throughout the city. The inclusion of an Event QR codeallowed passersby to scan it, save the event schedule and, thanks to the inclusion of a button within the invitation, schedule the functions and reserve their place. This was the first step for the festival to become popular on social media and a traditional event in the city.</p>
                        </li>

                        <li class="jss255">
                            <h4 class="jss256">Musicians and artists</h4>
                            <p class="jss257">The fictional band The Stormsinitially became popular for their cool stickers. To attract more people to their concerts and increase their followers, they decided to include a Link Listing QR codein their traditional stickers, thus capturing not only the attention of their fans, but also that of new listeners, by offering them access to concert videos, posted by the band on Instagram, Twitter and Facebook, with a single scan. When releasing their first studio album, they used this resource again, but this time with a MP3 QR code that, with a simple scan, allowed potential buyers to access the release track, which included the link to the virtual store to buy the complete album in different formats.</p>
                        </li>
                    </ul>

                    <p class="jss257">Using QRFY, you can change and update all the information in your QR code at any time, even after it has been generated and printed. Sign up for QRFY to take advantage of all these benefits and try all the features for free for 7 days. Visit our Business QR Codes page and explore more business recommendations.</p>

                </div>
            </div>



            <section className='hello-my-faq-code'>
            <div class="jss251">
                <div className="your-faq-box">
                    <div className="Everything-faq-box more-faq">
<h3>FAQ</h3>
                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Can a QR code on a flyer direct people to a website?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                The answer is yes: it is one of the many advantages of adding a QR code to your flyers. Most of our QR codes contain a link to the home page of a website or any subpage within a given site. Simply access our QR code generator and create a dynamic <span>URL QR code    </span>.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How much information can a QR code on a flyer store?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                A QR code can store up to 4,296 alphanumeric signs, which can be decoded by any type of smartphone or tablet. Their wide accessibility means that more and more people and companies incorporate them into their marketing campaigns.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What is the purpose of placing a QR code on flyers?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Today, QR codes are a vital tool for marketing, as they offer customers direct contact with companies and their online platforms, as well as allowing you to access your campaign statistics in real time and make adjustments whenever necessary. necessary. A QR code on a flyer allows your clients and potential clients access to all types of online content, so that your promotional campaign is a success.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What benefit would it bring me to place a QR code on my flyer?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                First of all, it is an effective way to increase and accelerate the return on investment (ROI), since it improves the connection between customers and your companies: not only does it allow you to share more information without saturating the content of your flyer. Secondly, it improves user interaction and promotes “word of mouth”, by allowing your clients to share it digitally with their family and friends, attracting other potential clients. Thirdly, it allows you to collect scan statistics in real time, as well as allowing you to know where, when and from what type of device the scans were performed. This way, you can ensure that your brochures reach your target audience
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

export default Business3