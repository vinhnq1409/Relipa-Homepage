import React from 'react'
import styles from '../../styles/AdminBlogs.module.css'
import { Button, CircularProgress } from '@material-ui/core/'

const BtnLoading = ({ loading, onClick, idCreate }) => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <Button variant='contained' className={styles.button} color='primary' disabled={loading} onClick={onClick}>
            {idCreate === undefined ? 'Create' : 'Update'}
          </Button>
          {loading && <CircularProgress size={24} className={styles.buttonProgress} />}
        </div>
      </div>
    </>
  )
}

export default BtnLoading