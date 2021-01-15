import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>CONTACT</h2>
            <form className="contact__form">
                <input type="text" placeholder="Full Name"/>
                <input type="text" placeholder="Email"/>
                <textarea placeholder="Message"></textarea>
                <button className="btn-primary">Send</button>
            </form>
        </section>
    )
}

export default Contact;
