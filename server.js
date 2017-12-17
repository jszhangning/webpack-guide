const Koa = require('koa'),
    ServeStatic = require('koa-static'),
    KoaWebpack = require('koa-webpack'),
    config = require('./webpack.config'),
    {output, server, buildDir} = require("./webpack.variable"),
    app = new Koa();

config.entry.unshift("webpack-hot-middleware/client?reload=true");

app.use(KoaWebpack({
    config,
    dev: {
        noInfo: true,

        publicPath: output.publicPath,
    },
}));

app.use(ServeStatic(buildDir));

app.listen(server.post, () => {
    console.log(`服务器启动成功：${server.host + ":" +server.post}`)
});
