import useTrans from '../../../../i18n/useTrans'

const BlockService = () => {
  const trans = useTrans()
  const language = trans.aboutService.aboutService
  return (
    <section className='section section-service-inner section-aos' data-aos='fade-up'>
      <div className='container'>
        <div className='section-content'>
          <div className='section-content-header line-bottom text-primary'>
            <h2 className='section-content-title'>Service</h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='card card-overlay'>
              <div className='card-thumb lazyload'>
                <a className='card-thumb-overlay' href='#'>
                  <img
                    className='card-img-top'
                    src='/user-page/img/service/service-img-1.png'
                    width='270'
                    height='469'
                    alt='...'
                  />
                </a>
              </div>
              <div className='card-body'>
                <div className='card-index'>01.</div>
                <h3 className='card-title'>
                  <a href='#'>Lab-type Development</a>
                </h3>
                <div className='card-text'>{language.contentFirst}</div>
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
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='card card-overlay'>
              <div className='card-thumb lazyload'>
                <a className='card-thumb-overlay' href='#'>
                  <img
                    className='card-img-top'
                    src='/user-page/img/service/service-img-2.png'
                    width='270'
                    height='469'
                    alt='...'
                  />
                </a>
              </div>
              <div className='card-body'>
                <div className='card-index'>02.</div>
                <h3 className='card-title'>
                  <a href='#'>Web System Development </a>
                </h3>
                <div className='card-text'>{language.contentSecond}</div>
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
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='card card-overlay'>
              <div className='card-thumb lazyload'>
                <a className='card-thumb-overlay' href='#'>
                  <img
                    className='card-img-top'
                    src='/user-page/img/service/service-img-3.png'
                    width='270'
                    height='469'
                    alt='...'
                  />
                </a>
              </div>
              <div className='card-body'>
                <div className='card-index'>03.</div>
                <h3 className='card-title'>
                  <a href='#'>Business System Development</a>
                </h3>
                <div className='card-text'>{language.contentThird}</div>
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
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='card card-overlay'>
              <div className='card-thumb lazyload'>
                <a className='card-thumb-overlay' href='#'>
                  <img
                    className='card-img-top'
                    src='/user-page/img/service/service-img-4.png'
                    width='270'
                    height='469'
                    alt='...'
                  />
                </a>
              </div>
              <div className='card-body'>
                <div className='card-index'>04.</div>
                <h3 className='card-title'>
                  <a href='#'>Blockchain Development</a>
                </h3>
                <div className='card-text'>{language.contentFour}</div>
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
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='card card-overlay'>
              <div className='card-thumb lazyload'>
                <a className='card-thumb-overlay' href='#'>
                  <img
                    className='card-img-top'
                    src='/user-page/img/service/service-img-5.png'
                    width='270'
                    height='469'
                    alt='...'
                  />
                </a>
              </div>
              <div className='card-body'>
                <div className='card-index'>05.</div>
                <h3 className='card-title'>
                  <a href='#'>Smartphone Application Development</a>
                </h3>
                <div className='card-text'>{language.contentFifth}</div>
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
          <div className='col-sm-6 col-md-4 col-lg-3'>
            <div className='card card-overlay'>
              <div className='card-thumb lazyload'>
                <a className='card-thumb-overlay' href='#'>
                  <img
                    className='card-img-top'
                    src='/user-page/img/service/service-img-6.png'
                    width='270'
                    height='469'
                    alt='...'
                  />
                </a>
              </div>
              <div className='card-body'>
                <div className='card-index'>06.</div>
                <h3 className='card-title'>
                  <a href='#'>AWS Migration</a>
                </h3>
                <div className='card-text'>{language.contentSixth}</div>
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
      </div>
    </section>
  )
}

export default BlockService
