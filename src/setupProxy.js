const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function setupProxy(app) {
    app.use(
        '/api/sanity',
        createProxyMiddleware({
            target: 'https://api.sanity.io',
            changeOrigin: true,
            pathRewrite: {
                '^/api/sanity': '',
            },
            logLevel: 'warn',
        })
    );
};
