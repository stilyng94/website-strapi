import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})


const CustomTheme = extendTheme({
  colors: {
    black: '#16161D',
    blue: { 100: '#0E2B38', 500: '#0E2B38' }
  },
  fonts,
  breakpoints,

})

export default CustomTheme
