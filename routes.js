import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import Notifications from '@material-ui/icons/Notifications'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'
import AssignmentIcon from '@material-ui/icons/Assignment'
import PagesIcon from '@material-ui/icons/Pages'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import CodeIcon from '@material-ui/icons/Code'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import WorkIcon from '@material-ui/icons/Work'
import HomeIcon from '@material-ui/icons/Home'

const dashboardRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: Dashboard,
    layout: '/admin'
  },
  {
    path: '/blogs',
    name: 'Blogs',
    icon: ChromeReaderModeIcon,
    layout: '/admin'
  },
  {
    path: '/news',
    name: 'News',
    icon: AssignmentIcon,
    layout: '/admin'
  },
  {
    path: '/static_page',
    name: 'Static page',
    icon: PagesIcon,
    layout: '/admin'
  },
  {
    path: '/account',
    name: 'Account',
    icon: SupervisorAccountIcon,
    layout: '/admin'
  },
  {
    path: '/dev-info',
    name: 'DEV Info',
    icon: CodeIcon,
    layout: '/admin'
  },
  {
    path: '/partner',
    name: 'Partner',
    icon: GroupWorkIcon,
    layout: '/admin'
  },
  {
    path: '/project',
    name: 'Project',
    icon: WorkIcon,
    layout: '/admin'
  },
  {
    path: '/client',
    name: 'Client',
    icon: HomeIcon,
    layout: '/admin'
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: Person,
    layout: '/admin'
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
    layout: '/admin'
  }
]

export default dashboardRoutes
