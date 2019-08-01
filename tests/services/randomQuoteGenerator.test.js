import randomQuoteGenerator from '../../services/randomQuoteGenerator';
import quotes from '../../config/footerQuotes';

describe('Ensure the footer random quote generator',  () => {
    test('returns a string', () => {
        const randomQuote = randomQuoteGenerator(quotes);
        expect(typeof randomQuote).toBe('string');
    });
})