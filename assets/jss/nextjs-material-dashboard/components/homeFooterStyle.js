import { defaultFont, container, primaryColor, grayColor } from 'assets/jss/nextjs-material-dashboard.js'

const homeFooterStyle = {
  footer: {
    bottom: '0',
    borderTop: '1px solid ' + grayColor[11],
    padding: '15px 0',
    ...defaultFont,
  },
  container: {
    textAlign: 'center',
  },
}
export default homeFooterStyle
