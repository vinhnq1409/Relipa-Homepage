import useTrans from '../../../i18n/useTrans'

const BlockCEOMessage = () => {
  const trans = useTrans()
  const language = trans.company.company.CEOMessage
  return (
    <section className='section section-aos' id='message' data-aos='fade-up'>
      <div className='section-content-header line-bottom text-primary'>
        <h2 className='section-content-title'>{language.CEO_Message}</h2>
      </div>
      <article className='article message-article'>
        <img className='img-fluid' src='/user-page/img/company/img-1.png' width='947' height='423' alt='' />
        <div className='article-detail'>
          <p>{language.content1}</p>
          <p>{language.content2}</p>
          <p>{language.content3}</p>
          <p>{language.content4}</p>
          <p>{language.content5}</p>
          <p>{language.content6}</p>
          <p>{language.content7}</p>
        </div>
        <div className='article-footer text-end'>
          <div className='position'>{language.President_CEO}</div>
          <div className='author'>{language.TRAN_XUAN_DUC}</div>
        </div>
      </article>
    </section>
  )
}

export default BlockCEOMessage
