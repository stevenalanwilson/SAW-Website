import utils from '../../utils'
import quotes from '../../config/footerQuotes'

describe('Ensure the footer random quote generator', () => {
  test('returns a string', () => {
    const randomQuote = utils.randomQuote(quotes)
    expect(typeof randomQuote).toBe('string')
  })
})
