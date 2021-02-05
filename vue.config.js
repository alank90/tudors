module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(gif|png|jpe?g|webp|svg)$/i,
          use: [
            "file-loader",
            {
              loader: "image-webpack-loader",
              options: {
                webp: {
                  quality: 80
                }
              }
            }
          ]
        }
      ]
    }
  }
};
