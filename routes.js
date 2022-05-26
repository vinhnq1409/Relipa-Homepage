import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import Notifications from '@material-ui/icons/Notifications'
import MessageIcon from '@material-ui/icons/Message'
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
    path: '/dashboard',
    name: 'Dashboard',
    icon: Dashboard,
    layout: '/admin',
    role: ['Super Admin', 'Admin', 'Editor'],
  },
  {
    path: '/banner',
    name: 'Banner',
    icon: GroupWorkIcon,
    layout: '/admin',
    role: ['Super Admin', 'Admin']
  },
  {
    path: '/blogs',
    name: 'Blogs',
    icon: ChromeReaderModeIcon,
    layout: '/admin',
    role: ['Super Admin', 'Admin', 'Editor'],
  },
  {
    path: '/news',
    name: 'News',
    icon: AssignmentIcon,
    layout: '/admin',
    role: ['Super Admin', 'Admin', 'Editor'],
  },
  // {
  //   path: '/static_page',
  //   name: 'Static page',
  //   icon: PagesIcon,
  //   layout: '/admin',
  //   role: ['Super Admin', 'Admin']
  // },
  {
    path: '/case-studies',
    name: 'Case studies',
    icon: PagesIcon,
    layout: '/admin',
    role: ['Super Admin', 'Admin'],
  },
  {
    path: '/account',
    name: 'Account',
    icon: SupervisorAccountIcon,
    layout: '/admin',
    role: ['Super Admin'],
  },
  {
    path: '/tags',
    name: 'Tags',
    icon: CodeIcon,
    layout: '/admin',
    role: ['Super Admin', 'Admin'],
  },
  {
    path: '/customercomment',
    name: 'Customer Comment',
    icon: MessageIcon,
    layout: '/admin',
    role: ['Super Admin', 'Admin', 'Editor'],
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: Person,
    layout: '/admin',
    role: ['Super Admin', 'Admin', 'Editor'],
  },
  // {
  //   path: '/project',
  //   name: 'Project',
  //   icon: WorkIcon,
  //   layout: '/admin',
  //   role: ['Super Admin', 'Admin']
  // },
  // {
  //   path: '/client',
  //   name: 'Client',
  //   icon: HomeIcon,
  //   layout: '/admin',
  //   role: ['Super Admin', 'Admin']
  // },
  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   icon: Person,
  //   layout: '/admin',
  //   role: ['Super Admin', 'Admin', 'Editor']
  // },
  // {
  //   path: '/notifications',
  //   name: 'Notifications',
  //   icon: Notifications,
  //   layout: '/admin',
  //   role: ['Super Admin', 'Admin']
  // }
]
export default dashboardRoutes
