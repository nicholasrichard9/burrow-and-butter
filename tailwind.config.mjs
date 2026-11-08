/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Warm cream backgrounds
        cream: {
          50: '#FFFDF8',
          100: '#FFF9EE',
          200: '#FFF3DD',
          300: '#FFECC7',
          400: '#FFE4AF',
          500: '#F5D99A',
        },
        // Moss green accents
        moss: {
          50: '#F4F7F4',
          100: '#E4EBE4',
          200: '#C9D9C9',
          300: '#A3BFA3',
          400: '#7BA37B',
          500: '#5A8A5A',
          600: '#476E47',
          700: '#3A5A3A',
          800: '#2F472F',
          900: '#243824',
        },
        // Copper accents
        copper: {
          50: '#FDF6F3',
          100: '#FAEBE4',
          200: '#F5D4C7',
          300: '#E8B49E',
          400: '#D98F6F',
          500: '#C97A52',
          600: '#B8623B',
          700: '#9A4F30',
          800: '#7D412A',
          900: '#663626',
        },
        // Warm neutrals
        bark: {
          50: '#FAF8F6',
          100: '#F2EDE8',
          200: '#E5DDD3',
          300: '#D4C7B8',
          400: '#BFAC97',
          500: '#A99279',
          600: '#8F7661',
          700: '#75604F',
          800: '#5E4D40',
          900: '#4A3D33',
        },
      },
      fontFamily: {
        // Handwritten headers
        display: ['Shadows Into Light', 'Caveat', 'cursive'],
        // Warm serif body
        serif: ['Lora', 'Georgia', 'serif'],
        // Clean sans for UI elements
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Custom sizes for the display font
        'display-sm': ['1.5rem', { lineHeight: '1.3', letterSpacing: '0.02em' }],
        'display-md': ['2rem', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        'display-lg': ['2.75rem', { lineHeight: '1.1', letterSpacing: '0.01em' }],
        'display-xl': ['3.5rem', { lineHeight: '1.05', letterSpacing: '0.01em' }],
        'display-2xl': ['4.5rem', { lineHeight: '1', letterSpacing: '0' }],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.bark.800'),
            '--tw-prose-headings': theme('colors.bark.900'),
            '--tw-prose-links': theme('colors.copper.600'),
            '--tw-prose-bold': theme('colors.bark.900'),
            '--tw-prose-quotes': theme('colors.bark.700'),
            '--tw-prose-quote-borders': theme('colors.moss.400'),
            maxWidth: '70ch',
            fontFamily: theme('fontFamily.serif').join(', '),
            h1: { fontFamily: theme('fontFamily.display').join(', ') },
            h2: { fontFamily: theme('fontFamily.display').join(', ') },
            h3: { fontFamily: theme('fontFamily.display').join(', ') },
            a: {
              textDecoration: 'underline',
              textDecorationColor: theme('colors.copper.300'),
              textUnderlineOffset: '3px',
              '&:hover': {
                textDecorationColor: theme('colors.copper.500'),
              },
            },
          },
        },
      }),
      backgroundImage: {
        'paper-texture': "url('/textures/paper-subtle.png')",
      },
      boxShadow: {
        'cozy': '0 4px 20px -2px rgba(74, 61, 51, 0.12)',
        'cozy-lg': '0 8px 30px -4px rgba(74, 61, 51, 0.15)',
      },
      borderRadius: {
        'organic': '12px 4px 12px 4px',
      },
    },
  },
  plugins: [],
};
