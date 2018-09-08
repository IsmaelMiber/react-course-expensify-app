const path = require("path");
const projectPath = path.join(__dirname, "public", "dist");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CSSExtract = new ExtractTextPlugin("styles.css");

module.exports = (env) => {
    const isProduction = env === 'production';
    return {
        entry: "./src/app.js",
        output: {
            path: projectPath,
            filename: "bundle.js",
        },
        module: {
            rules: [
                {
                    loader: "babel-loader",
                    test: /\.js$/,
                    exclude: /node_modules/,
                },
                {
                    test: /\.s?css$/,
                    use: CSSExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                },
                            }
                        ]
                    }),
                }
            ],
        },
        devtool: isProduction ? "source-map" : "inline-source-map",
        plugins: [
            CSSExtract
        ],
        devServer: {
            contentBase: path.join(__dirname, "public"),
            historyApiFallback: true,
            publicPath: "/dist/"
        },
    };
};