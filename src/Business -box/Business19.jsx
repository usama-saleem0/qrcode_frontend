import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoChevronForwardSharp } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";


import Header from '../header/header';
import Footer from '../Footer/Footer';

import l1 from '../img/Vector.svg';
import l2 from '../img/magazines1.png';
import l3 from '../img/magazines2.png';
import l4 from '../img/magazines3.png';
import l5 from '../img/magazines4.png';
import l6 from '../img/magazines5.png';
import l7 from '../img/magazines6.png';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';




const Business19 = () => {
    return (
        <>


            <Header />

            <div class="busines-inner">
        <div class="inner-bussines">
            <h2>QR Codes in <span>Books and electronic magazines</span></h2>
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
                <p>If you are a writer, publisher or private company, offering e-books and magazines, you can add QR codes to your e-publication designs to enrich them: offer additional information, access to audiobooks, music tracks and much more.</p>
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
                    <h2>Benefits of using QR codes in Electronic Books and Magazines</h2>
                    <p>E-books and electronic magazines have revolutionized the way we read and are here to stay. Many people have stopped buying paper books and take advantage of their devices to enjoy recreational reading or to study. Digital editions of books and magazines have the benefit of being able to be opened on any device and also allow them to be printed directly. So that readers can easily access all the information you want to offer, you can add a QR code to your digital editions and simplify access to your links.</p>
                    
                </div>

                    <div className="Everything-faq-box more-faq more-2">

                        <Accordion allowZeroExpanded>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Two basic QRFY resources
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                QR codes let you share e-books and e-magazines easily: by scanning our dynamic URLQR code, you can redirect users from any medium, print or digital, to a website or page destination, where they can download your digital edition of your book or magazine.
But you can also include a QR code in the design of a book or electronic magazine to share all kinds of information with its readers: links to your social media accounts, download links for applications, videos, websites, invitations, virtual stores and much more. To see the full variety of our QR codes, click here.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Easy access from any device
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                All QRFY codes make it easy to access your content from any device, to improve your customers' experience. In addition, they can see a summary of the information before entering the link, which is useful both for marketing design and for generating security in users, by knowing in advance the content of your QR code through their devices and who then access it with confidence.
                                </AccordionItemPanel>

                            </AccordionItem>

                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Use QR codes in your print marketing
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Before QR codes, when a reader found a link to some digital site or platform in printed materials, they had to wait for the moment to be able to type the link on their computer, or write the information by hand to search for it later, with the risk of not finding the correct link. Additionally there was no way to track the results of the print marketing campaign. QR codes eliminate this problem completely: just by scanning the QR code, you can immediately access your links, without having to type or search for them.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Track your campaigns
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Now, you can calculate the return on investment (ROI) in a simple way, thanks to QR codes: these allow real-time tracking, to monitor the results of your QR code and optimize your marketing campaign if necessary. necessary. With our dynamic QR codes you have all the information about the scans at your disposal: total and unique scans, place and time of each scan, device and operating system used.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Edit and update your code whenever you want
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                After being generated, dynamic QR codes can be edited and updated whenever required. From changing your destination link to making changes to an already printed code without spending extra money or time.
                                </AccordionItemPanel>

                            </AccordionItem>


                            <AccordionItem>

                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Customize your designs.
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                With the QRFY code generator you can create your codes with a large number of customization options. A QR code can be a true reflection of the personality of your brand or business, allowing you to design it with the colors that represent you, customizable frames, original borders, your logo or another image in the middle and a seductive CTA, to attract scans. your clients and potential clients.
                                </AccordionItemPanel>

                            </AccordionItem>

                            

                          

                            </Accordion>
                    </div>
         
                </div>
    
            </section>


            <div class="jss235" id="how-to">
        <div class="jss236">
            <h3 class="jss237">How to create a QR Code for Electronic Books and Magazines?</h3>
            <ul class="jss238">
                <li class="jss239">
                    <span class="jss240">1</span>
                    <p class="jss241">Register to access our QR code generator and select the type of QR code you want to incorporate into your ebook or electronic magazine. You can start with a QR code from URL.</p>
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
                    <p class="jss241">Finally, integrate your new QR code into the design of your digital book or magazine.</p>
                </li>
            </ul>
           
        </div>
    </div>

    <div class="jss242" id="best-practices">
        <div class="jss243">
            <h3 class="jss244">Best Practices for QR Codes in <span class="blue">Books and Electronic Magazines</span></h3>
            <p class="jss245">When designing your QR code on books or e-zines, there are some valuable details to keep in mind so that your efforts get the best results.</p>
        <ul class="jss246">

            <li class="jss247">
                <h4 class="jss248">1. Customize your design</h4>
                <p class="jss249">With all the style options available, you can personalize your QR code, so that it conveys the essence or style of your brand or matches the design of your marketing campaign. If you want more information on how to design your QR code, click here.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">2. Use the right size</h4>
                <p class="jss249">When printing your QR code, you must keep in mind that the minimum recommended print size is 2 x 2 centimeters. It is not recommended to make it smaller, but you can always make it larger, so that your QR code is always readable and can be scanned without difficulty. To ensure that all users can access your QR code, you should test with various smartphone models and apps.</p>
            </li>

            <li class="jss247">
                <h4 class="jss248">3. Track your campaign</h4>
                <p class="jss249">Your QR code can adapt to any type of marketing, in addition to allowing you to track its scans: the tracking function of the dynamic URL QR codes provides information about the numbers of your campaign, allowing you to modify the necessary to improve it. QR code technology can track and monitor your results, both in digital and print media. It's a benefit you should take advantage of!</p>
            </li>

            

           

        </ul>



        <p class="jss249">Learn more about optimizing your QR codes by visiting our <a href="#">Help Center.</a></p>
        
    
    
    </div>
    </div>


    <div class="jss250" id="use-cases">
        <div class="jss251">
            <h3 class="jss252">Discover QR codes for Books and Electronic Magazines in action</h3>
            <p class="jss253"> If you still can't see the benefits of using QRFY codes in eBooks and electronic magazines, here are some examples of their use in fictitious company campaigns.</p>
        
            <ul class="jss254">
                <li class="jss255">
                    <h4 class="jss256">Restaurants</h4>
                    <p class="jss257">Los Burgueses recently received a visit from a famous food critic. The review of his restaurant was published in an electronic magazine, which included a Business QR code that showed his Los Burgueses menu, with a personalized button that redirects, in turn, to his Instagram account, where restaurant news and promotions are published daily.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Retailers</h4>
                    <p class="jss257">Shop Local publishes a monthly digital magazine, in collaboration with a famous fashion influencer, who models her favorite outfits from the brand. All editions of the electronic magazine contain a Link List QR code for their followers to access their Instagram and Facebook accounts and their YouTube channel; with tutorials and fashion challenges.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Editors</h4>
                    <p class="jss257"> Editorial Q publishes a monthly digital magazine, in which it promotes its latest publications. In the last edition they published an interview with the writer María Inés Cortés, with a QR code with a dynamic URL, which connected readers to the virtual store to buy her latest novel.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Software and game developers</h4>
                    <p class="jss257"> The classic Space Heroes games have countless fans around the world, especially their memorable “Pluto Odyssey.” Therefore, they decided to create a saga of e-books based on the game. These fan fiction e-books include a Video QR code to access a YouTube listing with exclusive behind-the-scenes videos of the creation of the game and its characters and interviews with its artists and developers.</p>
                </li>

                <li class="jss255">
                    <h4 class="jss256">Educational institutions</h4>
                    <p class="jss257"> The renowned SC School carries out an annual publishing project with its fifth-year students, to provide them with a unique experience in the workplace: for the project, students must carry out all the steps for editing a book album, including its printing and distribution campaign. This year each course designed an illustrated electronic book with the students' artistic productions. But a book cannot cover more than a small sample of each student. That is why, so that readers could access more works by each student, they added a PDF QR code on each page, which redirected readers to a pdf with the works of the student who designed it .</p>
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
                                    Is there a suitable size for QR codes on digital books and magazines?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Not really: everything will depend on the design of your e-book or digital magazine and the use you want to give it. Keep in mind that you should avoid making QR codes too small, so that scanning them is not difficult. The minimum recommended size is 2 x 2 cm, from there, you can enlarge them as much as you think necessary.
                                </AccordionItemPanel>

                            </AccordionItem>

                            
                             <AccordionItem>

                            <AccordionItemHeading>
                                    <AccordionItemButton>
                                    What type of information can I link to QR codes in books and e-magazines?
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M8.00006 4.22027C8.39753 4.22171 8.77841 4.37981 9.06006 4.66027L14.5601 10.1603L12.4401 12.2803L8.00006 7.84027L3.56006 12.2803L1.44006 10.1603L6.94006 4.66027C7.22171 4.37981 7.60259 4.22171 8.00006 4.22027Z" fill="#1D59F9"></path></svg>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                Really, whatever you want: the possibilities are endless. A QR code can offer you a wide variety of solutions, linking users to all types of online content. You can link your code to app downloads, videos, music playlists, PDF files, documents of all kinds, social media profiles and much more, without overloading pages with extra information, cluttering the design, or embedding long links . What type of information you want to link will depend entirely on the purpose of your QR code.
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

export default Business19

