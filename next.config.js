/** @type {import('next').NextConfig} */
const path = require('path')
const { parsed: localEnv } = require('dotenv').config({
   allowEmptyValues: false,
   path: path.resolve(__dirname, `.env`),
})

const nextConfig = {
   env: localEnv,
   reactStrictMode: true,
   i18n: {
      locales: ["en-US", "mk-MK", "sq-AL"],
      defaultLocale: "en-US",
   },
}

module.exports = nextConfig
