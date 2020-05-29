import * as React from 'react';
import styled from 'styled-components';
import { ArticleMeta, ArticleDummy } from '../data/ArticleMeta'
import { Typography } from 'antd'
import { useHistory } from 'react-router-dom';

const { Title } = Typography;


const Layout = styled.div`
  width: 90% auto;
  margin: 0px auto ;
  padding: 16px;
  position: relative;
  min-width:280;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ArticleFlex = styled.div`
  margin: 10px ;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArticleContainer = styled.div`
  height: 200px;
  width: 200px;


  display: flex;
  justify-content: center;
  align-items: center;
`

const ArticleImage = styled.img`
  border-radius: 10%;
  opacity: .7;
  position: center;
  size: cover;
  mask-repeat: no-repeat;
  border: 2px solid #ddd;
  height: 200px;
  width: 200px;
  z-index: -1;
  src: none;
`

const ArticleSummary: React.FC<{
  entries: ArticleDummy[]
}> = (props) => {
  return (
    <div className="pattern-background">
      <h1 >Dive Into My Brain</h1>
      <h5 style={{color:"#9b9b9b"}}>Articles that define my interests, reasoning strategies, and programming obsessions</h5>
      <Layout>{props.entries.map(e => <Article entry={e} />)}</Layout>
    </div>
  );
};

//const images = require.context('../../public/images', true);
const Article: React.FC<{
  entry: ArticleDummy
}> = (props) => {

  const history = useHistory();

  const openArticleSlug = () => {
    history.push(props.entry.slug)
  }

  console.log(props.entry.thumbnailLink)

  return (
    <ArticleFlex className="pattern-background">
      <div style={{position:"relative", textAlign:"center"}}>
        <ArticleImage src={props.entry.thumbnailLink} onClick={(e) => openArticleSlug()} />
        <Title level={3} style={{ position:"absolute", top:"60px", left:"10px", color: "white", marginBottom: "0px", textShadow: "2px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000" }}>
          {props.entry.title}
        </Title>
      </div >
    </ArticleFlex >
  )
}


export default ArticleSummary;