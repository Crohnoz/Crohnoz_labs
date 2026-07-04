/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'monospace'],
      },
      colors: {
        ink: '#0B0F14',
        graphite: '#111827',
        midnight: '#0D151C',
        terminal: '#10B981',
        mintlab: '#10B981',
        datalab: '#38BDF6',
        cobaltlab: '#2563EB',
        cyanlab: '#38BDF6',
        bluelab: '#38BDF6',
        violetlab: '#7C3AED',
        amberlab: '#FBBF24',
      },
      boxShadow: {
        glow: '0 0 48px rgba(16, 185, 129, 0.22)',
        card: '0 26px 90px rgba(0, 0, 0, 0.50)',
        elevated: '0 32px 120px rgba(0, 0, 0, 0.56)',
      },
      backgroundImage: {
        'radial-lab': 'radial-gradient(circle at top left, rgba(16, 185, 129, 0.24), transparent 32%), radial-gradient(circle at bottom right, rgba(56, 189, 246, 0.13), transparent 35%)',
        'premium-lab': 'radial-gradient(circle at 18% 0%, rgba(16, 185, 129, 0.22), transparent 34rem), radial-gradient(circle at 90% 18%, rgba(56, 189, 246, 0.14), transparent 30rem), linear-gradient(135deg, #0B0F14, #111827 48%, #0B0F14)',
      },
    },
  },
  plugins: [],
};
