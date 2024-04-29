const million = require('million/compiler')

/** @type {import('next').NextConfig} */
const nextConfig = {}

const millionConfig = {
    auto: {
        threshold: 0.05,
        skip: ['useBadHook', /badVariable/g],
    },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')()

module.exports = process.env.ANALYZE === 'true'
    ? withBundleAnalyzer(million.next(nextConfig, millionConfig))
    : million.next(nextConfig, millionConfig)
