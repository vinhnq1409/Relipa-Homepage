import useTrans from '../../../../i18n/useTrans'

function BlockWebSystem() {
  const trans = useTrans()
  const language = trans.webSystem
  return (
    <section className='section section-aos' data-aos='fade-up'>
      <div className='container'>
        <div className='section-content'>
          <div className='section-content-header line-bottom text-primary'>
            <h2 className='section-content-title'>Web System Development Service</h2>
          </div>
          <div className='overview'>
            <div className='overview-inner'>
              <div className='card card-media border-0'>
                <div className='card-body p-0 mb-md-0'>
                  <div className='card-content'>
                    <div className='card-icon mb-2'>
                      <img src='/user-page/img/icons/diagram.svg' width='40' height='40' alt='...' />
                    </div>
                    <h3 className='card-title'>
                      <a href='#'>{language.ECSite.title}</a>
                    </h3>
                    <div className='card-text'>{language.ECSite.content}</div>
                  </div>
                </div>
                <div className='card-thumb'>
                  <div className='card-frame'>
                    <img
                      className='img-fluid'
                      src='/user-page/img/common/frame-1.png'
                      width='411'
                      height='406'
                      alt='...'
                    />
                    <div className='card-img'>
                      <img
                        className='img-fluid'
                        src='/user-page/img/web/img-2.png'
                        width='334'
                        height='236'
                        alt='...'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='card card-media border-0'>
                <div className='card-body p-0 mb-md-0'>
                  <div className='card-content'>
                    <div className='card-icon mb-2'>
                      <img src='/user-page/img/icons/chart.svg' width='40' height='40' alt='...' />
                    </div>
                    <h3 className='card-title'>
                      <a href='#'> {language.CMSsystem.title}</a>
                    </h3>
                    <div className='card-text'>{language.CMSsystem.content}</div>
                  </div>
                </div>
                <div className='card-thumb'>
                  <div className='card-frame'>
                    <img
                      className='img-fluid'
                      src='/user-page/img/common/frame-2.png'
                      width='420'
                      height='290'
                      alt='...'
                    />
                    <div className='card-img'>
                      <img
                        className='img-fluid'
                        src='/user-page/img/web/img-3.png'
                        width='334'
                        height='236'
                        alt='...'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='card card-media border-0'>
                <div className='card-body p-0 mb-md-0'>
                  <div className='card-content'>
                    <div className='card-icon mb-2'>
                      <img src='/user-page/img/icons/search-status.svg' width='40' height='40' alt='...' />
                    </div>
                    <h3 className='card-title'>
                      <a href='#'>{language.JobInformation.title}</a>
                    </h3>
                    <div className='card-text'>{language.JobInformation.content}</div>
                  </div>
                </div>
                <div className='card-thumb'>
                  <div className='card-frame'>
                    <img
                      className='img-fluid'
                      src='/user-page/img/common/frame-3.png'
                      width='418'
                      height='322'
                      alt='...'
                    />
                    <div className='card-img'>
                      <img
                        className='img-fluid'
                        src='/user-page/img/web/img-4.png'
                        width='334'
                        height='236'
                        alt='...'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='card card-media border-0'>
                <div className='card-body p-0 mb-md-0'>
                  <div className='card-content'>
                    <div className='card-icon mb-2'>
                      <img src='/user-page/img/icons/status.svg' width='40' height='40' alt='...' />
                    </div>
                    <h3 className='card-title'>
                      <a href='#'>{language.MatchingSite.title}</a>
                    </h3>
                    <div className='card-text'>{language.MatchingSite.content}</div>
                  </div>
                </div>
                <div className='card-thumb'>
                  <div className='card-frame'>
                    <img
                      className='img-fluid'
                      src='/user-page/img/common/frame-4.png'
                      width='414'
                      height='317'
                      alt='...'
                    />
                    <div className='card-img'>
                      <img
                        className='img-fluid'
                        src='/user-page/img/web/img-2.png'
                        width='334'
                        height='236'
                        alt='...'
                      />
                    </div>
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

export default BlockWebSystem
