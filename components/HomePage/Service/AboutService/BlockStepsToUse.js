import useTrans from '../../../../i18n/useTrans'

const BlockStepToUse = () => {
  const trans = useTrans()
  const language = trans.aboutService.aboutService.steps
  return (
    <section className="section section-steps section-aos" data-aos="fade-up">
      <div className="container">
        <div className="section-content">
          <div className="section-content-header line-bottom text-primary">
            <h2 className="section-content-title">{language.title}</h2>
          </div>
          <div className="steps">
            <div className="step-item">
              <div className="step-icon">
                <img
                  className="img-fluid"
                  src="/user-page/img/icons/step-icon-1.svg"
                  width="150"
                  height="150"
                  alt="Contact us"
                />
              </div>
              <div className="step-body">
                <div className="step-number">01.</div>
                <div className="step-title">{language.contact}</div>
                <div className="step-desc">{language.contactcontent}</div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <img
                  className="img-fluid"
                  src="/user-page/img/icons/step-icon-2.svg"
                  width="150"
                  height="150"
                  alt="Listen and understand"
                />
              </div>
              <div className="step-body">
                <div className="step-number">02.</div>
                <div className="step-title">{language.Thorough}</div>
                <div className="step-desc">{language.Thoroughcontent}</div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <img
                  className="img-fluid"
                  src="/user-page/img/icons/step-icon-3.svg"
                  width="150"
                  height="150"
                  alt="Suggestions / Quotations"
                />
              </div>
              <div className="step-body">
                <div className="step-number">03.</div>
                <div className="step-title">{language.Suggestions}</div>
                <div className="step-desc">{language.Suggestionscontent}</div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <img
                  className="img-fluid"
                  src="/user-page/img/icons/step-icon-4.svg"
                  width="150"
                  height="150"
                  alt="Contract / Order"
                />
              </div>
              <div className="step-body">
                <div className="step-number">04.</div>
                <div className="step-title">{language.Contract}</div>
                <div className="step-desc">{language.Contractcontent}</div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <img
                  className="img-fluid"
                  src="/user-page/img/icons/step-icon-5.svg"
                  width="150"
                  height="150"
                  alt="Design / Development"
                />
              </div>
              <div className="step-body">
                <div className="step-number">05.</div>
                <div className="step-title">{language.Design}</div>
                <div className="step-desc">{language.Designcontent}</div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <img
                  className="img-fluid"
                  src="/user-page/img/icons/step-icon-6.svg"
                  width="150"
                  height="150"
                  alt="Verification / Confirmation"
                />
              </div>
              <div className="step-body">
                <div className="step-number">06.</div>
                <div className="step-title">{language.Verification}</div>
                <div className="step-desc">{language.Verificationcontent}</div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <img
                  className="img-fluid"
                  src="/user-page/img/icons/step-icon-7.svg"
                  width="150"
                  height="150"
                  alt="Delivery"
                />
              </div>
              <div className="step-body">
                <div className="step-number">07.</div>
                <div className="step-title">{language.Delivery}</div>
                <div className="step-desc">{language.Deliverycontent}</div>
              </div>
            </div>
            <div className="step-item">
              <div className="step-icon">
                <img
                  className="img-fluid"
                  src="/user-page/img/icons/step-icon-8.svg"
                  width="150"
                  height="150"
                  alt="Public work site release"
                />
              </div>
              <div className="step-body">
                <div className="step-number">08.</div>
                <div className="step-title">{language.Publishing}</div>
                <div className="step-desc">{language.Publishingcontent}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockStepToUse
