// next.config.mjs
import withPWA from 'next-pwa';

console.log('Configuring image domains:', ['localhost', 'api-digilabs.onrender.com']);

export default withPWA({
  dest: 'public',
  images: {
    domains: ['localhost', 'api-digilabs.onrender.com'],
  },
});
