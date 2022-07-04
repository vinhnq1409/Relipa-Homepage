import useTrans from '../../../../i18n/useTrans'
import { onPreventDefault } from '../../../PreventDefault/onPreventDefault'

const BlockOverview = () => {
  const trans = useTrans()
  const language = trans.labtypeDevelopment.labTypeDevelopment

  return (
    <>
      <section className="section section-aos" data-aos="fade-up">
        <div className="container">
          <div className="section-content">
            <div className="section-content-header line-bottom text-primary">
              <h2 className="section-content-title">{language.overview}</h2>
            </div>
            <div className="overview">
              <div className="overview-inner">
                <div className="card card-media border-0 overview-item">
                  <div className="card-body p-0 mb-md-0">
                    <div className="card-content">
                      <div className="card-icon mb-2">
                        <img
                          src="/user-page/img/icons/people.svg"
                          width="40"
                          height="40"
                          alt="About lab-type development"
                        />
                      </div>
                      <h3 className="card-title">
                        <a href="#" onClick={onPreventDefault}>
                          {language.about.title}
                        </a>
                      </h3>
                      <div className="card-text">
                        <ul>
                          <li className='justify-align'>{language.about.contentFirst}</li>
                          <li className='justify-align'>{language.about.contentSecond}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-thumb">
                    <div className="card-frame">
                      <img
                        className="img-fluid"
                        src="/user-page/img/lab/overview-1.png"
                        width="411"
                        height="406"
                        alt="Font-0 About lab-type development"
                      />
                      <div className="card-img">
                        <img
                          className="img-fluid"
                          src="/user-page/img/lab/img-2.png"
                          width="334"
                          height="236"
                          alt="Font-1 About lab-type development"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-media border-0 overview-item">
                  <div className="card-body p-0 mb-md-0">
                    <div className="card-content">
                      <div className="card-icon mb-2">
                        <img
                          src="/user-page/img/icons/calendar.svg"
                          width="40"
                          height="40"
                          alt="Working hours and holidays"
                        />
                      </div>
                      <h3 className="card-title">
                        <a href="#" onClick={onPreventDefault}>
                          {language.working.title}
                        </a>
                      </h3>
                      <div className="card-text">
                        <ul>
                          <li className='justify-align'>{language.working.contentFirst}</li>
                          <li className='justify-align' >{language.working.contentSecond}</li>
                          <li className='justify-align'>{language.working.contentThird}</li>
                          <li className='justify-align'>{language.working.contentFourth}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-thumb">
                    <div className="card-frame">
                      <img
                        className="img-fluid"
                        src="/user-page/img/lab/overview-2.png"
                        width="420"
                        height="290"
                        alt="Font-0 Working hours and holidays"
                      />
                      <div className="card-img">
                        <img
                          className="img-fluid"
                          src="/user-page/img/lab/img-3.png"
                          width="334"
                          height="236"
                          alt="Font-1 Working hours and holidays"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-media border-0 overview-item">
                  <div className="card-body p-0 mb-md-0">
                    <div className="card-content">
                      <div className="card-icon mb-2">
                        <img src="/user-page/img/icons/task-square.svg" width="40" height="40" alt="Type of contract" />
                      </div>
                      <h3 className="card-title">
                        <a href="#" onClick={onPreventDefault}>
                          {language.contract.title}
                        </a>
                      </h3>
                      <div className="card-text">
                        <ul>
                          <li className='justify-align'>{language.contract.contentFirst}</li>
                          <li className='justify-align'>{language.contract.contentSecond}</li>
                          <li className='justify-align'>{language.contract.contentThird}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card-thumb">
                    <div className="card-frame">
                      <img
                        className="img-fluid"
                        src="/user-page/img/lab/overview-3.png"
                        width="418"
                        height="322"
                        alt="Font-0 Type of contract"
                      />
                      <div className="card-img">
                        <img
                          className="img-fluid"
                          src="/user-page/img/lab/img-4.png"
                          width="334"
                          height="236"
                          alt="Font-1 Type of contract"
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
