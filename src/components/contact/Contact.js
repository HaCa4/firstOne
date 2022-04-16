import React from "react";

//COMPONENTS
import Map from "./googleMap/Map";
import GuestForm from "./form/GuestForm";

//CSS: STYLED-COMPONENTS
import {
  ContactDiv,
  ContainerDiv,
  MapPart,
  FormPart,
  LowerLink,
} from "./Contact.styled";

//ICONS
import { FaGithub, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <ContactDiv>
      <ContainerDiv>
        <FormPart>
          I WOULD LOVE TO HEAR FROM YOU
          <br />
          <br />
          <br />
          <br />
          <GuestForm />
        </FormPart>
      </ContainerDiv>

      <ContainerDiv>
        <h3>
          You arrive or already live in Izmir?
          <br />
          You can also drop by for a coffee!
        </h3>
        <MapPart>
          <Map />
        </MapPart>
      </ContainerDiv>

      <LowerLink>
        <FaGithub />
        <FaLinkedinIn />
        <FaRegEnvelope />
      </LowerLink>
    </ContactDiv>
  );
}

export default Contact;
