import { keyframes } from 'styled-components'
import { fadeIn, fadeInDown } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`
const fadeInDownAnimation = keyframes`${fadeInDown}`

export const theme = {
  colors: {
    background: '#1F2833',
    darkest: '#0A1421',
    dark: '#141F2D',
    bright: '#38424E',
    brightest: '#525E6D',
    white: '#ffffff',
    complementaryBackground: '#4E412D',
    complementaryDarkest: '#33240C',
    complementaryDark: '#4E412D',
    complementaryBright: '#776952',
    complementaryBrightest: '#A79579',
    wonMatch: '#2C546D',
    lostMatch: '#6F2323'
  },
  fontWeight: {
    thin: 300,
    regular: 400,
    bold: 800,
  },
  fontSize: {
    small: '0.75em',
    normal: '0.875em',
    big: '1em',
    bigger: '1.125em',
    huge: '1.5em'
  },
  sizes: [0, 20, 40, 60, 80, 100, 120, 160, 200, 240, 280, 320, 360, 400],
  spaces: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  radii: [0, 5, 10, 15, 20, 30, 40],
  animations: {
    fadeIn: fadeInAnimation,
    fadeInDown: fadeInDownAnimation
  },
}
