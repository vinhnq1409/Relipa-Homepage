import useTrans from '../../../../i18n/useTrans'
const BlockContent = () => {
  const trans = useTrans()
  const language = trans.user.service.labTypeDevelopment

  return (
    <>
      <section className='section section-aos' data-aos='fade-up'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='lab-type-text'>
                <ul className='list-group check-list'>
                  <li>{language.desire.contentFirst}</li>
                  <li>{language.desire.contentSecond}</li>
                  <li>{language.desire.contentThird}</li>
                </ul>
                <div className='section-content mb-5 mb-md-0'>
                  <div className='section-content-header line-bottom text-primary mb-3'>
                    <h2 className='section-content-title'>{language.what}</h2>
                  </div>
                  <div className='section-text'>
                    {language.whatContent}
                    <ul>
                      <li>{language.benefits.contentFirst}</li>
                      <li>{language.benefits.contentSecond}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <img className='img-fluid' src='/user-page/img/lab/img-1.png' width='560' height='304' alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlockContent
