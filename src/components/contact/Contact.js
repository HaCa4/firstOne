import React from 'react'
import {FaGithub, FaLinkedinIn,FaRegEnvelope} from "react-icons/fa"

import Map from "./googleMap/Map"
import GuestForm from "./form/GuestForm"

import {ContactDiv,  LowerDiv, MapPart, MsgPart, LowerLink} from "./Contact.styled"



function Contact() {
    
  return (
    <ContactDiv>
        
        <LowerDiv>
            <MsgPart>
              I WOULD LOVE TO HEAR FROM YOU <br/><br/><br/><br/>

              <GuestForm/>
            </MsgPart>          
        </LowerDiv>

        <LowerDiv>
                <h3>You arrive or already live in Izmir?<br/>You can also drop by for a coffee!</h3>
            <MapPart>
                <Map/>   
            </MapPart>
        </LowerDiv>

        <LowerLink>
            <FaGithub/>
            <FaLinkedinIn/>
            <FaRegEnvelope/>
        </LowerLink>
    </ContactDiv>
  )
}

export default Contact