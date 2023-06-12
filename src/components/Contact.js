import React from 'react';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Deliver</button>
            </div>
        </section>
    );
};

export default Contact;