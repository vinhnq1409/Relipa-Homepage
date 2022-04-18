import React from 'react'
// @material-ui/core
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Store from '@material-ui/icons/Store'
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'
import DateRange from '@material-ui/icons/DateRange'
import LocalOffer from '@material-ui/icons/LocalOffer'
import Update from '@material-ui/icons/Update'
import Accessibility from '@material-ui/icons/Accessibility'
import BugReport from '@material-ui/icons/BugReport'
import Code from '@material-ui/icons/Code'
import Cloud from '@material-ui/icons/Cloud'
// layout for this page
import Admin from 'layouts/Admin.js'
// core components
import GridItem from 'components/Grid/GridItem.js'
import GridContainer from 'components/Grid/GridContainer.js'
import Tasks from 'components/Tasks/Tasks.js'
import CustomTabs from 'components/CustomTabs/CustomTabs.js'
import Card from 'components/Card/Card.js'
import CardHeader from 'components/Card/CardHeader.js'
import CardIcon from 'components/Card/CardIcon.js'
import CardFooter from 'components/Card/CardFooter.js'
import Link from 'next/link'

import { bugs, website, server } from 'sampleData/general.js'

import styles from 'assets/jss/nextjs-material-dashboard/views/dashboardStyle.js'

function Dashboard() {
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color='dark' stats icon>
              <CardIcon color='dark'>
                <Icon>content_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Blogs</p>
              <h3 className={classes.cardTitle}>
                500 <small> views/week</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <ChromeReaderModeIcon />
                <div>
                  <Link href='/admin/blogs'>
                    <a className={classes.getMoreInfo}>Get more info ...</a>
                  </Link>
                </div>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color='dark' stats icon>
              <CardIcon color='dark'>
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>News</p>
              <h3 className={classes.cardTitle}>
                34,245 <small> views/week</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                <Link href='/admin/news'>
                  <a className={classes.getMoreInfo}>Get more info ...</a>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color='danger' stats icon>
              <CardIcon color='danger'>
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Partner</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Get more info ...
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color='info' stats icon>
              <CardIcon color='info'>
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Get more info ...
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title='News:'
            headerColor='dark'
            tabs={[
              {
                tabName: 'Common',
                tabIcon: BugReport,
                tabContent: <Tasks checkedIndexes={[0, 3]} tasksIndexes={[0, 1, 2, 3]} tasks={bugs} />
              },
              {
                tabName: 'Website',
                tabIcon: Code,
                tabContent: <Tasks checkedIndexes={[0]} tasksIndexes={[0, 1]} tasks={website} />
              },
              {
                tabName: 'Server',
                tabIcon: Cloud,
                tabContent: <Tasks checkedIndexes={[1]} tasksIndexes={[0, 1, 2]} tasks={server} />
              }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title='Blogs:'
            headerColor='dark'
            tabs={[
              {
                tabName: 'Common',
                tabIcon: BugReport,
                tabContent: <Tasks checkedIndexes={[0, 3]} tasksIndexes={[0, 1, 2, 3]} tasks={bugs} />
              },
              {
                tabName: 'Website',
                tabIcon: Code,
                tabContent: <Tasks checkedIndexes={[0]} tasksIndexes={[0, 1]} tasks={website} />
              },
              {
                tabName: 'Server',
                tabIcon: Cloud,
                tabContent: <Tasks checkedIndexes={[1]} tasksIndexes={[0, 1, 2]} tasks={server} />
              }
            ]}
          />
        </GridItem>
      </GridContainer>
    </div>
  )
}

Dashboard.layout = Admin

export default Dashboard
