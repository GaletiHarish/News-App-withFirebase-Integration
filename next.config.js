/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export'
}
const withOffline = require('next-offline');

module.exports = withOffline();

module.exports = nextConfig
