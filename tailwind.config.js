/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00d4ff',
          dark: '#00a8cc',
          light: '#33ddff',
        },
        accent: {
          DEFAULT: '#00ff88',
          dark: '#00cc6a',
          light: '#33ffaa',
        },
        cyber: {
          blue: '#00d4ff',
          green: '#00ff88',
          teal: '#00ffcc',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 30px rgba(0, 212, 255, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.3)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}