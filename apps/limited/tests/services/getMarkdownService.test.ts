import fs from 'fs'
import markdownServive from '../../services/getMarkdownService'

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

describe('loadAllMarkdownFilesAndCreatePosts', () => {
  beforeEach(() => {
    // Mock fs.readFileSync to return mock markdown content
    jest.spyOn(fs, 'readFileSync').mockReturnValue(
      Buffer.from(`---
title: Test Post
date: 2024-01-15
summary: Test summary
---
# Test content`)
    )
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('returns an array of posts with postSlug and postMetaData', () => {
    const files = ['post1.md', 'post2.md', 'post3.md']
    const actualPosts = markdownServive.loadAllMarkdownFilesAndCreatePosts(files)

    expect(actualPosts).toHaveLength(3)
    expect(actualPosts[0]).toHaveProperty('postSlug', 'post1')
    expect(actualPosts[0]).toHaveProperty('postMetaData')
    expect(actualPosts[0].postMetaData).toHaveProperty('title', 'Test Post')
    expect(actualPosts[1]).toHaveProperty('postSlug', 'post2')
    expect(actualPosts[2]).toHaveProperty('postSlug', 'post3')
  })

  test('returns an empty array if no files are provided', () => {
    const files: string[] = []
    const expectedPosts: unknown[] = []
    const actualPosts = markdownServive.loadAllMarkdownFilesAndCreatePosts(files)
    expect(actualPosts).toEqual(expectedPosts)
  })
})

describe('getAllMarkdownPosts', () => {
  test('returns an array of markdown posts', () => {
    // Mocking fs.readdirSync to return an array of markdown files
    // @ts-expect-error Mocking fs method with simplified return type for test
    jest.spyOn(fs, 'readdirSync').mockReturnValue(['post1.md', 'post2.md', 'post3.md'])

    // Mock fs.readFileSync for the markdown content
    jest.spyOn(fs, 'readFileSync').mockReturnValue(
      Buffer.from(`---
title: Test Post
date: 2024-01-15
summary: Test summary
---
# Test content`)
    )

    const actualPosts = markdownServive.getAllMarkdownPosts()

    expect(actualPosts).toHaveLength(3)
    expect(actualPosts[0]).toHaveProperty('postSlug', 'post1')
    expect(actualPosts[0]).toHaveProperty('postMetaData')
    expect(fs.readdirSync).toHaveBeenCalledWith('posts')

    // Restoring the original implementations
    jest.restoreAllMocks()
  })

  test('throws an error if there is an error while retrieving the markdown posts', () => {
    const expectedError = new Error('Failed to retrieve markdown posts')

    // Mocking fs.readdirSync to throw an error
    jest.spyOn(fs, 'readdirSync').mockImplementation(() => {
      throw expectedError
    })

    expect(() => markdownServive.getAllMarkdownPosts()).toThrow(expectedError)

    expect(fs.readdirSync).toHaveBeenCalledWith('posts')

    // Restoring the original implementation
    jest.restoreAllMocks()
  })
})
