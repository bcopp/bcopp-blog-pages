import React, { useState } from 'react';
import styled from 'styled-components';
import { ArticleMeta } from '../data/ArticleMeta'
import { useHistory, RouteComponentProps } from 'react-router-dom';
import { createGlobalState } from 'react-hooks-global-state';
import useGetHandler from '../hooks/FlaskAPI'
import queryString from 'query-string'
import { Spin, message, Typography, Layout, Empty } from 'antd'

const { Title } = Typography
const initialState = { entries: null, lastSearch: '' }
const { useGlobalState } = createGlobalState(initialState)

const articlesRequest = {
  method: 'get',
  url: '/articles/',
};

interface rquery {
  id?: string
}

export const Blog: React.FC<RouteComponentProps<rquery>> = (props: any) => {

  const [entries, setEntries] = useGlobalState('entries');
  const [lastSearch, setLastSearch] = useGlobalState('lastSearch');
  const { data, isLoading, hasError, handleRequest } = useGetHandler();
  const [shownError, setShownError] = useState(false)

  let paramsSearch = props.location.search
  const params = (paramsSearch.length !== 0) ?
    queryString.parse(paramsSearch.substr(1))
    :
    {}
 
  if (hasError) {
    if (shownError == false) {
      message.error("An error has occured, please reload the page")
      setShownError(true)
    } 
    return <div>Error</div>
  }

  if (data !== entries) {
    console.log("PARAMS")
    console.log(params)
    console.log("DATA")
    console.log(data)
    console.log("ENTRIES")
    console.log(entries)
    setEntries(data)
  }

  if (isLoading) {
    return (<Spin size='large' />)
  }
  else {
    // Display without search query
    if (!('q' in params)) {
      if (lastSearch === "" && entries !== null) {
        return (
          <div>
            <Header><h2 style={{ color:"white" }}>Latest Posts</h2></Header>
            <Content><EntryList entries={entries as unknown as ArticleMeta[]} /></Content>
            <Footer></Footer>
          </div>
        );
      }
      else {
        handleRequest(articlesRequest)
      }
    }
    // Display using search query
    else if (params.q === lastSearch) {
      return (
        <div>
          <Header><h1 style={{ color:"white"}}>Searched: ...</h1></Header>
          <Content><EntryList entries={entries as unknown as ArticleMeta[]} /></Content>
          <Footer></Footer>
        </div>
      )
    }
    else {
      handleRequest(articlesRequest)
    }
  }

  return (<div></div>)
};


const CenterFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const EntryList: React.FC<{
  entries: ArticleMeta[]
}> = (props) => {

  return (
    <div style={{ padding: "10px", paddingTop: "30px", background: "#eee" }}>
      <CenterFlex>
        {(props.entries.length) == 0 ?
          < Empty />
          :
          <div>{props.entries.map((e) => <ul><Entry entry={e} /></ul>)}</div>
        }
      </CenterFlex>
    </div>
  )
}

const Thumbnail = styled.img`
  max-height: 150px;
  width: auto;
  border-radius: 50%;
  background-size: cover;

`
const { Header, Footer, Sider, Content } = Layout;

const Entry: React.FC<{
  entry: ArticleMeta
}> = (props) => {
  const history = useHistory()

  const navToArticle = () => {
    history.push(props.entry.slug)
  }

  return (

    <div style={{ width: "80vw", background: "#eee" }}>
      <Layout>
        <Sider style={{ background: "#eee" }}>
          <Thumbnail src={props.entry.thumbnailLink} />
        </Sider>
        <Layout>
          <Header style={{ background: "#eee" }}>
            <div onClick={navToArticle} style={{ textAlign: "left" }}><Title level={3} >{props.entry.title}</Title></div>
          </Header>
          <Footer style={{ background: "#eee" }}><div style={{ textAlign: "left" }}><Title level={4} type="secondary">{props.entry.timestamp}</Title></div></Footer>
        </Layout>
      </Layout>
    </div>
  );
}

//{props.entries.map(e => <Project entry={e} />)}

export default Blog;