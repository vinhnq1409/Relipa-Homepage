import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor
} from 'assets/jss/nextjs-material-dashboard.js'

const headerStyle = () => ({
  appBar: {
    position: 'relative',
    width: '100%',
    color: grayColor[7]
  },
  container: {
    ...container,
    minHeight: '50px'
  },
  title: {
    ...defaultFont,
    letterSpacing: 'unset',
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    margin: '0',
    '&:hover,&:focus': {
      background: 'transparent'
    }
  },
  appResponsive: {
    top: '8px'
  },
  primary: {
    backgroundColor: primaryColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor[0],
    color: whiteColor,
    ...defaultBoxShadow
  },
  demo: {
    position: 'fixed',
    backgroundColor: 'white',
    width: 'calc(100% - 260px)',
    padding: '10px 0',
    maxWidth: 'inherit',
    borderBottom: ' 1px solid #e7e7e7'
  }
})

export default headerStyle
