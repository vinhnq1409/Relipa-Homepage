import useTrans from '../../../../i18n/useTrans'

const BlockCaseStudies = () => {
  const trans = useTrans()
  const language = trans.labtypeDevelopment.labTypeDevelopment
  return (
    <section className='section section-aos' data-aos='fade-up'>
      <div className='container'>
        <div className='section-content'>
          <div className='section-content-header line-bottom text-primary'>
            <h2 className='section-content-title'>Case Studies</h2>
          </div>
          <div className='row'>
            <div className='col-sm-6 col-md-3'>
              <div className='card card-news'>
                <div className='card-thumb'>
                  <div className='img-thumb'>
                    <img
                      className='card-img-top'
                      src='/user-page/img/lab/img-news-1.png'
                      width='260'
                      height='192'
                      alt='...'
                    />
                  </div>
                </div>
                <div className='card-body'>
                  <h3 className='card-title'>{language.AI}</h3>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-3'>
              <div className='card card-news'>
                <div className='card-thumb'>
                  <div className='img-thumb'>
                    <img
                      className='card-img-top'
                      src='/user-page/img/lab/img-news-2.png'
                      width='260'
                      height='192'
                      alt='...'
                    />
                  </div>
                </div>
                <div className='card-body'>
                  <h3 className='card-title'>{language.system}</h3>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-3'>
              <div className='card card-news'>
                <div className='card-thumb'>
                  <div className='img-thumb'>
                    <img
                      className='card-img-top'
                      src='/user-page/img/lab/img-news-3.png'
                      width='260'
                      height='192'
                      alt='...'
                    />
                  </div>
                </div>
                <div className='card-body'>
                  <h3 className='card-title'>{language.developmentmatching}</h3>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-md-3'>
              <div className='card card-news'>
                <div className='card-thumb'>
                  <div className='img-thumb'>
                    <img
                      className='card-img-top'
                      src='/user-page/img/lab/img-news-4.png'
                      width='260'
                      height='192'
                      alt='...'
                    />
                  </div>
                </div>
                <div className='card-body'>
                  <h3 className='card-title'>第31回Japan IT Week 春へ出展のお知らせ</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='text-center pt-1'>
            <a className='btn btn-outline-greyish btn-lg rounded-0 px-5' href='#'>
              {language.seemore}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockCaseStudies
