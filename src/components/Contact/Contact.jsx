import React from "react";



// import Sidebar from "../SideBar/index";
import emailjs from "emailjs-com";
import {
  ContactH1,
  ContactLeft,
  ContactRight,
  ContactWrapper,
  ContactP,
  ContactFormX,
  ContactLabel,
  ContactInput,
  ContactArea,
} from "./ContactElements";
import background from "../../images/Photos Site Foncière/Jules-Ferry/2ème étage/IMG_2707.jpg"
import {Button2} from "../Button2";
const serviceId = "service_zbztet6";
const templateId = "template_xsdfrjk";
const userId = "user_JL9GE8VrBLeAvhPzsvHB3";

const Contact = () => {
 
  function sendEmail(e) {
      console.log('wassup')
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, e.target, userId)

      .then((result) => {
          alert("email sent");
      }, (error) => {
          console.log("error");
      });
      e.target.reset()
  }





  return (
    <ContactWrapper>
      <ContactLeft src={background} />
      <ContactRight>
        <ContactH1> Contact</ContactH1>
        <ContactP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        </ContactP>
        <ContactFormX onSubmit={sendEmail}>
         <ContactInput  type="hidden" name="contact_number" />
         <ContactLabel >Nom : </ContactLabel>
         <ContactInput  type="text" name="name" />
         <ContactLabel >Email : </ContactLabel>
         <ContactInput  type="email" name="email" />
         <ContactLabel >Message : </ContactLabel>
         <ContactArea  name="message" />
         <Button2 type="submit" value="Send" /> 
       </ContactFormX>
     
      </ContactRight>
    </ContactWrapper>
  );
};

export default Contact;
