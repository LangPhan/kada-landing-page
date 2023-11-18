import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url(https://images.unsplash.com/photo-1579758855965-a6eb0b96e727?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      },
      animation: {
        marquee: 'marquee 15s linear infinite',
        slideText: 'slideText 5s linear infinite',
        floatUp: 'floatUp 6s ease-in infinite',
        floatDown: 'floatDown 6s ease-in infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(-25%,0,0)' },
          '100%': { transform: 'translate3d(-75%,0,0)' }
        },
        slideText: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        floatUp: {
          '0%': { transform: 'translateZ(0)' },
          '50%': { transform: 'translate3d(0,-0.875rem,0)' },
          '100%': { transform: 'translateZ(0)' }
        },
        floatDown: {
          '0%': { transform: 'translateZ(0)' },
          '50%': { transform: 'translate3d(0,0.875rem,0)' },
          '100%': { transform: 'translateZ(0)' }
        }
      }
    },
  },
  plugins: [],
}
export default config
