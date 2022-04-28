import useTrans from '../../../../i18n/useTrans'

const BlockWhy = () => {
  const trans = useTrans()
  const language = trans.user.service.labTypeDevelopment
  return (
    <>
      <section className='section section-why section-aos' data-aos='fade-up'>
        <div className='container'>
          <div className='section-content'>
            <div className='section-content-header line-bottom text-white'>
              <h2 className='section-content-title'>{language.why.title}</h2>
            </div>
            <div
              className='swiper-carousel why-choose-swiper-carousel swiper-carousel--arrow-length'
              id='why-choose-swiper-carousel'
            >
              <div className='swiper-container'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='card card-over'>
                      <div className='card-body'>
                        <div className='card-thumb'>
                          <a href='#'>
                            <img
                              className='card-img-top'
                              src='/user-page/img/lab/img-5.png'
                              width='327'
                              height='183'
                              alt='...'
                            />
                          </a>
                        </div>
                        <div className='card-index'>01</div>
                        <h3 className='card-title'>
                          <a href='#'>{language.why.contentFirst}</a>
                        </h3>
                        <div className='card-text'>
                          There is no need to create a contract for each project, and payment is a fixed monthly fee.
                          This simplifies complicated procedures and allows you to focus on your business. Even if
                          requirements or specifications change according to the business during the development period,
                          it is possible to flexibly respond without adjusting the contract details.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='card card-over'>
                      <div className='card-body'>
                        <div className='card-thumb'>
                          <a href='#'>
                            <img
                              className='card-img-top'
                              src='/user-page/img/lab/img-6.png'
                              width='327'
                              height='183'
                              alt='...'
                            />
                          </a>
                        </div>
                        <div className='card-index'>02</div>
                        <h3 className='card-title'>
                          <a href='#'>{language.why.contentSecond}</a>
                        </h3>
                        <div className='card-text'>
                          There is no need to create a contract for each project, and payment is a fixed monthly fee.
                          This simplifies complicated procedures and allows you to focus on your business. Even if
                          requirements or specifications change according to the business during the development period,
                          it is possible to flexibly respond without adjusting the contract details.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-pagination'></div>
              <div className='swiper-controls'>
                <div className='swiper-button-prev'></div>
                <div className='swiper-button-next'></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlockWhy
