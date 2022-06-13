import Link from 'next/link'
import useTrans from '../../../i18n/useTrans'

const BlockService = () => {
  const trans = useTrans()
  const language = trans.home.home

  return (
    <section className="section section-aos section-service py-0" data-aos="fade-up">
      <div className="container">
        <div className="section-heading section-heading-shadow">
          <h2 className="section-title" title="Service">
            Service
          </h2>
        </div>
        <div
          className="swiper-carousel swiper-carousel--arrow-length swiper-carousel--highlight-active"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-carousel="swiper"
          slide-autoplay="false"
          slide-speed="800"
          slide-item="3"
          slide-loop="true"
        >
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="card card-overlay">
                  <div className="card-thumb lazyload">
                    <Link href="/lab-type-development">
                      <a className="card-thumb-overlay">
                        <img
                          className="card-img-top"
                          src="user-page/img/home/sr-01.png"
                          width="278"
                          height="469"
                          alt="Lab-type Development"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="card-index">01.</div>
                    <h3 className="card-title card-item-home-service">
                      <Link href="/lab-type-development">
                        <a>{language.service.LabType}</a>
                      </Link>
                    </h3>
                    <div className="card-text text-hiden-3 ">{language.service.LabTypeContent}</div>
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
              <div className="swiper-slide">
                <div className="card card-overlay">
                  <div className="card-thumb lazyload">
                    <Link href="/web-system-development">
                      <a className="card-thumb-overlay">
                        <img
                          className="card-img-top"
                          src="user-page/img/home/sr-02.png"
                          width="278"
                          height="469"
                          alt="Web System Development"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="card-index">02.</div>
                    <h3 className="card-title card-item-home-service">
                      <Link href="/web-system-development">
                        <a>{language.service.websystem}</a>
                      </Link>
                    </h3>
                    <div className="card-text text-hiden-3">{language.service.websystemContent}</div>
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
              <div className="swiper-slide">
                <div className="card card-overlay">
                  <div className="card-thumb lazyload">
                    <Link href="/business-system-development">
                      <a className="card-thumb-overlay">
                        <img
                          className="card-img-top"
                          src="user-page/img/home/sr-03.png"
                          width="278"
                          height="469"
                          alt="Business System Development"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="card-index">03.</div>
                    <h3 className="card-title card-item-home-service">
                      <Link href="/business-system-development">
                        <a>{language.service.Business}</a>
                      </Link>
                    </h3>
                    <div className="card-text text-hiden-3">{language.service.BusinesContent}</div>
                    <div className="card-bottom">
                      <div className="d-grid">
                        <Link href="/business-system-development">
                          <a className="btn btn-primary btn-block btn-lg rounded-0">{language.seemore}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card card-overlay">
                  <div className="card-thumb lazyload">
                    <Link href="/blockchain-development">
                      <a className="card-thumb-overlay">
                        <img
                          className="card-img-top"
                          src="user-page/img/home/sr-01.png"
                          width="278"
                          height="469"
                          alt="Blockchain Development"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="card-index">04.</div>
                    <h3 className="card-title card-item-home-service">
                      <Link href="/blockchain-development">
                        <a> {language.service.Blockchain} </a>
                      </Link>
                    </h3>
                    <div className="card-text text-hiden-3">{language.service.BlockchainContent}</div>
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
              <div className="swiper-slide">
                <div className="card card-overlay">
                  <div className="card-thumb lazyload">
                    <Link href="/smartphone-application-development">
                      <a className="card-thumb-overlay">
                        <img
                          className="card-img-top"
                          src="user-page/img/home/sr-02.png"
                          width="278"
                          height="469"
                          alt="Smartphone Application Development"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="card-index">05.</div>
                    <h3 className="card-title card-item-home-service">
                      <Link href="/smartphone-application-development">
                        <a>{language.service.Smartphone}</a>
                      </Link>
                    </h3>
                    <div className="card-text text-hiden-3">{language.service.SmartphoneContent}</div>
                    <div className="card-bottom">
                      <div className="d-grid">
                        <Link href="/smartphone-application-development">
                          <a className="btn btn-primary btn-block btn-lg rounded-0">{language.seemore}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="card card-overlay">
                  <div className="card-thumb lazyload">
                    <Link href="/aws-migration">
                      <a className="card-thumb-overlay">
                        <img
                          className="card-img-top"
                          src="user-page/img/home/sr-03.png"
                          width="278"
                          height="469"
                          alt="Aws Migration"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="card-index">06.</div>
                    <h3 className="card-title card-item-home-service">
                      <Link href="/aws-migration">
                        <a> {language.service.AWS}</a>
                      </Link>
                    </h3>
                    <div className="card-text text-hiden-3">{language.service.AWSContent}</div>
                    <div className="card-bottom">
                      <div className="d-grid">
                        <Link href="/aws-migration">
                          <a className="btn btn-primary btn-block btn-lg rounded-0">{language.seemore}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <div className="swiper-controls">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockService
