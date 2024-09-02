import fs from 'fs';
import matter from 'gray-matter';
// import md from 'markdown-it';

export async function getStaticPaths() {
  try {
    
    const files = fs.readdirSync('posts');

    console.log(files);
    const paths = files.map((fileName) => ({
      params: {
        slug: fileName.replace('.md', '')
      }
    }));
    console.log(paths);

    return {
      paths,
      fallback: true
    };
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false
    };
  }
};

export async function getStaticProps({ params: { slug } }) {
  try {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);

    return {
      props: {
        frontmatter,
        content
      }
    };
  } catch (error) {
    console.error(error);

    return {
      props: {}
    };
  }
};

function Post({ frontmatter, content }) {
  return (

    <div className="prose mx-auto mt-8">
      <h1>{frontmatter.title}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: md().render(content) }} /> */}
    </div>
  );
};

export default Post;