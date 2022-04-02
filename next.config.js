const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
<<<<<<< HEAD
const { i18n } = require('./next-i18next.config');
module.exports = withPWA({
  i18n,
=======
const nextTranslate = require('next-translate')
module.exports = nextTranslate(withPWA({
>>>>>>> 6f4e2826b05d51fbf3b76c85514e28a0689c6a82
  pwa: {
    dest: 'public',
    register: true,
    runtimeCaching,
    buildExcludes: [/middleware-manifest\.json$/],
    scope: '/',
    sw: 'service-worker.js',
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },

  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  images: {
    domains: [
      'images.unsplash.com',
      'img.icons8.com',
      'i.ibb.co',
      'i.postimg.cc',
      'fakestoreapi.com',
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      '',
    ],
  },
}));

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

// module.exports = withBundleAnalyzer({});
