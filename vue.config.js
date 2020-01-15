/**
 * 功能描述：
 * 2020/01/15
 * 作者：win
 */
const Version = new Date().getTime();
module.exports = {
    /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
    publicPath: "./", //构建好的文件输出在哪里
    /* 输出文件目录：在npm run build时，生成文件的目录名称 */
    outputDir: "dist",
    /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "assets",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: true,
    /* 代码保存时进行eslint检测 */
    lintOnSave: true,
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        host: "0.0.0.0",
        port: 8088,
        https: false,
        hotOnly: false,
        proxy: {
            "/api": {
                target: "http://7.2.2.2/",
                ws: false, //如果要代理websocket,
                changeOrigin: true //是否修改域名
            }
        }
    },
    configureWebpack: {
        plugins: [],
        /*打包配置版本号*/
        output: {
            /*模块名称+时间戳*/
            filename: `[name].${Version}.js`,
            chunkFilename: `[name].${Version}.js`
        },
        resolve: {
            alias: {
                assets: "@/assets",
                components: "@/components",
                views: "@/views"
            }
        }
    }
};
