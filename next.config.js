// next.config.js

module.exports = {
    webpack(config) {
        config.module.rules.push(
            {
                test: /\.svg$/,
                issuer: {
                    test: /\.(js|ts)x?$/,
                },
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]',
                            publicPath: `/_next/static/images/`,
                            outputPath: 'static/images',
                        },
                    },
                ],
            },
        );

        return config;
    },
};
