const config = {
  apiBaseUrl: process.env.REACT_APP_NEXT_PUBLIC_API_BASE_URL,
}
config.apiBaseUrl = "http://localhost:1337"
console.log(config.apiBaseUrl)

if (!config.apiBaseUrl) throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined')

export default config