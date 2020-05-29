//import ProjectSummary from "./components/ProjectSummary"
import React, { Component, useState } from 'react';
import ArticleSummary from "./ArticleSummary"
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe"
import { ArticleMeta, ArticleDummy, ProjectDummy } from '../data/ArticleMeta'
import { Space, Divider, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons'

import { ProjectsCarousel } from './ProjectsCarousel';
const { Title } = Typography



const articleEntries = [
  { slug: "beautiful-python-1", title: "Beautiful Python - Part 1", thumbnailLink: "van-diagram-thumb.png" } as unknown as ArticleDummy,
  { slug: "beautiful-python-2", title: "Beautiful Python - Part 2", thumbnailLink: "recursion-thumb.png" } as unknown as ArticleDummy,
  { slug: "five-best-terminal-plugins", title: "5 Greatest Terminal Plugins", thumbnailLink: "plugin-thumb.png" } as unknown as ArticleDummy,
  { slug: "pyspread", title: "Spreadsheets with Functional Python", thumbnailLink: "higher-order-function-thumb.png" } as unknown as ArticleDummy,
]

const employmentStatus = "actively seeking"
const location = "San Francisco"

const projectEntries = [
  { title: "Optimal Gene Sequence Matching", summary: "This research project matches two gene-sequences and solves an optimization to find the least common operations to equate one to the other. Possible operations on the dna are (ADD, REMOVE, UPDATE) and the program itself uses a recursive backtracking technique. The code (hosted on github) contains an simple, optimized, and multi-processing solution", code: "this is my code", gifLink: "gene-sequence.gif", githubLink: "https://www.github.com/bcopp/gene-sequences/optimized" } as unknown as ProjectDummy,
  { title: "BrendanCopp.com", summary: "This website was created over the course of two weeks using a react frontend and flask backend. It showcases some of my favorite projects and excursions into programmatic concepts. All of the components were written and styled by hand with the exclusion of the nav-bar, carousel (ant design) and markdown parsers.", code: "", gifLink: "this-website.gif", githubLink: "https://www.github.com/bcopp/bcopp-blog" } as unknown as ProjectDummy,
  { slug: "beautiful-python-1", title: "Non Repeating Permutations", summary: "This project shows the pros and cons of algorithmic construction using functional and imperative paradigms. Considering a list of n arrays containing n elements we find the unique permutations of their elements. This problem is explored thoroughly in my article \"18 Beautiful Lines of Python\" where we discuss several different reasoning patterns and finish with a concise program leveraging a Lisp-like cons abstraction. The lesson learned here was that beauty is in the eye of the beholder.", code: "this is my code", gifLink: "permutations.gif", githubLink: "https://www.github.com/bcopp/permutations" } as unknown as ProjectDummy,
]

const Home: React.FC<{}> = (props: any) => {
  return (
    <div className="pattern-background">
      <Space direction="vertical" align="center">
        <TitleSplash />
        <div style={{ maxWidth: "1000px" }}>
          <Divider />
          <div ><h2>My Latest Projects</h2></div>
          <ProjectsCarousel entries={projectEntries} />
          <Divider />
          <AboutMe employmentStatus={employmentStatus} location={location} />
          <Divider />
          <ArticleSummary entries={articleEntries} />
          <Divider />
          <ContactMe />
        </div>
      </Space>
    </div>
  )
}

// Remove down-arrows when scroll event occurs
const TitleSplash: React.FC<{}> = (props: any) => {

  return (
      <div className="parallax" >
        <div className="fadeInAndOut" style={{ position: "relative", top: "40%", left: "0%", display: "inline-block" }}>
          <DownOutlined style={{ color: "antiquewhite" }}></DownOutlined>
        </div>
        <h1 className="fade-in-title" style={{ color: "antiquewhite", fontSize: "3.5em" }}>Brendan Copp</h1>
        <div className="fadeInAndOut" style={{ position: "relative", top: "40%", left: "0%", display: "inline-block" }}>
          <DownOutlined style={{ color: "antiquewhite" }}></DownOutlined>
        </div>
      </div>

  )
}

export default Home