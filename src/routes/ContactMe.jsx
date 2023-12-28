import "styles/app.css";
import Header from 'components/Header';
import React, { useState } from "react";
import emailjs from 'emailjs-com';



const ContactMe = () => 
{


    const [state, setState] = useState({
        from_name: "",
        from_email: "",
        subject: "",
        html_message: "",
        error_from_name: false,
        error_from_email: false,
        error_subject: false,
        error_html_message: false,
    });


    const handleChange = (e) =>
    {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });

    };



    const fieldsToCheck = ["from_name", "from_email", "subject", "html_message"];

    const fieldCheck = () =>
    {
        let hasError = false;

        fieldsToCheck.forEach((field) =>
        {
            if (state[field].trim() === "")
            {
                setState((prevState) => ({
                    ...prevState,
                    [`error_${field}`]: true,
                }));
                hasError = true;
            }
            else
            {
                setState((prevState) => ({
                    ...prevState,
                    [`error_${field}`]: false,
                }));
            }
        });

        return hasError;
    };



    function sendEmail(e)
    {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        if (fieldCheck())
        {
            return;
        }


        emailjs.sendForm('service_nama2a7', 'template_gq0p7ah', e.target, 'FHjqGP_LzeZSAhqT5')
            .then((result) =>
            {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) =>
            {
                console.log(error.text);
            });
    }


    return (
        <React.Fragment>
            <div className="contact-me-wrapper">
                <Header pageTitle={"Contact"} />
                <div className="contact-me">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <input type="hidden" name="contact_number" />
                        <label htmlFor="nameLabel"> Name
                            <input type="text" id="from_name" name="from_name" value={state.from_name} onChange={handleChange} />

                            {state.error_from_name && (
                                <label htmlFor="error_from_name">Name field may not be empty.</label>
                            )}

                        </label>
                        <label htmlFor="emailLabel"> Email
                            <input type="email" id="from_email" name="from_email" value={state.from_email} onChange={handleChange} />

                            {state.error_from_email && (
                                <label htmlFor="error_from_email">Email field may not be empty.</label>
                            )}

                        </label>
                        <label htmlFor="subjectLabel"> Subject
                            <input type="text" id="subject" name="subject" value={state.subject} onChange={handleChange} />

                            {state.error_subject && (
                                <label htmlFor="error_from_subject">Subject field may not be empty.</label>
                            )}

                        </label>
                        <label htmlFor="messageLabel"> Message
                            <textarea id="html_message" name="html_message" value={state.html_message} onChange={handleChange} />

                            {state.error_html_message && (
                                <label htmlFor="error_from_html_message">Message field may not be empty.</label>
                            )}

                        </label>
                        <input type="submit" id="email_submit" value="Send" />
                    </form>
                </div>
            </div>
        </React.Fragment>

    );
}

export default ContactMe;