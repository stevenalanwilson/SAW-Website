import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { sanitizeSlug, validateFilePath, createSlug } from '../utils'
import type { MarkdownPost, MarkdownService, PostMetaData, StaticPath } from '@/types/posts'

/**
 * Retrieves all markdown posts from the 'posts' directory.
 * Posts are automatically sorted by date in descending order (newest first).
 *
 * @returns An array of markdown posts with slugs and metadata
 * @throws Error if there is an error while retrieving the markdown posts
 */
const getAllMarkdownPosts = (): MarkdownPost[] => {
  const markdownFilesInDirectory = fs.readdirSync('posts')
  const posts = loadAllMarkdownFilesAndCreatePosts(markdownFilesInDirectory)

  // Sort posts by date in descending chronological order (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.postMetaData.date)
    const dateB = new Date(b.postMetaData.date)
    return dateB.getTime() - dateA.getTime()
  })
}

/**
 * Loads all markdown files and creates posts from them.
 * Reads file content and extracts metadata using gray-matter.
 *
 * @param files - The array of markdown file names
 * @returns The array of posts with postSlug and postMetaData
 */
const loadAllMarkdownFilesAndCreatePosts = (files: string[]): MarkdownPost[] =>
  files.map((fileName) => {
    const postSlug = createPostSlug(fileName)
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const { data } = matter(readFile)
    return {
      postSlug,
      postMetaData: data as PostMetaData,
    }
  })

/**
 * Generates a URL-safe slug for a post file by removing the .md extension.
 * Uses the centralized utility function.
 *
 * @param postFile - The file name of the post (e.g., 'my-post.md')
 * @returns The slug generated from the post file (e.g., 'my-post')
 */
const createPostSlug = (postFile: string): string => createSlug(postFile)

/**
 * Generates an array of static paths for Next.js static site generation.
 * Used in getStaticPaths to pre-render all blog post pages.
 *
 * @param markdownFiles - The array of markdown file names
 * @returns An array of objects containing the params for each static path
 */
const loadMarkdownStaticPaths = (markdownFiles: string[]): StaticPath[] => {
  return markdownFiles.map((fileName) => ({
    params: {
      slug: createPostSlug(fileName),
    },
  }))
}

/**
 * Safely loads a markdown file using the slug with comprehensive security protection.
 * Implements multiple security layers using centralized utilities:
 * - HTML entity sanitization
 * - Character whitelist validation (alphanumeric, hyphens, underscores only)
 * - Path traversal attack prevention
 * - File existence verification
 *
 * @param slug - The slug of the post to load (e.g., 'my-blog-post')
 * @returns The raw markdown content of the file
 * @throws Error if the slug contains invalid characters, path traversal attempts, or file not found
 * @example
 * const content = loadMarkdownFileUsingSlug('introduction-to-react')
 * // Returns: '# Introduction to React\n\nReact is...'
 */
const loadMarkdownFileUsingSlug = (slug: string): string => {
  // Sanitize and validate the slug using utility function
  const sanitizedSlug = sanitizeSlug(slug)

  // Construct the file path and validate it's within the posts directory
  const postsDir = path.join(process.cwd(), 'posts')
  const fileName = `${sanitizedSlug}.md`
  const resolvedPath = validateFilePath(postsDir, fileName)

  // Check if file exists
  if (!fs.existsSync(resolvedPath)) {
    throw new Error('Post not found')
  }

  return fs.readFileSync(resolvedPath, 'utf-8')
}

/**
 * Markdown service providing functions for loading and processing markdown blog posts.
 * Includes security features like path traversal protection and input sanitization.
 */
const markdownService: MarkdownService = {
  loadMarkdownFileUsingSlug,
  loadMarkdownStaticPaths,
  createPostSlug,
  loadAllMarkdownFilesAndCreatePosts,
  getAllMarkdownPosts,
}

export default markdownService
