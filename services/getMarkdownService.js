import fs from 'fs'; // Add this line to import the fs module
import matter from 'gray-matter'; // Add this line to import the matter module
import validator from 'validator';


/**
 * Retrieves all markdown posts from the 'posts' directory.
 * 
 * @returns {Promise<Array>} A promise that resolves to an array of markdown posts.
 * @throws {Error} If there is an error while retrieving the markdown posts.
 */

const getAllMarkdownPosts = async () => {
  try {
    const markdownFilesInDirectory = fs.readdirSync('posts')
    return await loadAllMarkdownFilesAndCreatePosts(markdownFilesInDirectory)
  } catch (error) {
    throw error
  }
}

/**
 * Loads all markdown files and creates posts.
 *
 * @param {Array<string>} files - The array of file names.
 * @returns {Array<Object>} - The array of posts with postSlug and postMetaData.
 */

const loadAllMarkdownFilesAndCreatePosts = async files => files.map((fileName) => {
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

const loadMarkdownFileUsingSlug = async slug =>  {
  const sanitizedSlug = validator.escape(slug);
  return await fs.readFileSync(`posts/${sanitizedSlug}.md`, 'utf-8');

}
export default {
  loadMarkdownFileUsingSlug: loadMarkdownFileUsingSlug,
  loadMarkdownStaticPaths: loadMarkdownStaticPaths,
  createPostSlug: createPostSlug,
  loadAllMarkdownFilesAndCreatePosts: loadAllMarkdownFilesAndCreatePosts,
  getAllMarkdownPosts: getAllMarkdownPosts
};


