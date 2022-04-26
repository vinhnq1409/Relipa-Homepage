const BlockBanner = () => {
  return (
    <div id='main-banner'>
      <section className='section section-aos section-banner py-0' data-aos='fade-down'>
        <div className='swiper-carousel banner-swiper-carousel'>
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='main-banner-item'>
                  <div className='main-banner-item-bg'>
                    <picture>
                      <source media='(min-width:768px)' srcSet='/user-page/img/home/banner.png' />
                      <img src='/user-page/img/home/banner-sp.png' width='375' height='812' alt='' />
                    </picture>
                  </div>
                  <div className='container'>
                    <div className='row align-items-center'>
                      <div className='col-md-6'>
                        <h1 className='banner-title'>Relipa supports your success</h1>
                        <div className='main-banner-content'>
                          <div className='banner-summary'>
                            RELIPA's company name is "Trusted Partner" in English It comes from the acronym "RELIABLE
                            PARTNER"
                          </div>
                          <a className='btn btn-outline-light btn-lg' href='#'>
                            SEE MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='main-banner-item'>
                  <div className='main-banner-item-bg'>
                    <picture>
                      <source media='(min-width:768px)' srcSet='/user-page/img/home/banner.png' />
                      <img src='/user-page/img/home/banner.png' alt='' />
                    </picture>
                  </div>
                  <div className='container'>
                    <div className='row align-items-center'>
                      <div className='col-md-6'>
                        <h1 className='banner-title'>Relipa supports your success</h1>
                        <div className='main-banner-content'>
                          <div className='banner-summary'>
                            RELIPA's company name is "Trusted Partner" in English It comes from the acronym "RELIABLE
                            PARTNER"
                          </div>
                          <a className='btn btn-outline-light btn-lg' href='#'>
                            SEE MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='main-banner-item'>
                  <div className='main-banner-item-bg'>
                    <picture>
                      <source media='(min-width:768px)' srcSet='/user-page/img/home/banner.png' />
                      <img src='/user-page/img/home/banner.png' alt='' />
                    </picture>
                  </div>
                  <div className='container'>
                    <div className='row align-items-center'>
                      <div className='col-md-6'>
                        <h1 className='banner-title'>Relipa supports your success</h1>
                        <div className='main-banner-content'>
                          <div className='banner-summary'>
                            RELIPA's company name is "Trusted Partner" in English It comes from the acronym "RELIABLE
                            PARTNER"
                          </div>
                          <a className='btn btn-outline-light btn-lg' href='#'>
                            SEE MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='swiper-controls'>
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
          </div>
        </div>
        <div className='scroll-down'>
          <div className='scroll-down-text'>SCROLL</div>
        </div>
      </section>
    </div>
  )
}

export default BlockBanner
