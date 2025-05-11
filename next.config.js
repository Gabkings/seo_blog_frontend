// next.config.js
module.exports = {
    publicRuntimeConfig: {
        PRODUCTION: process.env.NODE_ENV === 'development',
        API_PRODUCTION: 'http://68.183.110.168', // Replace with your production API URL
        API_DEVELOPMENT: 'http://68.183.110.168', // Development API URL
        APP_NAME: 'SEO Blog', // Replace with your app name,
        DOMAIN_PRODUCTION: "http://68.183.110.168",
        DOMAIN_DEVELOPMENT: "http://localhost:3000",
        FB_APP_ID: "ywu23ge2337",
        DISQUS_SHORTNAME: "seo-site"
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        });

        return config;
    },
};
