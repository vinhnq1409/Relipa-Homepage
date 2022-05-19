import { onPreventDefault } from '../../PreventDefault/onPreventDefault'

const BlockVoice = ({ voice }) => {
  return (
    <>
      <section className="section section-aos py-0 section-voice" data-aos="fade-up">
        <div className="container">
          <div className="section-heading section-heading-shadow">
            <h2 className="section-title" title="Voice">
              Voice
            </h2>
          </div>
        </div>
        <div className="section-bg">
          <div className="section-bg-img">
            <picture>
              <source media="(min-width:768px)" srcSet="user-page/img/home/bg-pc.png" />
              <img src="user-page/img/home/bg.png" width="285" height="825" alt="voice banner" />
            </picture>
          </div>
          <div className="section-bg-content">
            <div className="container">
              <div
                className="swiper-carousel swiper-carousel--vertical"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-carousel="swiper"
                slide-autoplay="false"
                slide-centeredslides="true"
                slide-speed="800"
                slide-item="1"
                slide-direction=""
                slide-loop="true"
              >
                <div className="swiper-container">
                  <div className="swiper-wrapper">
                    {voice?.map((item) => (
                      <div className="swiper-slide ps-4 pe-4 ps-md-5 pe-md-5">
                        <div className="card card-horizontal border-0 card-padding card-shadow-bottom">
                          <div className="card-thumb lazyload">
                            <a className="card-thumb-overlay" href="#" onClick={onPreventDefault}>
                              <img
                                className="card-img-top card-img-voice"
                                src={`http://${item.voice}`}
                                width="306"
                                height="306"
                                alt={`${item.title}`}
                              />
                            </a>
                          </div>
                          <div className="card-body">
                            <h3 className="card-title border-bottom">
                              <a href="#" onClick={onPreventDefault}>
                                {item.title}
                              </a>
                            </h3>
                            <div className="card-meta mb-4 pb-1">{item.company}</div>
                            <div className="card-text bg-quote">{item.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="swiper-pagination"></div>
                </div>
                <div className="swiper-controls">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlockVoice
