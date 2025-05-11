// next.config.js
module.exports = {
    publicRuntimeConfig: {
        PRODUCTION: process.env.NODE_ENV === 'development',
        API_PRODUCTION: 'https://seo-blog-backend.vercel.app', // Replace with your production API URL
        API_DEVELOPMENT: 'https://seo-blog-backend.vercel.app', // Development API URL
        APP_NAME: 'SEO Blog', // Replace with your app name,
        DOMAIN_PRODUCTION: "https://your-production-ui.com",
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
