const sentry = {
  captureMessage: jest.fn(),
}

sentry.captureMessage.mockReturnValueOnce('Error getting article content type.')

export default sentry
