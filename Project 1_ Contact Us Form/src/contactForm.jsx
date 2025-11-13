import style from "./ContactForm.module.css";
import { MdOutlineMessage } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Buttons from "./buttons";
import { useState } from "react";

const ContactForm = () => {
let [name, setname] = useState('');
let[email , setEmail] = useState('');
let [text, setText ] = useState('')


let Submitfunc = (event)=>{
  event.preventDefault();
  setname(event.target[0].value);
  setEmail(event.target[1].value);
  setText(event.target[2].value);
}


  return (
    <div className={style.form_container}>
      <div className={style.form}>
        <div className={style.btns_div}>
          <Buttons
            text="VIA SUPPORT CHAT"
            icon={<MdOutlineMessage fontSize={24} />}
          />
          <Buttons text="VIA CALL" icon={<FaPhone fontSize={24} />} />
        </div>
        <Buttons
          isoutline_btn={true}
          text="VIA EMAIL FORM"
          icon={<IoMdMail fontSize={24} />}
        />

        <form onSubmit={Submitfunc}>
          <div className={style.contactForm_container}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={style.contactForm_container}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>

          <div className={style.contactForm_container}>
            <label htmlFor="text">Text</label>
            <textarea rows={8} name="text" />
          </div>

          <div style={{display:"flex", justifyContent:"end"}}><Buttons text="SUBMIT" /></div>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Text: {text}</div>
        </form>
    

      </div>
      <div className={style.img}>
        <img src="src/assets/mainIMG.png" alt="Contact_us_image" />
      </div>
    </div>
  );
};

export default ContactForm;
