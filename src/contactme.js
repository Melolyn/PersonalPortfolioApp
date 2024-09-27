
//Lynn Zein - 301280312 - 24/09/2024

import React from "react";
import './stylesheet.css';
import igicon from './igicon.png';
import soundcloudlogo from './soundcloudlogo.jpg';
import ytubelogo from './ytubeicon.png';
import melolynlogoblack from './MELOLYNLOGO (black).png';
import melolynlogo from './melolynlogo.png';

        const ContactMePage = () => {

            return (   

            <div>
                <div class="socials-container">
                <h1 className="headeraboutme">Contact Me</h1>
                 <a href="https://www.instagram.com/melolynlyn/" target="_blank" class="social-icon">
                     <img src={igicon} alt="Instagram" />
                 </a>
                 <a href="https://www.youtube.com/@Melolynflow" target="_blank" class="social-icon">
                     <img src={ytubelogo} alt="YouTube" />
                 </a>
                 <a href="https://soundcloud.com/melolyn" target="_blank" class="social-icon"><img src={soundcloudlogo} alt="Soundcloud" /></a>
            </div>

            <div className="paragraph">
                <p>
                "Feel free to reach out to me for any inquiries or collaborations! 
                Whether you're interested in exploring my web development projects or discussing music, 
                I'd love to connect. For web-related inquiries, you can reach me at lynn.zein96@gmail.com. 
                If you'd like to talk about my music or potential collaborations, please contact me at melolyn96@gmail.com. 
                Looking forward to hearing from you!"
                </p>

                <img className="logoimagecontactme" src={melolynlogo} alt="MelolynLogo"></img>

            </div>


            </div>

            );

    
    }

    export default ContactMePage;