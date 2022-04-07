import Dashboard from '@material-ui/icons/Dashboard'
import Person from '@material-ui/icons/Person'
import LibraryBooks from '@material-ui/icons/LibraryBooks'
import Notifications from '@material-ui/icons/Notifications'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'
import AssignmentIcon from '@material-ui/icons/Assignment'
import PagesIcon from '@material-ui/icons/Pages'

const dashboardRoutes = [
  {
    path: '/dashboard',
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
    path: '/static-page',
    name: 'Static page',
    icon: PagesIcon,
    layout: '/admin'
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    icon: Person,
    layout: '/admin'
  },
  {
    path: '/table-list',
    name: 'Table List',
    icon: 'content_paste',
<<<<<<< HEAD
    layout: '/admin',
=======

    layout: '/admin'
>>>>>>> 8abc831 (conflix)
  },
  {
    path: '/typography',
    name: 'Typography',
    icon: LibraryBooks,
<<<<<<< HEAD
    layout: '/admin',
=======

    layout: '/admin'
>>>>>>> 8abc831 (conflix)
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: Notifications,
<<<<<<< HEAD
    layout: '/admin',
  },
=======

    layout: '/admin'
  },
  {
    path: '/rtl-page',
    name: 'Change Language',
    icon: Language,
    layout: '/rtl'
  },
  {
    path: '/upgrade-to-pro',
    name: 'Logout',
    icon: Unarchive,
    layout: '/admin'
  }
>>>>>>> 8abc831 (conflix)
]

export default dashboardRoutes
