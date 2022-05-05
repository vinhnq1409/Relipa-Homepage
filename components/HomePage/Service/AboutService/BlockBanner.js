const BlockFontBanner = () => {
  return (
    <>
      <div className='container'>
        <section className='section section-aos section-banner section-sub-banner py-0' data-aos='fade-down'>
          <div className='main-banner-item main-banner-item-sm'>
            <div className='main-banner-item-bg'>
              <picture>
                <source media='(min-width:768px)' srcSet='/user-page/img/service/banner.png' />
                <img src='/user-page/img/service/banner-sp.png' width='345' height='188' alt='' />
              </picture>
            </div>
            <div className='container'>
              <div className='section-heading section-heading-shadow'>
                <h2 className='section-title' title='Company'>
                  Company
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlockFontBanner
