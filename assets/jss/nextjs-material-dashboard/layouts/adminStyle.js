import { drawerWidth, transition, container } from 'assets/jss/nextjs-material-dashboard.js'

const appStyle = (theme) => ({
  wrapper: {
    position: 'relative',
    top: '0',
    height: '100vh'
  },
  mainPanel: {
    backgroundColor: '#f8f9fc',
    padding: '2%',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    ...transition,
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch'
  },
  content: {
<<<<<<< HEAD
    // marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
=======
    marginTop: '70px',
    padding: '30px 15px',
    minHeight: 'calc(100vh - 123px)'
>>>>>>> d7776f6 (remove lib don't use, style dashboard)
  },
  container,
  map: {
    marginTop: '70px'
  }
})

export default appStyle
