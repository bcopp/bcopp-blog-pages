import * as React from 'react';
import styled from 'styled-components';
import { ArticleMeta } from '../../data/ArticleMeta'

const Layout = styled.div`
  width: 90% auto;
  margin: 16px auto;
  padding: 16px;
  position: relative;
  min-width:280;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
`;

const DescripionContainer = styled.div `
  width: 100px;
  margin: 20px;
  
`;

const Project: React.FC<{
  entry: ArticleMeta
}> = (props) => {
  return (
    <Layout>
      <div>
        <img src="placeholder.jpg" alt="project description" style={{height:"400px", maxHeight:"60%", minHeight:"20%", flexGrow:1, marginLeft:"20px"}}/>
      </div>
      <div>
        <DescripionContainer>
          <ul><h1>{props.entry.title}</h1></ul>
          <ul><h5>{props.entry.timestamp}</h5></ul>
          <ul><h5>{props.entry.summary}</h5></ul>
        </DescripionContainer>
      </div>
    </Layout>
  )
}

export const ProjectSummary: React.FunctionComponent<{
  entries: ArticleMeta[]
}> = (props) => {

  return (
    <div>
      {props.entries.map(e => <Project entry={e} />)}
    </div>
  );
};

export default ProjectSummary;