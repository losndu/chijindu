/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        foreground: 'hsl(var(--foreground))',
      }
    },
  },
  plugins: [forms, typography],
} satisfies Config