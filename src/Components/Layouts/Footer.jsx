import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="textcard container-fluid px-5">
        <div>
          <BsInstagram color="white" size={25} /> &nbsp;&nbsp;&nbsp;&nbsp;
          <BsTwitter color="white" size={25} /> &nbsp;&nbsp;&nbsp;&nbsp;
          <BsDiscord color="white" size={25} /> &nbsp;&nbsp;&nbsp;&nbsp;
          <BsTelegram color="white" size={25} />
          <p className="headerfontcolor my-3">
            Copyright © 2022 Crypto.com. All rights reserved.
          </p>
        </div>
       
      </div>
      <div className="container-fluid px-5  footerendtext    ">
        <div className="footertext">Help Center</div>
        <div className="footertext">Blog</div>
        <div className="footertext">T&C</div>
        <div className="footertext">Privacy Notice</div>
        <div className="footertext mb-5 ">Cookies Preference</div>
        
      </div>
     
    </div>
  );
}

export default Footer;
