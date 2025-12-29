/**
 * Type definitions for markdown/post services
 */

export interface PostMetaData {
  title: string
  date: string
  summary: string
  thumbnail: string
  author?: string
  tags?: string[]
  [key: string]: unknown
}

export interface MarkdownPost {
  postSlug: string
  postMetaData: PostMetaData
}

export interface StaticPath {
  params: {
    slug: string
  }
}

export interface MarkdownService {
  loadMarkdownFileUsingSlug: (slug: string) => string
  loadMarkdownStaticPaths: (markdownFiles: string[]) => StaticPath[]
  createPostSlug: (postFile: string) => string
  loadAllMarkdownFilesAndCreatePosts: (files: string[]) => MarkdownPost[]
  getAllMarkdownPosts: () => MarkdownPost[]
}
