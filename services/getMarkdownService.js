import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import validator from 'validator';


/**
 * Retrieves all markdown posts from the 'posts' directory.
 *
 * @returns {Array} An array of markdown posts.
 * @throws {Error} If there is an error while retrieving the markdown posts.
 */

const getAllMarkdownPosts = () => {
  const markdownFilesInDirectory = fs.readdirSync('posts')
  return loadAllMarkdownFilesAndCreatePosts(markdownFilesInDirectory)
}

/**
 * Loads all markdown files and creates posts.
 *
 * @param {Array<string>} files - The array of file names.
 * @returns {Array<Object>} - The array of posts with postSlug and postMetaData.
 */

const loadAllMarkdownFilesAndCreatePosts = files => files.map((fileName) => {
  const postSlug = createPostSlug(fileName)
  const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8')
  const { data: postMetaData } = matter(readFile)
  return {
    postSlug,
    postMetaData
  };
})

/**
 * Generates a slug for a post file.
 *
 * @param {string} postFile - The file name of the post.
 * @returns {string} The slug generated from the post file.
 */

const createPostSlug = postFile => postFile.replace('.md', '')

/**
 * Generates an array of static paths for markdown files.
 *
 * @param {string[]} markdownFiles - The array of markdown file names.
 * @returns {Object[]} - An array of objects containing the params for each static path.
 */

const loadMarkdownStaticPaths = markdownFiles => {
  return markdownFiles.map((fileName) => ({
    params: {
      slug: createPostSlug(fileName) 
    }
  }));
}

/**
 * Safely loads a markdown file using the slug with path traversal protection.
 *
 * @param {string} slug - The slug of the post to load.
 * @returns {string} - The content of the markdown file.
 * @throws {Error} - If the slug contains invalid characters or path traversal attempts.
 */
const loadMarkdownFileUsingSlug = slug => {
  // Sanitize HTML entities
  const sanitizedSlug = validator.escape(slug);

  // Validate that slug only contains safe characters (alphanumeric, hyphens, underscores)
  if (!/^[a-zA-Z0-9_-]+$/.test(sanitizedSlug)) {
    throw new Error('Invalid slug: contains unsafe characters');
  }

  // Construct the file path
  const postsDir = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDir, `${sanitizedSlug}.md`);

  // Resolve the absolute path and verify it's within the posts directory
  const resolvedPath = path.resolve(filePath);
  const resolvedPostsDir = path.resolve(postsDir);

  if (!resolvedPath.startsWith(resolvedPostsDir)) {
    throw new Error('Invalid slug: path traversal attempt detected');
  }

  // Check if file exists
  if (!fs.existsSync(resolvedPath)) {
    throw new Error('Post not found');
  }

  return fs.readFileSync(resolvedPath, 'utf-8');
}
export default {
  loadMarkdownFileUsingSlug: loadMarkdownFileUsingSlug,
  loadMarkdownStaticPaths: loadMarkdownStaticPaths,
  createPostSlug: createPostSlug,
  loadAllMarkdownFilesAndCreatePosts: loadAllMarkdownFilesAndCreatePosts,
  getAllMarkdownPosts: getAllMarkdownPosts
};


