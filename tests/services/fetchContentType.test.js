import fetchContentTypeService from '../../services/fetchContentType'

describe('Ensure test the fetch content services is working as it should', () => {
  test('Content type service returens an object', async () => {
    const mockClient = {
      getContentType: jest.fn()
    }

    const mockSentry = {
      captureMessage: jest.fn()
    }
    const response = {
      status: 'ok'
    }

    mockClient.getContentType.mockReturnValueOnce(response)
    mockSentry.captureMessage.mockReturnValueOnce('Error getting article content type.')
    const articleContentType = await fetchContentTypeService('article', mockClient, mockSentry)
    expect(articleContentType).toEqual(
      expect.objectContaining({
        status: 'ok'
      })
    )
  })
  test('Content type service fails properly', async () => {
    const mockClient = {
      getContentType: jest.fn()
    }
    const mockSentry = {
      captureMessage: jest.fn()
    }

    mockClient.getContentType.mockReturnValueOnce(null)

    mockSentry.captureMessage.mockReturnValueOnce('Error getting article content type.')

    const articleContentType = await fetchContentTypeService('article', mockClient, mockSentry)
    expect(articleContentType).toEqual(undefined)
    expect(mockSentry.captureMessage).toHaveBeenCalledTimes(1)
  })
})
