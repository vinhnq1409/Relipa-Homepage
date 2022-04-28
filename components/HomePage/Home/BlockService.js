import useTrans from '../../../i18n/useTrans'

const BlockService = () => {
  const trans = useTrans()
  const language = trans.home.home
  return (
    <section className='section section-aos section-service py-0' data-aos='fade-up'>
      <div className='container'>
        <div className='section-heading section-heading-shadow'>
          <h2 className='section-title' title='Service'>
            Service
          </h2>
        </div>
        <div
          className='swiper-carousel swiper-carousel--arrow-length swiper-carousel--highlight-active'
          data-aos='zoom-in'
          data-aos-delay='400'
          data-carousel='swiper'
          slide-autoplay='false'
          // slide-centeredSlides='true'
          slide-speed='800'
          slide-item='3'
          slide-loop='true'
        >
          <div className='swiper-container'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <div className='card card-overlay'>
                  <div className='card-thumb lazyload'>
                    <a className='card-thumb-overlay' href='#'>
                      <img
                        className='card-img-top'
                        src='user-page/img/home/sr-01.png'
                        width='278'
                        height='469'
                        alt='...'
                      />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='card-index'>01.</div>
                    <h3 className='card-title'>
                      <a href='#'>{language.service.LabType}</a>
                    </h3>
                    <div className='card-text'>{language.service.LabTypeContent}</div>
                    <div className='card-bottom'>
                      <div className='d-grid'>
                        <a href='#' className='btn btn-primary btn-block btn-lg rounded-0'>
                          {language.seemore}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='card card-overlay'>
                  <div className='card-thumb lazyload'>
                    <a className='card-thumb-overlay' href='#'>
                      <img
                        className='card-img-top'
                        src='user-page/img/home/sr-02.png'
                        width='278'
                        height='469'
                        alt='...'
                      />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='card-index'>02.</div>
                    <h3 className='card-title'>
                      <a href='#'>{language.service.websystem}</a>
                    </h3>
                    <div className='card-text'>{language.service.websystemContent}</div>
                    <div className='card-bottom'>
                      <div className='d-grid'>
                        <a href='#' className='btn btn-primary btn-block btn-lg rounded-0'>
                          {language.seemore}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='card card-overlay'>
                  <div className='card-thumb lazyload'>
                    <a className='card-thumb-overlay' href='#'>
                      <img
                        className='card-img-top'
                        src='user-page/img/home/sr-03.png'
                        width='278'
                        height='469'
                        alt='...'
                      />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='card-index'>03.</div>
                    <h3 className='card-title'>
                      <a href='#'>{language.service.Business}</a>
                    </h3>
                    <div className='card-text'>{language.service.BusinesContent}</div>
                    <div className='card-bottom'>
                      <div className='d-grid'>
                        <a href='#' className='btn btn-primary btn-block btn-lg rounded-0'>
                          {language.seemore}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='card card-overlay'>
                  <div className='card-thumb lazyload'>
                    <a className='card-thumb-overlay' href='#'>
                      <img
                        className='card-img-top'
                        src='user-page/img/home/sr-01.png'
                        width='278'
                        height='469'
                        alt='...'
                      />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='card-index'>04.</div>
                    <h3 className='card-title'>
                      <a href='#'> {language.service.Blockchain} </a>
                    </h3>
                    <div className='card-text'>{language.service.BlockchainContent}</div>
                    <div className='card-bottom'>
                      <div className='d-grid'>
                        <a href='#' className='btn btn-primary btn-block btn-lg rounded-0'>
                          {language.seemore}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='card card-overlay'>
                  <div className='card-thumb lazyload'>
                    <a className='card-thumb-overlay' href='#'>
                      <img
                        className='card-img-top'
                        src='user-page/img/home/sr-02.png'
                        width='278'
                        height='469'
                        alt='...'
                      />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='card-index'>05.</div>
                    <h3 className='card-title'>
                      <a href='#'>{language.service.Smartphone}</a>
                    </h3>
                    <div className='card-text'>{language.service.SmartphoneContent}</div>
                    <div className='card-bottom'>
                      <div className='d-grid'>
                        <a href='#' className='btn btn-primary btn-block btn-lg rounded-0'>
                          {language.seemore}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='swiper-slide'>
                <div className='card card-overlay'>
                  <div className='card-thumb lazyload'>
                    <a className='card-thumb-overlay' href='#'>
                      <img
                        className='card-img-top'
                        src='user-page/img/home/sr-03.png'
                        width='278'
                        height='469'
                        alt='...'
                      />
                    </a>
                  </div>
                  <div className='card-body'>
                    <div className='card-index'>06.</div>
                    <h3 className='card-title'>
                      <a href='#'> {language.service.AWS}</a>
                    </h3>
                    <div className='card-text'>{language.service.AWSContent}</div>
                    <div className='card-bottom'>
                      <div className='d-grid'>
                        <a href='#' className='btn btn-primary btn-block btn-lg rounded-0'>
                          {language.seemore}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='swiper-pagination'></div>
          </div>
          <div className='swiper-controls'>
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockService
