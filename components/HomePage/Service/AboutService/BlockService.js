import useTrans from '../../../../i18n/useTrans'
import Link from 'next/link'

const BlockService = () => {
  const trans = useTrans()
  const language = trans.aboutService.aboutService

  return (
    <section className="section section-service-inner section-aos" data-aos="fade-up">
      <div className="container">
        <div className="section-content">
          <div className="section-content-header line-bottom text-primary">
            <h2 className="section-content-title">Service</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="card card-overlay">
              <div className="card-thumb lazyload">
                <Link href="/lab-type-development">
                  <a className="card-thumb-overlay">
                    <img
                      className="card-img-top"
                      src="/user-page/img/service/service-img-1.png"
                      width="270"
                      height="469"
                      alt="Labtype Development"
                    />
                  </a>
                </Link>
              </div>
              <div className="card-body">
                <div className="card-index">01.</div>
                <h3 className="card-title card-item-about-service">
                  <Link href="/lab-type-development">
                    <a>{language.service.LabType}</a>
                  </Link>
                </h3>
                <div className="card-text text-hiden-3 "> {language.service.LabTypeContent}</div>
                <div className="card-bottom">
                  <div className="d-grid">
                    <Link href="/lab-type-development">
                      <a className="btn btn-primary btn-block btn-lg rounded-0">{language.seemore}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="card card-overlay">
              <div className="card-thumb lazyload">
                <Link href="/web-system-development">
                  <a className="card-thumb-overlay">
                    <img
                      className="card-img-top"
                      src="/user-page/img/service/service-img-2.png"
                      width="270"
                      height="469"
                      alt="Web & App Development"
                    />
                  </a>
                </Link>
              </div>
              <div className="card-body">
                <div className="card-index">02.</div>
                <h3 className="card-title card-item-about-service">
                  <Link href="/web-system-development">
                    <a>{language.service.websystem}</a>
                  </Link>
                </h3>
                <div className="card-text text-hiden-3 "> {language.service.websystemContent}</div>
                <div className="card-bottom">
                  <div className="d-grid">
                    <Link href="/web-system-development">
                      <a className="btn btn-primary btn-block btn-lg rounded-0">{language.seemore}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="card card-overlay">
              <div className="card-thumb lazyload">
                <Link href="/blockchain-development">
                  <a className="card-thumb-overlay">
                    <img
                      className="card-img-top"
                      src="/user-page/img/service/service-img-4.png"
                      width="270"
                      height="469"
                      alt="Blockchain Development"
                    />
                  </a>
                </Link>
              </div>
              <div className="card-body">
                <div className="card-index">03.</div>
                <h3 className="card-title card-item-about-service">
                  <Link href="/blockchain-development">
                    <a>{language.service.Blockchain}</a>
                  </Link>
                </h3>
                <div className="card-text text-hiden-3 ">{language.service.BlockchainContent}</div>
                <div className="card-bottom">
                  <div className="d-grid">
                    <Link href="/blockchain-development">
                      <a className="btn btn-primary btn-block btn-lg rounded-0">{language.seemore}</a>
                    </Link>
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

export default BlockService
