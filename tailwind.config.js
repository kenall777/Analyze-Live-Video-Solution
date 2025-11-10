/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'oklch(0.05 0 0)',
        foreground: 'oklch(0.98 0 0)',
      },
      boxShadow: {
        '2xs': '0 0px 0px 0px hsl(0 0% 0% / 0.05)',
      },
      keyframes: {
        slideUp: {
          from: { transform: 'translateY(20px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.3s ease-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
