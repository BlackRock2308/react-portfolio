import "./contact.css"
import Phone from "./../../images/phone.jpg"
import Location from "./../../images/location.jpg"
import Mail from "./../../images/mail.jpg"

import emailjs from "emailjs-com";

import { useContext, useRef, useState } from "react"
import { ThemeContext } from "../../context"


const Contact = () => {
        const formRef = useRef();
        const [done, setDone] = useState(false)
        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode;

        const handleSubmit = (e) => {
          e.preventDefault();
          emailjs
            .sendForm(
              "service_qldx8sr",
              "template_m91mcim",
              formRef.current,
              "user_C8IkSVwBuV9JKHA8PwiDQ"
            )
            .then(
              (result) => {
                console.log(result.text);
                setDone(true);    
                
              },
              (error) => {
                console.log(error.text);
              }
            );
        };
      
    return (
        <div className="c">
          <div className="c-bg"></div>
          <div className="c-wrapper">
            <div className="c-left">
              <h1 className="c-title">Let's discuss your project</h1>
              <div className="c-info">
              <div className="c-info-item">
                  <img className="c-icon" src={Location} alt="" />
                  PA U18, DAKAR SENEGAL
                </div>
                <div className="c-info-item">
                  <img src={Phone} alt="" className="c-icon" />
                  +221 77 476 38 03
                </div>
                <div className="c-info-item">
                  <img className="c-icon" src={Mail} alt="" />
                    smbaye@ept.sn
                </div> 
              </div>
            </div>
            <div className="c-right">
              <p className="c-desc">
                <b>What’s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along. me.
              </p>
              <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                <input style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Email" name="user_email" />
                <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                <button>Submit</button>
                { done && "Thank you for messaging..."}
              </form>
            </div>
          </div>
        </div>
    );
};

export default Contact
