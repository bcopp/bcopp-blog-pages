import React, { useState } from 'react';
import styled from 'styled-components';
import {Typography} from 'antd'

const {Title, Text, Paragraph} = Typography

const AboutMe: React.FC<{ 
  employmentStatus:string,
  location:string,
}> = (props) => {

  return(
    <div>
      <ul style={{listStyle:"none"}}>
        <li><Title level={2}>Who Am I?</Title></li>
        <li><img src="headshot-about-me-crop.jpeg" style={{maxWidth:"800px", marginBottom:"15px", borderRadius:"2%", border:"1px solid"}}/></li>
        <li><div style={{display:"block-inline", textAlign:"left"}}>

        <li><Paragraph ellipsis={{ rows:6, expandable: true}}>I'm a recent university graduate from SoCal with a major passion for new technology. I enjoy working with multi-faceted developers and continually strive to find beautiful solutions. I'm focused on finding full time employment within San Francisco and believie any engineering problem can be solved with the correct tooling. If you are interested in working with me then send me a message!</Paragraph></li>
        <li><Text type="secondary">Location: {props.location}</Text></li>
        <li><Text type="secondary">Employment Status: {props.employmentStatus}</Text></li>
          
        </div></li>
      </ul>
    </div>
  )

}



export default AboutMe