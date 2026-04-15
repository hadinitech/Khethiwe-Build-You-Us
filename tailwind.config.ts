import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: '#120d0a',
        noir: '#1a1310',
        cream: '#f7eee5',
        beige: '#d7c3ad',
        copper: '#b6764d',
        caramel: '#d3996b',
        maroon: '#682b35',
      },
      boxShadow: {
        glow: '0 0 60px rgba(211, 153, 107, 0.28)',
        soft: '0 25px 60px rgba(10, 6, 5, 0.45)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(circle at 20% 20%, rgba(182, 118, 77, 0.18), transparent 36%), radial-gradient(circle at 80% 0%, rgba(104, 43, 53, 0.2), transparent 30%), radial-gradient(circle at 50% 100%, rgba(211, 153, 107, 0.16), transparent 40%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
