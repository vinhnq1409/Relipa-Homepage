import React from 'react'
import styles from '../../styles/AdminBlogs.module.css'
import { Button, CircularProgress } from '@material-ui/core/'

const BtnLoading = ({ loading, onClick, btnName, color }) => {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper}>
          <Button variant='contained' className={styles.button} color= {color} disabled={loading} onClick={onClick}>
            {btnName}
          </Button>
          {loading && <CircularProgress size={24} className={styles.buttonProgress} />}
        </div>
      </div>
    </>
  )
}

export default BtnLoading
