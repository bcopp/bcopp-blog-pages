export interface ArticleMeta {
  slug: string,

  title: string,
  subtitle: string,
  //content
  tags: string,

  githubHint: string,
  githubLink: string,
  nextArticleSlug: string,
  thumbnailLink: string,
  photoLink: string,
  gifLink: string,

  published: string,
  timestamp: string,

  code?: string,
  summary?: string,
}

export interface ArticleDummy {
  slug: string,

  title: string,
  
  thumbnailLink?: string,
}

export interface ProjectDummy {
  slug?: string,

  title: string,
  summary: string,

  code: string,
  gifLink:string,
  githubLink: string,
}

export interface ArticleAll extends ArticleMeta {
  content: string,
}