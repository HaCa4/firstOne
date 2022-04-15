import React from 'react'

import {Frame, MapDiv} from "./Map.styled"

const Map = () => {
  return (
    <MapDiv>
      <Frame 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2360.6086329548675!2d27.083626165744423!3d38.398500688160155!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaeb064ad029e6641!2sLa%20Folie!5e0!3m2!1str!2str!4v1649897405575!5m2!1str!2str" 
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade"
       title="asd">
       </Frame>
    </MapDiv>
  )
}

export default Map;