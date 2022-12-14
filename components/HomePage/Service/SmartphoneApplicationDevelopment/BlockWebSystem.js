import useTrans from '../../../../i18n/useTrans'
import { onPreventDefault } from '../../../PreventDefault/onPreventDefault'

function BlockWebSystem() {
  const trans = useTrans()
  const language = trans.smartPhone
  return (
    <section className="section section-aos" data-aos="fade-up">
      <div className="container">
        <div className="section-content">
          <div className="section-content-header line-bottom text-primary">
            <h2 className="section-content-title">{language.smartphoneApplicationService}</h2>
          </div>
          <div className="overview">
            <div className="overview-inner">
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img src="/user-page/img/icons/status.svg" width="40" height="40" alt="Matching app" />
                    </div>
                    <h3 className="card-title">
                      <a href="#" onClick={onPreventDefault}>
                        {language.matching.title}
                      </a>
                    </h3>
                    <div className="card-text justify-align">{language.matching.content}</div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-1.png"
                      width="411"
                      height="406"
                      alt="Font-0 Matching app"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/smartphone/img-2.png"
                        width="334"
                        height="236"
                        alt="Font-1 Matching app"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img src="/user-page/img/icons/mobile.svg" width="40" height="40" alt="Livestreaming app" />
                    </div>
                    <h3 className="card-title">
                      <a href="#" onClick={onPreventDefault}>
                        {language.livestream.title}
                      </a>
                    </h3>
                    <div className="card-text justify-align">{language.livestream.content}</div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-2.png"
                      width="420"
                      height="290"
                      alt="Font-0 Livestreaming app"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/smartphone/img-3.png"
                        width="334"
                        height="236"
                        alt="Font-1 Livestreaming app"
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
