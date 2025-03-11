// next.config.mjs
import withPWA from 'next-pwa';

console.log('Configuring image domains:', ['localhost', 'api-digilabs.onrender.com']);

export default withPWA({
  dest: 'public',
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
    imageDomains: ['localhost', 'api-digilabs.onrender.com'],
  },
});
