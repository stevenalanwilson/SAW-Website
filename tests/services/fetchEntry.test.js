import fetchEntryService from '../../services/fetchEntry'
import mockClient from '../../clients/contentfulClient'
import mockSentry from '../../log/sentry'
import { API } from '@sentry/core'

jest.mock('../../clients/contentfulClient')
jest.mock('../../log/sentry')

describe('Ensure the fetchEntry service is working as it should', () => {
  test('Logging is not call on a successful call to the API', async () => {
    const id = 1234
    const response = {
      status: 'ok'
    }
    const entry = await setupFetchEntryServiceTest(response, id, mockClient, mockSentry)
    expect(entry).toEqual(
      expect.objectContaining({
        status: 'ok'
      })
    )
  })
  test('Loggin is called when the API call fails', async () => {
    const id = 1234
    const entry = await setupFetchEntryServiceTest(null, id, mockClient, mockSentry)
    expect(entry).toEqual(undefined)
    expect(mockSentry.captureMessage).toHaveBeenCalledTimes(1)
  })
})

const setupFetchEntryServiceTest = async (response, id, mockClient, mockSentry) => {
  mockClient.getEntry.mockReturnValueOnce(response)
  return fetchEntryService(id, mockSentry, mockClient)
}
