import useTrans from '../../../i18n/useTrans'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTransition, animated } from 'react-spring'

const BlockNew = ({ dataNews, dataBlogs }) => {
  const trans = useTrans()
  const language = trans.home.home
  const [appreciate, setAppreciate] = useState(true)
  const [appreciateAPI, setAppreciateAPI] = useState([])
  const [currentAPI, setCurrentAPI] = useState('news')

  const transition = useTransition(appreciate, {
    from: { x: 0, y: 12, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    delay: 100,
  })

  const onChangeAppreciate = (e) => {
    if (e.target.outerText === 'Blog') {
      setAppreciate(false)
      setAppreciateAPI(dataBlogs.data)
      setCurrentAPI('blogs')
    } else {
      setAppreciate(true)
      setAppreciateAPI(dataNews.data)
      setCurrentAPI('news')
    }
  }

  useEffect(() => {
    if (dataNews) {
      setAppreciateAPI(dataNews.data)
    }
  }, [dataNews])

  return (
    <>
      <section className="section section-aos section-news" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="section-heading">
                {transition((style, item) =>
                  item ? (
                    <animated.div className="row align-content-center" style={style}>
                      <div className="col-4 col-md-12">
                        <h2 className="section-title" title={language.news.title}>
                          {language.news.title}
                        </h2>
                      </div>
                      <div className="col-6 col-md-12">
                        <h3
                          className="section-sub-title pointer"
                          title={language.blog.title}
                          onClick={(e) => onChangeAppreciate(e)}
                        >
                          {language.blog.title}
                        </h3>
                      </div>
                    </animated.div>
                  ) : (
                    <animated.div className="row align-content-center" style={style}>
                      <div className="col-4 col-md-12">
                        <h2 className="section-title" title={language.news.title}>
                          {language.blog.title}
                        </h2>
                      </div>
                      <div className="col-6 col-md-12">
                        <h3
                          className="section-sub-title pointer"
                          title={language.news.title}
                          onClick={(e) => onChangeAppreciate(e)}
                        >
                          {language.news.title}
                        </h3>
                      </div>
                    </animated.div>
                  )
                )}
              </div>
            </div>
            <div className="col-md-8">
              <ul className="news-list list-unstyled border-top">
                {appreciateAPI.length > 5
                  ? appreciateAPI.slice(0, 5).map((item, index) => (
                      <li className="border-bottom" key={index}>
                        <div className="card card-horizontal-sm border-0">
                          <div className="card-thumb lazyload">
                            <Link href={`/${currentAPI}/${item.friendly_url}`}>
                              <a className="card-thumb-overlay">
                                <img
                                  className="card-img-top"
                                  src={item.url_image_meta}
                                  width="130"
                                  height="80"
                                  alt={`${item.friendly_url}`}
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="card-body">
                            <div className="card-meta">{item.created_at}</div>
                            <div className="card-text">
                              <Link href={`/${currentAPI}/${item.friendly_url}`}>
                                <a className="text-hiden">{item.title}</a>
                              </Link>
                            </div>
                            <Link href={`/${currentAPI}/${item.friendly_url}`}>
                              <a className="btn-link-icon" aria-label="第31回Japan IT Week 春へ出展のお知らせ ">
                                <svg
                                  width="37"
                                  height="8"
                                  viewBox="0 0 37 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M29 1L35.5 7.5H1" stroke="#0045C5" strokeLinecap="round" />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))
                  : appreciateAPI.map((item, index) => (
                      <li className="border-bottom" key={index}>
                        <div className="card card-horizontal-sm border-0">
                          <div className="card-thumb lazyload">
                            <Link href={`/${currentAPI}/${item.friendly_url}`}>
                              <a className="card-thumb-overlay">
                                <img
                                  className="card-img-top"
                                  src={item.url_image_meta}
                                  width="130"
                                  height="80"
                                  alt={`${item.friendly_url}`}
                                />
                              </a>
                            </Link>
                          </div>
                          <div className="card-body">
                            <div className="card-meta">{item.created_at}</div>
                            <div className="card-text">
                              <Link href={`/${currentAPI}/${item.friendly_url}`}>
                                <a className="text-hiden">{item.title}</a>
                              </Link>
                            </div>
                            <Link href={`/${currentAPI}/${item.friendly_url}`}>
                              <a className="btn-link-icon" aria-label="第31回Japan IT Week 春へ出展のお知らせ ">
                                <svg
                                  width="37"
                                  height="8"
                                  viewBox="0 0 37 8"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M29 1L35.5 7.5H1" stroke="#0045C5" strokeLinecap="round" />
                                </svg>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </li>
                    ))}
              </ul>
              <div className="news-footer text-end pt-3">
                <Link href={`/${currentAPI}`}>
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
