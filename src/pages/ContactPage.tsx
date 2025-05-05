import React from 'react';
import ContactForm from "../components/ContactComposant";
import Header from "../components/Header";
import Footer from "../components/Footer";

function ContactPage() {
return(
    <div className="App">
            <Header />
            <ContactForm />
            <Footer />
    </div>
    )
};

export default ContactPage;