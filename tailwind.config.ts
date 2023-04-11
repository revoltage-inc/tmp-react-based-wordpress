import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'

export default {
  content: ['{index,header,footer,404}.php', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      'noto-sans-jp': ['noto-sans-jp'],
    },
    colors: {
      transparent: colors.transparent,
      current: colors.current,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('not-first', '&:not(:first-child)')
      addVariant('not-last', '&:not(:last-child)')
    }),
    plugin(({ addUtilities }) => {
      addUtilities([])
    }),
  ],
  important: false,
} satisfies Config
