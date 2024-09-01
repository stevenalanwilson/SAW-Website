import fs from 'fs';
import markdownServive  from '../../services/getMarkdownService'

describe('createPostSlug', () => {
  test('returns the slug without the .md extension', () => {
    const postFile = 'example-post.md'
    const expectedSlug = 'example-post'
    const actualSlug = markdownServive.createPostSlug(postFile)
    expect(actualSlug).toBe(expectedSlug)
  })

  test('returns the slug as it is if there is no .md extension', () => {
    const postFile = 'example-post'
    const expectedSlug = 'example-post'
    const actualSlug = markdownServive.createPostSlug(postFile)
    expect(actualSlug).toBe(expectedSlug)
  })
})

xdescribe('loadAllMarkdownFilesAndCreatePosts', () => {
  test('returns an array of posts with postSlug and postMetaData', async () => {
    const files = ['post1.md', 'post2.md', 'post3.md']
    const expectedPosts = [
      {
        postSlug: 'post1',
        postMetaData: { /* metadata for post1 */ }
      },
      {
        postSlug: 'post2',
        postMetaData: { /* metadata for post2 */ }
      },
      {
        postSlug: 'post3',
        postMetaData: { /* metadata for post3 */ }
      }
    ]
    const actualPosts = await markdownServive.loadAllMarkdownFilesAndCreatePosts(files)
    expect(actualPosts).toEqual(expectedPosts)
  })

  test('returns an empty array if no files are provided', async () => {
    const files = []
    const expectedPosts = []
    const actualPosts = await markdownServive.loadAllMarkdownFilesAndCreatePosts(files)
    expect(actualPosts).toEqual(expectedPosts)
  })
})

xdescribe('getAllMarkdownPosts', () => {
  test('returns an array of markdown posts', async () => {
    const expectedPosts = [
      {
        postSlug: 'post1',
        postMetaData: { /* metadata for post1 */ }
      },
      {
        postSlug: 'post2',
        postMetaData: { /* metadata for post2 */ }
      },
      {
        postSlug: 'post3',
        postMetaData: { /* metadata for post3 */ }
      }
    ];

    // Mocking fs.readdirSync to return an array of markdown files
    jest.spyOn(fs, 'readdirSync').mockReturnValue(['post1.md', 'post2.md', 'post3.md']);

    // Mocking loadAllMarkdownFilesAndCreatePosts to return the expected posts
    jest.spyOn(markdownServive, 'loadAllMarkdownFilesAndCreatePosts').mockResolvedValue(expectedPosts);

    const actualPosts = await markdownServive.getAllMarkdownPosts();

    expect(actualPosts).toEqual(expectedPosts);
    expect(fs.readdirSync).toHaveBeenCalledWith('posts');
    // expect(markdownServive.loadAllMarkdownFilesAndCreatePosts).toHaveBeenCalledWith(['post1.md', 'post2.md', 'post3.md']);

    // Restoring the original implementations
    fs.readdirSync.mockRestore();
    markdownServive.loadAllMarkdownFilesAndCreatePosts.mockRestore();
  });

  test('throws an error if there is an error while retrieving the markdown posts', async () => {
    const expectedError = new Error('Failed to retrieve markdown posts');

    // Mocking fs.readdirSync to throw an error
    jest.spyOn(fs, 'readdirSync').mockImplementation(() => {
      throw expectedError;
    });

    await expect(markdownServive.getAllMarkdownPosts()).rejects.toThrow(expectedError);

    expect(fs.readdirSync).toHaveBeenCalledWith('posts');

    // Restoring the original implementation
    fs.readdirSync.mockRestore();
  });
});