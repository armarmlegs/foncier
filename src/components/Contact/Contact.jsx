import React, {useRef} from "react";
// import { Container } from "../../globalStyles";



// import Sidebar from "../SideBar/index";
import emailjs from "@emailjs/browser";
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
  ImageWrapper
} from "./ContactElements";
import background from "../../Images/Photos Site Fonciere/Jules-Ferry/2ème étage/IMG_2707.jpg"
import {Button2} from "../Button2";
const serviceId = "service_344sra3";
const templateId = "template_smm4j9q";
const publicKey = "WfaWdnYFUC7f1p2e6";
/*
const Contact = () => {
 
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)

      .then((result) => {
          alert("email sent");
      }, (error) => {
          console.log("error");
      });
      e.target.reset()
  }

*/

  const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          alert("email envoyé");
          console.log(result.status)
      }, (error) => {
          alert("une erreur empêche l'envoi de l'email");
          console.log(error.text)
      });
  };





  return (
    
    <ContactWrapper>
      <ImageWrapper>
      <ContactLeft src={background} />
      </ImageWrapper>
      <ContactRight>
        <ContactH1> Contact</ContactH1>
        <ContactFormX  onSubmit={sendEmail} ref={form}>
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
