// For Syntax Highlighting
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter/'
import style from 'react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark'

import { RouteComponentProps } from 'react-router-dom';
import React, { } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useGetHandler from '../hooks/FlaskAPI';
import { Spin, message, Typography, Divider, Affix, Button, Tag, Space} from 'antd'
import { RightOutlined } from "@ant-design/icons"
import { useHistory} from "react-router-dom";
import { ArticleAll } from '../data/ArticleMeta';

const ReactMarkdown = require('react-markdown')

const { Title } = Typography

const slugRequest = {
  method: 'get',
  url: '',
};

const SplashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20vw;
  width: 100%;
`
const LeftFlex = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`
const RightFlex = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
`

const Timestamp = styled.h5`
  margin: 10px 20px;
  color: lightgray;
`

const ContentContainer = styled.div`
  display: inline-block;
  text-align: left;
  height: 100%;
  width: 800px;
  margin-top: 20px;
  margin-bottom: 20px;
`


export const Article: React.FC<RouteComponentProps<{ slug: string }>> = (props: any) => {
  let slug = props.match.params.slug
  const { data, isLoading, hasError, handleRequest } = useGetHandler();
  const history = useHistory();

  // BUG: Does not reload page when pressing back button
  const openNextArticleSlug = () => {
    slugRequest.url = "/" + (data[0] as unknown as ArticleAll).nextArticleSlug + "/"
    history.push((data[0] as unknown as ArticleAll).nextArticleSlug);
    handleRequest(slugRequest);
  }

  if (hasError) {
    message.error("An error has occured. Please reload");

    return (
      <div>
        <SplashContainer />
        <Spin />
      </div>
    )
  }

  if (data === null && isLoading === false) {
    slugRequest.url = "/" + slug + "/"
    //console.log(slugRequest)
    handleRequest(slugRequest)
  }
  

  return (
    (data === null || isLoading) ?
      <div>
        <SplashContainer>
          <Spin />
        </SplashContainer>
      </div>
      :
      <div className="center-h-text">
        <SplashContainer style={{ backgroundSize: "cover", backgroundImage: "url(" + (data[0] as unknown as ArticleAll).photoLink + ")" }}>
          <Space direction="vertical">
            <Title level={1} style={{ color: "white", textShadow: "2px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000" }}>
              {data[0].title}</Title>
            <Title level={3} style={{ color: "white", textShadow: "2px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000" }}>
              {data[0].subtitle}</Title>
          </Space>
        </SplashContainer>
        <Divider orientation="left">{(data[0] as unknown as ArticleAll).timestamp}</Divider>
        <ContentContainer>
          <ReactMarkdown source={(data[0] as unknown as ArticleAll).content} renderers={{code: MarkdownCodeBlock}} />
        </ContentContainer>
        {
          ((data[0] as unknown as ArticleAll).nextArticleSlug !== "") ?
            <RightFlex>
              <Affix offsetBottom={15} style={{ margin: "20px" }}>
                <Button onClick={(e) => openNextArticleSlug()} style={{backgroundColor:"#eae8e9"}}shape="round" icon={<RightOutlined />} size="large" >Continue</Button>
              </Affix>
            </RightFlex>
            :
            <div />
        }
        {
          ((data[0] as unknown as ArticleAll).githubLink !== "") ?
            <a style={{ backgroundImage: "url(github.png)", backgroundSize: "cover", width: "150px", height: "150px", marginLeft: "10px", marginRight: "10px" }} href={data[0].githubLink} />
            :
            <div />
        }
        {
          ((data[0] as unknown as ArticleAll).tags !== "") ?
            <div style={{ marginBottom: "15px" }}>
              <span style={{ marginRight: 8 }}>Tags:</span>
              {(data[0] as unknown as ArticleAll).tags.split(',').map((tag: string) => <Tag>{tag}</Tag>)}
            </div>
            :
            <div />
        }

      </div>
  )
}


// Markdown Sytnax Highlighting

class MarkdownCodeBlock extends React.PureComponent<{language, value}> {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  }

  static defaultProps = {
    language: null,
  }

  render() {
    const { language, value } = this.props;

    return (
      <SyntaxHighlighter language={language} style={style}>
        {value}
      </SyntaxHighlighter>
    );
  }
}


export default Article;