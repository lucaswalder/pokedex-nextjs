/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
},
}

module.exports = nextConfig
