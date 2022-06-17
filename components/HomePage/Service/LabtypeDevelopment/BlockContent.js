import useTrans from '../../../../i18n/useTrans'
const BlockContent = () => {
  const trans = useTrans()
  const language = trans.labtypeDevelopment.labTypeDevelopment

  return (
    <>
      <section className="section section-aos" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="lab-type-text">
                <div className="section-content mb-5 mb-md-0">
                  <div className="section-content-header line-bottom text-primary mb-3">
                    <h2 className="section-content-title">{language.slogan}</h2>
                  </div>
                  <ul className="list-group check-list mb-5">
                    <li>{language.desire.contentFirst}</li>
                    <li>{language.desire.contentSecond}</li>
                    <li>{language.desire.contentThird}</li>
                  </ul>
                  <div className="section-content-header line-bottom text-primary mb-3 mt-3">
                    <h2 className="section-content-title">{language.advantages.title}</h2>
                  </div>
                  <ul className="list-group check-list">
                    <li>{language.advantages.contentFirst}</li>
                    <li>{language.advantages.contentSecond}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img
                className="img-fluid"
                src="/user-page/img/lab/img-1.png"
                width="560"
                height="304"
                alt="What is lab-type development"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlockContent
