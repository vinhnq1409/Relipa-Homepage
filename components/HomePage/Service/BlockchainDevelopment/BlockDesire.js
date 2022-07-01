import useTrans from '../../../../i18n/useTrans'

const BlockDesire = () => {
  const trans = useTrans()
  const language = trans.blockchain

  return (
    <section className="section section-aos" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-5">
            <div className="section-content mb-5 mb-md-0">
              <ul className="list-group check-list">
                <li className='justify-align'>{language.desire.one}</li>
                <li className='justify-align'>{language.desire.two}</li>
                <li className='justify-align'>{language.desire.three}</li>
                <li className='justify-align'>{language.desire.fource}</li>
              </ul>
              <div className="section-content-header line-bottom text-primary mb-3">
                <h2 className="section-content-title ">{language.solveit.title}</h2>
              </div>
              <div
                className="section-text text-grey-1 justify-align"
                dangerouslySetInnerHTML={{
                  __html: language.solveit.content
                }}
              ></div>
            </div>
          </div>
          <div className="col-md-6 offset-xl-1">
            <img
              className="img-fluid"
              src="/user-page/img/blockchain/img-1.png"
              width="560"
              height="304"
              alt="Blockchain Development"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockDesire
