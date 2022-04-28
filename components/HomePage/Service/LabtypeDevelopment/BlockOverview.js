import useTrans from '../../../../i18n/useTrans'

const BlockOverview = () => {
  const trans = useTrans()
  const language = trans.labtypeDevelopment.labTypeDevelopment
  return (
    <>
      <section className='section section-aos' data-aos='fade-up'>
        <div className='container'>
          <div className='section-content'>
            <div className='section-content-header line-bottom text-primary'>
              <h2 className='section-content-title'>{language.overview}</h2>
            </div>
            <div className='overview'>
              <div className='overview-inner'>
                <div className='card card-media border-0 overview-item'>
                  <div className='card-body p-0 mb-md-0'>
                    <div className='card-content'>
                      <div className='card-icon mb-2'>
                        <img src='/user-page/img/icons/people.svg' width='40' height='40' alt='...' />
                      </div>
                      <h3 className='card-title'>
                        <a href='#'>{language.about.title}</a>
                      </h3>
                      <div className='card-text'>
                        <ul>
                          <li>{language.about.contentFirst}</li>
                          <li>{language.about.contentSecond}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='card-thumb'>
                    <div className='card-frame'>
                      <img
                        className='img-fluid'
                        src='/user-page/img/lab/overview-1.png'
                        width='411'
                        height='406'
                        alt='...'
                      />
                      <div className='card-img'>
                        <img
                          className='img-fluid'
                          src='/user-page/img/lab/img-2.png'
                          width='334'
                          height='236'
                          alt='...'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card card-media border-0 overview-item'>
                  <div className='card-body p-0 mb-md-0'>
                    <div className='card-content'>
                      <div className='card-icon mb-2'>
                        <img src='/user-page/img/icons/calendar.svg' width='40' height='40' alt='...' />
                      </div>
                      <h3 className='card-title'>
                        <a href='#'>{language.working.title}</a>
                      </h3>
                      <div className='card-text'>
                        <ul>
                          <li>{language.working.contentFirst}</li>
                          <li>{language.working.contentSecond}</li>
                          <li>{language.working.contentThird}</li>
                          <li>{language.working.contentFourth}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='card-thumb'>
                    <div className='card-frame'>
                      <img
                        className='img-fluid'
                        src='/user-page/img/lab/overview-2.png'
                        width='420'
                        height='290'
                        alt='...'
                      />
                      <div className='card-img'>
                        <img
                          className='img-fluid'
                          src='/user-page/img/lab/img-3.png'
                          width='334'
                          height='236'
                          alt='...'
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card card-media border-0 overview-item'>
                  <div className='card-body p-0 mb-md-0'>
                    <div className='card-content'>
                      <div className='card-icon mb-2'>
                        <img src='/user-page/img/icons/task-square.svg' width='40' height='40' alt='...' />
                      </div>
                      <h3 className='card-title'>
                        <a href='#'>{language.contract.title}</a>
                      </h3>
                      <div className='card-text'>
                        <ul>
                          <li>{language.contract.contentFirst}</li>
                          <li>{language.contract.contentSecond}</li>
                          <li>{language.contract.contentThird}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='card-thumb'>
                    <div className='card-frame'>
                      <img
                        className='img-fluid'
                        src='/user-page/img/lab/overview-3.png'
                        width='418'
                        height='322'
                        alt='...'
                      />
                      <div className='card-img'>
                        <img
                          className='img-fluid'
                          src='/user-page/img/lab/img-4.png'
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
    </>
  )
}

export default BlockOverview
