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
    backgroundColor: 'white',
    boxShadow: 'none',
    borderBottom: '0',
    marginBottom: '0',
    position: 'relative',
    width: '100%',
    zIndex: '1029',
    color: grayColor[7],
    border: '0',
    borderRadius: '3px',
    transition: 'all 150ms ease 0s',
    minHeight: '50px',
    display: 'block'
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
  //style breadcrumb
  Breadcrumbs: {
    display: 'flex',
    justifyContent: 'space-between ',
    paddingLeft: '30px',
    paddingRight: '15px',
    marginTop: '10px'
  }
})

export default headerStyle
