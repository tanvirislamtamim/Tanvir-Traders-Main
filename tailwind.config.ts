import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      keyframes: {
        blobFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '33%': { transform: 'translateY(-30px) scale(1.05)' },
          '66%': { transform: 'translateY(20px) scale(0.97)' },
        },
        pulseDot: {
          '0%, 100%': { boxShadow: '0 0 0 2px rgba(34, 197, 94, 0.4)' },
          '50%': { boxShadow: '0 0 0 6px rgba(34, 197, 94, 0.15)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'blob-1': 'blobFloat 9s ease-in-out infinite',
        'blob-2': 'blobFloat 11s ease-in-out -3s infinite',
        'blob-3': 'blobFloat 10s ease-in-out -6s infinite',
        'pulse-dot': 'pulseDot 2s ease infinite',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
};
export default config;
