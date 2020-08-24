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
    complamentaryBckground: '#4E412D',
    complamentaryDarkest: '#33240C',
    complamentaryDark: '#4E412D',
    complamentaryBright: '#776952',
    complamentaryBrightest: '#A79579',
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
  animations: {
    fadeIn: fadeInAnimation,
    fadeInDown: fadeInDownAnimation
  }
}
