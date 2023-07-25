const { createProxyMiddleware } = require('http-proxy-middleware');
const instance = require('./src/axios').default;

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080/',
            changeOrigin: true,
        })
    );
};
