module.exports = {
    publicPath: "./", // 构建好的文件输出到哪里
    devServer: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8081/',
                changeOrigin: true,
                // secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}