import fetchContentTypeService from '../../services/fetchContentType'

let mockClient = {}
let mockSentry = {}
const response = {
  status: 'ok'
}

beforeAll(() => {
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
    const articleContentType = await setupfetchContentTypeServiceTest(response, 'article', mockClient, mockSentry)
    expect(articleContentType).toEqual(
      expect.objectContaining({
        status: 'ok'
      })
    )
    expect(mockSentry.captureMessage).toBeCalledTimes(0)
  })

  test('Logging is called when the API call fails', async () => {
    const articleContentType = await setupfetchContentTypeServiceTest(null, 'article', mockClient, mockSentry)
    expect(articleContentType).toEqual(undefined)
    expect(mockSentry.captureMessage).toHaveBeenCalledTimes(1)
  })
})

const setupfetchContentTypeServiceTest = async (response, contentType, client, sentry) => {
  mockClient.getContentType.mockReturnValueOnce(response)
  return fetchContentTypeService(contentType, client, sentry)
}
