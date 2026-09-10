/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        ecom: {
          dark: '#0a0f1d',
          darker: '#060a14',
          cardDark: '#0d1527',
          purple: '#8b5cf6',
          violet: '#7c3aed',
          neonGreen: '#4ade80',
          pastelBlue: '#E5F2FC',
          pastelPink: '#F7E8F6',
          pastelMint: '#E3F5F4',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow-blue': '0 0 50px -10px rgba(14, 165, 233, 0.4)',
        'glow-purple': '0 0 50px -10px rgba(139, 92, 246, 0.4)',
      },
      backgroundImage: {
        'category-gradient': 'linear-gradient(90deg, #bbf2fc 0%, #cce5fe 25%, #e1dbff 55%, #eed8f7 80%, #cfe3ff 100%)',
      }
    },
  },
  plugins: [],
}
