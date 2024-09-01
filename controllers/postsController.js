import markdownService from '../services/getMarkdownService'

const getAllPosts = async () => {
  const posts = await markdownService.getAllMarkdownPosts()
  return posts
}

export default {
  getAllPosts: getAllPosts
}