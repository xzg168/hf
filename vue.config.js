module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "././" : "/",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "antd换肤";
      return args;
    });
    config.module
      .rule("js")
      .test(/\.js$/)
      .use("babel-loader")
      .loader("babel-loader");
  },
  // 关闭生产环境console
  configureWebpack(config) {
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;
    }
    // config.entry.app = ["babel-polyfill", "./src/main.js"];
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
  },
  pwa: {
    iconPaths: {
      faviconSVG: "favicon.ico",
      favicon32: "favicon.ico",
      favicon16: "favicon.ico",
      appleTouchIcon: "favicon.ico",
      maskIcon: "favicon.ico",
      msTileImage: "favicon.ico",
    },
  },
  devServer: {
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      ["/tumour"]: {
        // target: `http://192.168.80.63:8788`,
        target: `http://192.168.81.22:8788`,
        changeOrigin: true,
        // pathRewrite: {
        //   ["^/api"]: "",
        // },
      },
    },
    disableHostCheck: true,
  },
};
