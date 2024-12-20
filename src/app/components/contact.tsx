import React from "react";
import "../../app/components/contact.css"
const ContactSection = () => {
    return (
    
            
              <section className="contact-section">
                <div className="contact-container">
                  <h2>Contact Us</h2>
                  <p>Have questions or want to reach out? We would love to hear from you!</p>
                  <form className="contact-form">
                    <div className="form-row">
                      <label htmlFor="fullName">Full Name</label>
                      <input type="text" id="fullName" name="fullName" placeholder="Your Full Name" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="form-row">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" rows={4} placeholder="Your Message"></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </section>
        
          
    );
  };
  
  export default ContactSection;
  