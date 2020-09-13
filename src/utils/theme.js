import { keyframes } from 'styled-components'
import { fadeIn, fadeInDown } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`
const fadeInDownAnimation = keyframes`${fadeInDown}`

export const theme = {
  colors: {
    white: '#ffffff',
    primaryBackground: '#1F2833',
    primaryBackgroundLight: '#1d252f',
    primaryDarkest: '#0A1421',
    primaryDark: '#141F2D',
    primaryBright: '#38424E',
    primaryBrightest: '#525E6D',
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
  sizes: [0, 20, 40, 60, 80, 100, 120, 160, 200, 240, 280, 320, 360, 400, 800, 1200],
  spaces: [0, 2, 4, 8, 16, 32, 64, 128, 256],
  radii: [0, 5, 10, 15, 20, 30, 40],
  animations: {
    fadeIn: fadeInAnimation,
    fadeInDown: fadeInDownAnimation
  },
}
