import * as React from 'react';
import styled from 'styled-components';

const Splash = styled.h2`
  margin-bottom:0px;
`

const FinePrint = styled.h4`
  color: darkgrey;
`
const Embedded = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactMe: React.FC<{}> = (props) => {
  return (
    <div>
      <ul>
          <Splash >I'm a Conneticut born,</Splash>
          <Splash >California raised engineer.</Splash>
      </ul>
      <ul><FinePrint>Let's connect. I prefer Email and LinkedIn messages.</FinePrint></ul>
      <ul>
        <Embedded>
          <a style={{ backgroundImage: "url(github.png)", backgroundSize: "cover", width: "150px", height: "150px", marginLeft: "10px", marginRight: "15px" }} href="https://github.com/bcopp" />
          <a style={{ backgroundImage: "url(linkdln.png)", backgroundSize: "cover", width: "150px", height: "150px", marginLeft: "10px", marginRight: "15px" }} href="https://www.linkedin.com/in/bcopp/" />
          <a style={{ backgroundImage: "url(mail.png)", backgroundSize: "cover", width: "150px", height: "110px", marginLeft: "10px", marginRight: "15px" }} href="mailto:brendancopp@gmail.com" />
        </Embedded>
      </ul>
    </div>
  )
}

export default ContactMe;