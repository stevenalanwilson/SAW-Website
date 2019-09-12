import fetchContentTypeService from '../../services/fetchContentType'

let mockClient = {}
let mockSentry = {}

beforeEach(() => {
  mockClient = {
    getContentType: jest.fn()
  }
  mockSentry = {
    captureMessage: jest.fn()
  }
  mockSentry.captureMessage.mockReturnValueOnce('Error getting article content type.')
})

describe('Ensure the fetch content type service is working as it should', () => {
  test('Content type service returens an object and logging is NOT called', async () => {
    const response = {
      status: 'ok'
    }
    mockClient.getContentType.mockReturnValueOnce(response)
    const articleContentType = await fetchContentTypeService('article', mockClient, mockSentry)
    expect(articleContentType).toEqual(
      expect.objectContaining({
        status: 'ok'
      })
    )
    expect(mockSentry.captureMessage).toBeCalledTimes(0)
  })

  test('Content type service fails properly and logging is called', async () => {
    mockClient.getContentType.mockReturnValueOnce(null)
    const articleContentType = await fetchContentTypeService('article', mockClient, mockSentry)
    expect(articleContentType).toEqual(undefined)
    expect(mockSentry.captureMessage).toHaveBeenCalledTimes(1)
  })
})
