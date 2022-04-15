import React from 'react'

import {BioDiv, ContextDiv, BioImg} from "./Bio.styled"

const Bio = () => {
  return (
    <BioDiv>
      <BioImg src='https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
      <ContextDiv>
        <h3>Hasan Cagrı Ozagar</h3>
        Frontend Developer <br/>
          Air Traffic Control Officer<br/>
                    Pilot
        
        
      </ContextDiv>
    </BioDiv>
  )
}

export default Bio