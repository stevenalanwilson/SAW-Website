import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import validator from 'validator'

/**
 * @typedef {Object} PostMetaData
 * @property {string} title - Post title
 * @property {string} date - Post publication date
 * @property {string} summary - Post summary/excerpt
 * @property {string} thumbnail - Post thumbnail image URL
 * @property {string} [author] - Post author
 */

/**
 * @typedef {Object} MarkdownPost
 * @property {string} postSlug - URL-safe slug for the post
 * @property {PostMetaData} postMetaData - Post metadata from frontmatter
 */

/**
 * Retrieves all markdown posts from the 'posts' directory.
 * Posts are automatically sorted by date in descending order (newest first).
 *
 * @returns {MarkdownPost[]} An array of markdown posts with slugs and metadata
 * @throws {Error} If there is an error while retrieving the markdown posts
 */
const getAllMarkdownPosts = () => {
  const markdownFilesInDirectory = fs.readdirSync('posts')
  const posts = loadAllMarkdownFilesAndCreatePosts(markdownFilesInDirectory)

  // Sort posts by date in descending chronological order (newest first)
  return posts.sort((a, b) => {
    const dateA = new Date(a.postMetaData.date)
    const dateB = new Date(b.postMetaData.date)
    return dateB - dateA
  })
}

/**
 * Loads all markdown files and creates posts from them.
 * Reads file content and extracts metadata using gray-matter.
 *
 * @param {string[]} files - The array of markdown file names
 * @returns {MarkdownPost[]} The array of posts with postSlug and postMetaData
 */
const loadAllMarkdownFilesAndCreatePosts = (files) =>
  files.map((fileName) => {
    const postSlug = createPostSlug(fileName)
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const { data: postMetaData } = matter(readFile)
    return {
      postSlug,
      postMetaData,
    }
  })

/**
 * Generates a URL-safe slug for a post file by removing the .md extension.
 *
 * @param {string} postFile - The file name of the post (e.g., 'my-post.md')
 * @returns {string} The slug generated from the post file (e.g., 'my-post')
 */
const createPostSlug = (postFile) => postFile.replace('.md', '')

/**
 * @typedef {Object} StaticPath
 * @property {Object} params - Path parameters
 * @property {string} params.slug - Post slug for dynamic routing
 */

/**
 * Generates an array of static paths for Next.js static site generation.
 * Used in getStaticPaths to pre-render all blog post pages.
 *
 * @param {string[]} markdownFiles - The array of markdown file names
 * @returns {StaticPath[]} An array of objects containing the params for each static path
 */
const loadMarkdownStaticPaths = (markdownFiles) => {
  return markdownFiles.map((fileName) => ({
    params: {
      slug: createPostSlug(fileName),
    },
  }))
}

/**
 * Safely loads a markdown file using the slug with comprehensive security protection.
 * Implements multiple security layers:
 * - HTML entity sanitization
 * - Character whitelist validation (alphanumeric, hyphens, underscores only)
 * - Path traversal attack prevention
 * - File existence verification
 *
 * @param {string} slug - The slug of the post to load (e.g., 'my-blog-post')
 * @returns {string} The raw markdown content of the file
 * @throws {Error} If the slug contains invalid characters, path traversal attempts, or file not found
 * @example
 * const content = loadMarkdownFileUsingSlug('introduction-to-react')
 * // Returns: '# Introduction to React\n\nReact is...'
 */
const loadMarkdownFileUsingSlug = (slug) => {
  // Sanitize HTML entities
  const sanitizedSlug = validator.escape(slug)

  // Validate that slug only contains safe characters (alphanumeric, hyphens, underscores)
  if (!/^[a-zA-Z0-9_-]+$/.test(sanitizedSlug)) {
    throw new Error('Invalid slug: contains unsafe characters')
  }

  // Construct the file path
  const postsDir = path.join(process.cwd(), 'posts')
  const filePath = path.join(postsDir, `${sanitizedSlug}.md`)

  // Resolve the absolute path and verify it's within the posts directory
  const resolvedPath = path.resolve(filePath)
  const resolvedPostsDir = path.resolve(postsDir)

  if (!resolvedPath.startsWith(resolvedPostsDir)) {
    throw new Error('Invalid slug: path traversal attempt detected')
  }

  // Check if file exists
  if (!fs.existsSync(resolvedPath)) {
    throw new Error('Post not found')
  }

  return fs.readFileSync(resolvedPath, 'utf-8')
}
/**
 * Markdown service providing functions for loading and processing markdown blog posts.
 * Includes security features like path traversal protection and input sanitization.
 *
 * @namespace markdownService
 */
export default {
  /**
   * Safely loads markdown file content by slug with security protections.
   * @type {Function}
   */
  loadMarkdownFileUsingSlug: loadMarkdownFileUsingSlug,
  /**
   * Generates static paths for Next.js SSG.
   * @type {Function}
   */
  loadMarkdownStaticPaths: loadMarkdownStaticPaths,
  /**
   * Creates URL slug from filename.
   * @type {Function}
   */
  createPostSlug: createPostSlug,
  /**
   * Loads all markdown files and extracts metadata.
   * @type {Function}
   */
  loadAllMarkdownFilesAndCreatePosts: loadAllMarkdownFilesAndCreatePosts,
  /**
   * Retrieves all posts sorted by date (newest first).
   * @type {Function}
   */
  getAllMarkdownPosts: getAllMarkdownPosts,
}
