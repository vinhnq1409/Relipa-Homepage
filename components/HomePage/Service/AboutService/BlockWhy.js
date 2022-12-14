import useTrans from '../../../../i18n/useTrans'
import { onPreventDefault } from '../../../PreventDefault/onPreventDefault'

const BlockWhy = () => {
  const trans = useTrans()
  const language = trans.aboutService.aboutService.why

  return (
    <section className="section section-why section-aos" data-aos="fade-up">
      <div className="container">
        <div className="section-content">
          <div className="section-content-header line-bottom text-white">
            <h2 className="section-content-title">{language.title}</h2>
          </div>
          <div
            className="swiper-carousel swiper-carousel--vertical swiper-service-why"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-carousel="swiper"
            slide-autoplay="false"
            slide-centeredslides="true"
            slide-speed="800"
            slide-item="5"
            slide-direction=""
            slide-loop="true"
          >
            <div className="swiper-container">
              <div className="swiper-wrapper" id="text-equal">
                <div className="swiper-slide">
                  <div className="card card-iwt border-0">
                    <div className="card-thumb text-center">
                      <a href="#" onClick={onPreventDefault}>
                        <img src="/user-page/img/icons/idea.svg" alt="Consuling ability width more than 6" />
                      </a>
                    </div>
                    <div className="card-body p-0">
                      <div className="card-header text-center">
                        <h5 className="card-title">
                          <a href="#" onClick={onPreventDefault}>
                            {language.First.title}
                          </a>
                        </h5>
                      </div>
                      <div className="card-text text-equal ">
                        {language.First.contentFirst} <br />
                        {language.First.contentSecond}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-iwt border-0">
                    <div className="card-thumb text-center">
                      <a href="#" onClick={onPreventDefault}>
                        <img src="/user-page/img/icons/money-bag.svg" alt="Security" />
                      </a>
                    </div>
                    <div className="card-body p-0">
                      <div className="card-header text-center">
                        <h5 className="card-title">
                          <a href="#" onClick={onPreventDefault}>
                            {language.Second.title}
                          </a>
                        </h5>
                      </div>
                      <div className="card-text text-equal">
                        {language.Second.contentFirst} <br />
                        {language.Second.contentSecond} <br />
                        {language.Second.contentthird}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-iwt border-0">
                    <div className="card-thumb text-center">
                      <a href="#" onClick={onPreventDefault}>
                        <img src="/user-page/img/icons/internet.svg" alt="Leading the way in cutting-edge " />
                      </a>
                    </div>
                    <div className="card-body p-0">
                      <div className="card-header text-center">
                        <h5 className="card-title">
                          <a href="#" onClick={onPreventDefault}>
                            {language.Third.title}
                          </a>
                        </h5>
                      </div>
                      <div className="card-text text-equal">
                        {language.Third.contentFirst} <br />
                        {language.Third.contentSecond}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-iwt border-0">
                    <div className="card-thumb text-center">
                      <a href="#" onClick={onPreventDefault}>
                        <img src="/user-page/img/icons/rocket.svg" alt="High quality and peace of mind" />
                      </a>
                    </div>
                    <div className="card-body p-0">
                      <div className="card-header text-center">
                        <h5 className="card-title">
                          <a href="#" onClick={onPreventDefault}>
                            {language.Four.title}
                          </a>
                        </h5>
                      </div>
                      <div className="card-text text-equal">
                        {language.Four.contentFirst} <br />
                        {language.Four.contentSecond}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="card card-iwt border-0">
                    <div className="card-thumb text-center">
                      <a href="#" onClick={onPreventDefault}>
                        <img src="/user-page/img/icons/handshake.svg" alt="Low price" />
                      </a>
                    </div>
                    <div className="card-body p-0">
                      <div className="card-header text-center">
                        <h5 className="card-title">
                          <a href="#" onClick={onPreventDefault}>
                            {language.Fifth.title}
                          </a>
                        </h5>
                      </div>
                      <div className="card-text text-equal">
                        {language.Fifth.contentFirst}
                        <br />
                        {language.Fifth.contentSecond}
                        <br />
                        {language.Fifth.contentThird}
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
      </div>
    </section>
  )
}

export default BlockWhy
