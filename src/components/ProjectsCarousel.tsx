import React, { useState } from 'react';
import styled from 'styled-components';
import { ArticleMeta, ProjectDummy } from '../data/ArticleMeta'
import { message, Layout, Space, Carousel, Card, Typography, Divider } from 'antd'
import { ArrowLeftOutlined, FileTextOutlined, GithubOutlined } from '@ant-design/icons'

const { Header, Footer, Sider, Content } = Layout;
const { Title, Paragraph } = Typography;

const CenterFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(cream-dust.png);
`

export const ProjectsCarousel: React.FC<{
  entries: ProjectDummy[]
}> = (props: any) => {
  return (
    <CenterFlex>
      <div style={{ width: "800px" }}>
        <Carousel autoplay lazyLoad="ondemand" autoplaySpeed={10000} speed={800} >

          {props.entries.map((e) =>
            <TerminalDisplay entry={e} />
          )}
        </Carousel>
      </div>
    </CenterFlex>
  )
}

enum Display {
  Live,
  Code,
}

const TerminalDisplay: React.FC<{
  entry: ProjectDummy
}> = (props: any) => {
  const [display, setDisplay] = useState(Display.Live)

  if (!('code' in props.entry)) {
    message.error("Entry does not have code")
    return (<div>ERROR</div>)
  }

  const TerminalContainer = styled.div`
    height: auto;
    width: auto;
    border: solid;
    border-width: 2px;

  `
  const TerminalTop = styled.div`
    height: 20px;
    width: auto;
    background-color: #2E3463;
    color: #C0BEBF;

    display: flex;
    justify-content: center;
    align-items: center;
  `

  const openGithubLink = () =>{
    window.open(props.entry.githubLink, "_blank")
  }

  return (
    <CenterFlex>
      <div>
        <TerminalContainer>
          <TerminalTop>Creator-79@pop-os</TerminalTop>
          {display === Display.Live ?
            <img src={props.entry.gifLink} alt="This will display an animated GIF" style={{ maxWidth: "100%", maxHeight: "100%" }} />
            :
            <Code code={props.entry.code} />
          }
        </TerminalContainer>
        <div style={{ border: "solid", borderWidth: "1px", borderColor: "grey", lineHeight: "20px", textAlign: "right", height: "60px", backgroundColor: "white" }}>
          <GithubOutlined style={{ fontSize: "40px", margin: "10px 10px" }} onClick={(e) => openGithubLink()}/>
          {(display === Display.Live) ?
            <FileTextOutlined style={{ fontSize: "40px", margin: "10px 10px" }} onClick={(e) => setDisplay(Display.Code)} />
            :
            <ArrowLeftOutlined style={{ fontSize: "40px", margin: "10px 10px" }} onClick={(e) => setDisplay(Display.Live)} />
          }
        </div>
        {/* Text Body */}
        <div style={{ margin: "20px", flexBasis: "100%", alignSelf: "flex-start", wordWrap: "break-word" }}>
          <Title level={2} style={{ textAlign: "left" }}>{props.entry.title}</Title>
          <Paragraph ellipsis={{ rows: 7, expandable: true }} style={{ lineHeight: "30px", textAlign: "left" }}>{props.entry.summary}</Paragraph>
        </div>
        <div style={{ height: "60px" }} />
      </div>
    </CenterFlex>
  )
}

const Code: React.FC<{
  code: string
}> = (props: any) => {
  return (<div style={{ overflow:"auto", height: "500px", width: "800px" }}>{props.code}</div>)
}


export default ProjectsCarousel