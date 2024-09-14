const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    content: path.join(__dirname, "src/content")
  },
  output: {
    path: path.join(__dirname, "build/js"),
    filename: "[name].js"
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "public", to: "../" }
      ],
    }),
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        exclude: /node_modules/,
        test: /\.(scss|css)$/,
        use: [
          {
            loader: "style-loader" // Creates style nodes from JS strings
          },
          {
            loader: "css-loader" // Translates CSS into CommonJS
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugins: [
                  "tailwindcss",
                  "autoprefixer",
                ],
              },
            },
          },
          {
            loader: "sass-loader" // Compiles Sass to CSS
          },
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  }
};
