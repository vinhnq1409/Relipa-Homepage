import { useQuery } from 'react-query'
import { get } from '../../../api/BaseRequest'
import Link from 'next/link'
import useTrans from '../../../i18n/useTrans'

function CaseStudy({ itemCard }) {
  const trans = useTrans()
  const language = trans.aboutService.aboutService
  const getCaseStudy = async () => {
    return await get(`user/en/works`)
  }
  const { data: dataCaseStudy } = useQuery('getBlog', getCaseStudy)

  return (
    <>
      <section className="section section-aos" data-aos="fade-up">
        <div className="container">
          <div className="section-content">
            <div className="section-content-header line-bottom text-primary">
              <h2 className="section-content-title">Case Studies</h2>
            </div>
            <div className="row justify-content-center">
              {dataCaseStudy?.data?.slice(0, 4).map((item, id) => (
                <div className="col-sm-6 col-md-3" key={id}>
                  <div className="card card-news short">
                    <div className="card-thumb">
                      <div className="img-thumb">
                        <a href="#" onClick={() => itemCard(item)} data-bs-toggle="modal" data-bs-target="#studyModal">
                          <img src={`http://${item?.works[0]}`} className="card-img-top img-item-related" alt="..." />
                        </a>
                      </div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="#" onClick={() => itemCard(item)} data-bs-toggle="modal" data-bs-target="#studyModal">
                          {item?.title}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center pt-1">
              <Link href="/case-studies">
                <a className="btn btn-outline-greyish btn-lg rounded-0 px-5" href="#">
                  {language.seemore}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudy
