const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const nextTranslate = require('next-translate')
module.exports = nextTranslate(withPWA({
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
