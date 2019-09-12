import fetchContentTypeService from '../../services/fetchContentType'

let mockClient = {}
let mockSentry = {}
const response = {
  status: 'ok'
}

beforeEach(() => {
  mockClient = {
    getContentType: jest.fn()
  }
  mockSentry = {
    captureMessage: jest.fn()
  }
  mockSentry.captureMessage.mockReturnValueOnce('Error getting article content type.')
})

describe('Ensure the fetchContentType service is working as it should', () => {
  test('Logging is not called on a successful call to the API', async () => {
    mockClient.getContentType.mockReturnValueOnce(response)
    const articleContentType = await fetchContentTypeService('article', mockClient, mockSentry)
    expect(articleContentType).toEqual(
      expect.objectContaining({
        status: 'ok'
      })
    )
    expect(mockSentry.captureMessage).toBeCalledTimes(0)
  })

  test('Logging is called when the API call fails', async () => {
    mockClient.getContentType.mockReturnValueOnce(null)
    const articleContentType = await fetchContentTypeService('article', mockClient, mockSentry)
    expect(articleContentType).toEqual(undefined)
    expect(mockSentry.captureMessage).toHaveBeenCalledTimes(1)
  })
})
