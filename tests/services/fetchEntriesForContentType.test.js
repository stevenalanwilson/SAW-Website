import fetchEntriesForContentType from '../../services/fetchEntriesForContentType'
import mockClient from '../../clients/contentfulClient'
import mockSentry from '../../log/sentry'

jest.mock('../../clients/contentfulClient')
jest.mock('../../log/sentry')

describe('Ensure the fetchEntriesForContentType service is working as it should', () => {
  test('Logging is not called on a successful call to the API', async () => {
    const response = {
      items: 'ok'
    }
    const entries = await setupFetchEntriesForContentType(response, 'article', mockClient, mockSentry)
    expect(entries).toEqual('ok')
    expect(mockSentry.captureMessage).toBeCalledTimes(0)
  })

  test('Logging is called when the API call fails', async () => {
    const response = {}
    const entries = await setupFetchEntriesForContentType(response, 'article', mockClient, mockSentry)
    expect(entries).toEqual(undefined)
    expect(mockSentry.captureMessage).toHaveBeenCalledTimes(1)
  })
})

const setupFetchEntriesForContentType = async (response, contentType, client, sentry) => {
  client.getEntries.mockReturnValueOnce(response)
  return fetchEntriesForContentType(contentType, client, sentry)
}
