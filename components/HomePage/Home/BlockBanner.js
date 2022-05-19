import Link from 'next/link'
import useTrans from '../../../i18n/useTrans'
const BlockBanner = () => {
  const trans = useTrans()
  const language = trans.home.home
  return (
    <div id="main-banner">
      <section className="section section-aos section-banner py-0" data-aos="fade-down">
        <div className="swiper-carousel banner-swiper-carousel">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="main-banner-item">
                  <div className="main-banner-item-bg">
                    <picture>
                      <source media="(min-width:768px)" srcSet="/user-page/img/home/banner.png" />
                      <img src="/user-page/img/home/banner.png" width="375" height="812" alt="banner home" />
                    </picture>
                  </div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h1 className="banner-title">{language.banner.title}</h1>
                        <div className="main-banner-content">
                          <div className="banner-summary">{language.banner.content}</div>
                          <Link href="/company">
                            <a className="btn btn-outline-light btn-lg">{language.seemore}</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="main-banner-item">
                  <div className="main-banner-item-bg">
                    <picture>
                      <source media="(min-width:768px)" srcSet="/user-page/img/home/banner.png" />
                      <img src="/user-page/img/home/banner.png" alt="banner home" />
                    </picture>
                  </div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h1 className="banner-title">{language.banner.title}</h1>

                        <div className="main-banner-content">
                          <div className="banner-summary">{language.banner.content}</div>
                          <Link href="/company">
                            <a className="btn btn-outline-light btn-lg">{language.seemore}</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="main-banner-item">
                  <div className="main-banner-item-bg">
                    <picture>
                      <source media="(min-width:768px)" srcSet="/user-page/img/home/banner.png" />
                      <img src="/user-page/img/home/banner.png" alt="Banner Home" />
                    </picture>
                  </div>
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h1 className="banner-title">{language.banner.title}</h1>
                        <div className="main-banner-content">
                          <div className="banner-summary">{language.banner.content}</div>
                          <Link href="/company">
                            <a className="btn btn-outline-light btn-lg">{language.seemore}</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-controls">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
        <div className="scroll-down">
          <div className="scroll-down-text">{language.scroll}</div>
        </div>
      </section>
    </div>
  )
}

export default BlockBanner
