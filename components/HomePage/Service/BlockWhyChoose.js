import useTrans from '../../../i18n/useTrans'
import Link from 'next/link'
const BlockWhyChoose = () => {
  const trans = useTrans()
  const language = trans.labtypeDevelopment.labTypeDevelopment
  return (
    <>
      <section className="section section-why section-aos" data-aos="fade-up">
        <div className="container">
          <div className="section-content">
            <div className="section-content-header line-bottom text-white">
              <h2 className="section-content-title">{language.why.title}</h2>
            </div>
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
                <div className="swiper-wrapper" id="text-equal">
                  <div className="swiper-slide ps-4 pe-4 ps-md-5 pe-md-5 ">
                    <div className="card card-over text-equal">
                      <div className="card-body">
                        <div className="card-thumb">
                          <a href="#">
                            <img
                              className="card-img-top"
                              src="/user-page/img/lab/img-5.png"
                              width="327"
                              height="183"
                              alt="Lab-type development with a customer retention rate of 90%"
                            />
                          </a>
                        </div>
                        <div className="card-index">01</div>
                        <h3 className="card-title text-equal-2">
                          <a href="#">{language.why.contentFirst}</a>
                        </h3>
                        <div className="card-text ">
                          There is no need to create a contract for each project, and payment is a fixed monthly fee.
                          justing the contract details.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide ps-4 pe-4 ps-md-5 pe-md-5 ">
                    <div className="card card-over text-equal">
                      <div className="card-body">
                        <div className="card-thumb">
                          <a href="#">
                            <img
                              className="card-img-top"
                              src="/user-page/img/lab/img-6.png"
                              width="327"
                              height="183"
                              alt="Provides a complete lab-type development that is flexible and can accumulate know-how as well as cost."
                            />
                          </a>
                        </div>
                        <div className="card-index">02</div>
                        <h3 className="card-title text-equal-2">
                          <a href="#">{language.why.contentSecond}</a>
                        </h3>
                        <div className="card-text ">
                          There is no need to create a contract for each project, and payment is a fixed monthly fee.
                          This simplifies complicated procedures and allows you to focus on your business. Even if
                          requirements or specifications change according to the business during the development period,
                          it is possible to flexibly respond without adjusting the contract details.
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
    </>
  )
}

export default BlockWhyChoose
