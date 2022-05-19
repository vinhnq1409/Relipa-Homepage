import React from 'react'
import Link from 'next/link'
import Pagination from '@material-ui/lab/Pagination'

const BlockMain = ({ dataNews, count, params, setParams }) => {
  const handlePaginationChange = (e, page) => {
    setParams({ ...params, page: page })
    window.scrollTo(0, 0)
  }
  return (
    <div className="col-md-8 col-lg-9">
      <div className="primary-box mb-5 mb-md-0">
        <ul className="list-flexiable list-unstyled">
          {dataNews?.map((dataNew) => (
            <li key={dataNew.id}>
              <div className="card card-flexiable border-0">
                <div className="row">
                  <div className="col-md-5 col-thumb-wrap">
                    <div className="card-thumb mb-3 mb-md-0">
                      <Link href={`/blogs/${dataNew.friendly_url}`}>
                        <a>
                          <img
                            src={dataNew.url_image_meta}
                            width="362"
                            height="200"
                            className="card-img-top img-item-main"
                            alt={dataNew?.title}
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7 col-content-wrap">
                    <div className="card-body p-0">
                      <div className="card-meta mb-1">{dataNew.created_at.slice(0, 10)}</div>
                      <h3 className="card-title">
                        <Link href={`/news/${dataNew.friendly_url}`}>
                          <a>{dataNew.title}</a>
                        </Link>
                      </h3>
                      <div className="card-text">{dataNew.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {count > 1 && (
          <Pagination
            className="flex-center"
            count={Math.ceil(count)}
            onChange={handlePaginationChange}
            page={params.page}
            size="large"
            shape="rounded"
            color="primary"
          />
        )}
      </div>
    </div>
  )
}

export default BlockMain
