import React, { useState } from 'react'
import styles from "./ContactForm.module.css"
import Button from "../Button/Button"
import { MdOutlineMessage } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";

function ContactForm() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault();
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    }

  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdOutlineMessage fontSize="24px"/>}/>
                <Button text="VIA CALL" icon={<IoCallOutline fontSize="24px"/>}/>
            </div>
            <Button isoutline={true} text="VIA EMAIL FORM" icon={<IoIosMail fontSize="24px"/>}/>

            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name'/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email'/>
                </div>
                <div className={styles.form_control}>
                    <label htmlFor='text'>Test</label>
                    <textarea type='text' name='text' rows="6"/>
                </div>
                <div style={{display: "flex", justifyContent: "end"}}>
                    <Button text="SUBMIT" />
                </div>
                <div>
                    {name + " " + email + " " + text}
                </div>
            </form>
        </div>

        <div className={styles.contact_image}>
            <img src='./images/contact.svg' width="full" height="500px"></img>
        </div>
    </section>
  )
}

export default ContactForm
