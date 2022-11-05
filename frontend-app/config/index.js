const config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
}

if (!config.apiBaseUrl) throw new Error('NEXT_PUBLIC_API_BASE_URL is not defined')

export default config