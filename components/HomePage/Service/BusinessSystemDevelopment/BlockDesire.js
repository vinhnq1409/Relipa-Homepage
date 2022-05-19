import useTrans from '../../../../i18n/useTrans'

function BlockDesire() {
  const trans = useTrans()
  const language = trans.businessSystem
  return (
    <section className="section section-aos" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-5">
            <div className="section-content mb-5 mb-md-0">
              <ul className="list-group check-list">
                <li>{language.desire.one}</li>
                <li>{language.desire.two}</li>
                <li>{language.desire.three}</li>
                <li>{language.desire.fource}</li>
              </ul>
              <div className="section-content-header line-bottom text-primary mb-3">
                <h2 className="section-content-title">Business System Development</h2>
              </div>
              <div className="section-text text-grey-1">
                {language.bussiness.one}
                <br />
                {language.bussiness.two}
                <br />
                {language.bussiness.three}
                <br />
                {language.bussiness.four}
                <br />
                {language.bussiness.five}
              </div>
            </div>
          </div>
          <div className="col-md-6 offset-xl-1">
            <img
              className="img-fluid"
              src="/user-page/img/business/img-1.png"
              width="560"
              height="304"
              alt="Business System Development"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockDesire
