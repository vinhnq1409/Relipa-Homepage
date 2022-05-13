import useTrans from '../../../i18n/useTrans'
import Link from 'next/link'

const BlockNew = () => {
  const trans = useTrans()
  const language = trans.home.home

  return (
    <>
      <section className="section section-aos section-news" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-heading">
                <div className="row align-content-center">
                  <div className="col-4 col-md-12">
                    <h2 className="section-title" title="News">
                      News
                    </h2>
                  </div>
                  <div className="col-6 col-md-12">
                    <h3 className="section-sub-title" title="Blog">
                      Blog
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <ul className="news-list list-unstyled border-top">
                <li className="border-bottom">
                  <div className="card card-horizontal-sm border-0">
                    <div className="card-thumb lazyload">
                      <a className="card-thumb-overlay" href="#">
                        <img
                          className="card-img-top"
                          src="user-page/img/home/sr-03.png"
                          width="130"
                          height="80"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="card-meta">2022.03.29</div>
                      <div className="card-text">
                        <a href="#">{language.news.contentFirst}</a>
                      </div>
                      <a href="#" className="btn-link-icon" aria-label="第31回Japan IT Week 春へ出展のお知らせ ">
                        <svg width="37" height="8" viewBox="0 0 37 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29 1L35.5 7.5H1" stroke="#0045C5" strokeLinecap="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="border-bottom">
                  <div className="card card-horizontal-sm border-0">
                    <div className="card-thumb lazyload">
                      <a className="card-thumb-overlay" href="#">
                        <img
                          className="card-img-top"
                          src="user-page/img/home/sr-03.png"
                          width="130"
                          height="80"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="card-meta">2022.01.26</div>
                      <div className="card-text">
                        <a href="#">{language.news.contentSecond}</a>
                      </div>
                      <a href="#" className="btn-link-icon" aria-label="第31回Japan IT Week 春へ出展のお知らせ ">
                        <svg width="37" height="8" viewBox="0 0 37 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29 1L35.5 7.5H1" stroke="#0045C5" strokeLinecap="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="border-bottom">
                  <div className="card card-horizontal-sm border-0">
                    <div className="card-thumb lazyload">
                      <a className="card-thumb-overlay" href="#">
                        <img
                          className="card-img-top"
                          src="user-page/img/home/sr-03.png"
                          width="130"
                          height="80"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="card-meta">2022.01.21</div>
                      <div className="card-text">
                        <a href="#">{language.news.contentThird}</a>
                      </div>
                      <a href="#" className="btn-link-icon" aria-label="第31回Japan IT Week 春へ出展のお知らせ ">
                        <svg width="37" height="8" viewBox="0 0 37 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29 1L35.5 7.5H1" stroke="#0045C5" strokeLinecap="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="border-bottom">
                  <div className="card card-horizontal-sm border-0">
                    <div className="card-thumb lazyload">
                      <a className="card-thumb-overlay" href="#">
                        <img
                          className="card-img-top"
                          src="user-page/img/home/sr-03.png"
                          width="130"
                          height="80"
                          alt="..."
                        />
                      </a>
                    </div>
                    <div className="card-body">
                      <div className="card-meta">2022.01.13</div>
                      <div className="card-text">
                        <a href="#">{language.news.contentFoufth}</a>
                      </div>
                      <a href="#" className="btn-link-icon" aria-label="第31回Japan IT Week 春へ出展のお知らせ ">
                        <svg width="37" height="8" viewBox="0 0 37 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29 1L35.5 7.5H1" stroke="#0045C5" strokeLinecap="round" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="news-footer text-end pt-3">
                <Link href="/news">
                  <a className="btn btn-outline-greyish btn-lg rounded-0">{language.seemore}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlockNew
