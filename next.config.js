const million = require('million/compiler')

const nextConfig = {}

const millionConfig = {
    auto: {
        threshold: 0.05,
        skip: ['useBadHook', /badVariable/g],
    },
}

module.exports = million.next(nextConfig, millionConfig)
