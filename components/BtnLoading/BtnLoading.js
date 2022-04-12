import React from 'react'
import styles from '../../styles/AdminBlogs.module.css'
import {
  Button,CircularProgress
} from '@material-ui/core/'

const BtnLoading = ({ loading, onClick }) => {

  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <Button
            variant='contained'
            className={styles.button}
            color='primary'
            disabled={loading}
            onClick={onClick}
          >
            Create
          </Button>
          {loading && <CircularProgress size={24} className={styles.buttonProgress} />}
        </div>
      </div>
    </>
  )
}

export default BtnLoading
