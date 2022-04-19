import React from 'react'
import styles from '../../styles/AdminNewBlogFilters.module.css'
import { Button, Typography, TextField, MenuItem } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import useTrans from '../../i18n/useTrans'

const AccountFilter = ({ handleSearch, filters, setFilters, onCreate, dataRoles }) => {
  const { email, role } = filters
  const trans = useTrans()

  return (
    <>
      <Grid container justify='space-between' alignItems='center'>
        <Grid item md={10} container spacing={2} alignItems='center'>
          <Grid item>
            <TextField
              placeholder={trans.admin_account.placeholder_text_search}
              variant='outlined'
              size='small'
              value={email}
              onChange={(e) => setFilters({ ...filters, email: e.target.value })}
            />
          </Grid>
          <Grid item className={styles.flex}>
            <Typography variant='subtitle2' component='span'>
              {trans.admin_account.role}
            </Typography>
            <TextField
              select
              variant='outlined'
              className={styles.sort_by}
              size='small'
              defaultValue={role}
              onChange={(e) => setFilters({ ...filters, role: e.target.value })}
            >
              <MenuItem value=''>None</MenuItem>
              {Array.isArray(dataRoles) &&
                dataRoles.map((role) => (
                  <MenuItem key={role.id} value={role.id}>
                    {role.title}
                  </MenuItem>
                ))}
            </TextField>
          </Grid>
          <Grid item>
            <Button variant='contained' color='primary' onClick={handleSearch}>
              {trans.admin_account.search}
            </Button>
          </Grid>
        </Grid>
        <Grid item sm={12} md={2} className={styles.flexRight}>
          <Button variant='contained' color='primary' onClick={() => onCreate()}>
            {trans.admin_account.create_account}
          </Button>
        </Grid>
      </Grid>
    </>
  )
}

export default AccountFilter
