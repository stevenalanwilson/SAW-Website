const sentry = {
  captureMessage: jest.fn()
}
sentry.captureMessage.mockReturnValueOnce('Error getting article content type.')

module.exports = sentry
