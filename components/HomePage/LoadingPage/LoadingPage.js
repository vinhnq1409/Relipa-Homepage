const LoadingPages = () => {
  return (
    <div id='loading'>
      <div className='container text-center'>
        <i className='loading-icon'></i>
        <div className='loading-text'>
          <div className='row'>
            <div className='col-lg-6 offset-lg-3'>
              <div className='text-lg'>
                <span className='loading-message'>Loading</span>
                <span className='loading-dots'></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='progress'>
        <div
          className='progress-bar bg-primary progressLoading'
          style={{ width: 0 }}
          aria-valuenow='0'
          aria-valuemin='0'
          aria-valuemax='100'
        >
          progress bar{' '}
        </div>
      </div>
    </div>
  )
}

export default LoadingPages
