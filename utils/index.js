const production = process.env.NODE_ENV === 'production'

const randomQuote = (quotes) => quotes[Math.floor(Math.random() * (quotes.length - 1))]

export default {
  isProduction: production,
  randomQuote: randomQuote,
}
