const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const CopyWebpackPlugin = require("copy-webpack-plugin");

//Режим среды
const isDevelopment = process.env.NODE_ENV === "development";
const isProduction = !isDevelopment;

//Функция оптимизации
const optimize = () => {
  const config = {};

  //если production, то минимизация css и js соответственно
  if (isProduction) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin()
    ];
  }
  return config;
};

module.exports = {
  devtool: "source-map", //связывает минимизированный и собранный код с исходным
  context: path.resolve(__dirname, "src"), //относительный путь
  mode: "development", //режим работы webpack по умолчанию
  entry: ["@babel/polyfill", "./js/index.js"], //точка входа
  output: {
    //выходной файл
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        //работа с js
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [ "@babel/preset-env", { targets: "> 0.25%, not dead, ie 11" } ]
            ]
          }
        }
      },
      {
        //работа с less - css
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              minimize: true,
              hmr: isDevelopment,
              reloadAll: true
            }
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          }
        ]
      },
      {
        //работа с url
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },
      {
        //работа с загрузкой файлов
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    ]
  },
  plugins: [
    //подключает стили и скрипты в html
    new HtmlWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProduction
      }
    }),
    //очищает папку dist
    new CleanWebpackPlugin(),
    //собирает бандл css
    new MiniCssExtractPlugin({ filename: "bundle.css" }),
    //минимизация css
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
    //зкопирует необходимые файлы
    new CopyWebpackPlugin([
      {
        from: "images/",
        to: "images"
      }
    ]),
    //минимизация картинок
    new ImageminWebpackPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: isDevelopment,
      optipng: {
        optimizationLevel: 3
      },
      jpegtran: {
        progressive: true
      }
    })
  ],
  //настройка dev-server
  devServer: {
    port: 1234,
    hot: isDevelopment
  },
  //оптимизация для production
  optimization: optimize()
};
