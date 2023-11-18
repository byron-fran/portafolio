import React, { useEffect, useState } from "react"
import { TypeAnimation } from 'react-type-animation'

const Presentation = () => {


  return (
    <div className="container">
       
<TypeAnimation
sequence={[
  'Hola, soy Byron',
  1000,
  'Desarrollador web y móvil en formación',
  1000,
  'Comprometido con el aprendizaje continuo',
  1000,
  'Apasionado por crear soluciones tecnológicas',
  1000,
]}
className="title-animation"
speed={50}
/>

      
    </div>
  )
}

export default Presentation