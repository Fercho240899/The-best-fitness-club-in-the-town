import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'

const Join = () => {
    const transition = {type:'spring', duration: 2}
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ca2iuwx', 'template_xhsybgm', form.current, 'PwUUakMpMOVgoTOQ1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    

  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className="stroke-text">READY TO</span>
                <span> LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className="stroke-text"> WITH US?</span>
            </div>
        </div>
        <motion.div 
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ transition }}
        className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder="Enter your Email address"/>
                <button className="btn btn-j">Join Now</button>
            </form>
        </motion.div>

    </div>
    
  );
};
export default Join;
