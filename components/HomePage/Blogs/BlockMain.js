import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Pagination from '@material-ui/lab/Pagination'
import { useSelector, useDispatch } from 'react-redux'
import { addTag } from '../../../redux/slices/tagSlice'

const BlockMain = ({ dataBlogs, count, params, setParams }) => {
  const [viewTag, setViewTag] = useState(null)
  const { tag } = useSelector((state) => state.tag)

  const dispatch = useDispatch()

  const handlePaginationChange = (e, page) => {
    setParams({ ...params, page: page })
    window.scrollTo(0, 0)
  }
  const handleChooseTag = (tag) => {
    dispatch(addTag(tag))
    setParams({ ...params, page: 1, tag_id: tag.id })
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (tag) {
      setViewTag(tag.name)
    }
  }, [tag])

  return (
    <div className="col-md-8 col-lg-9">
      {viewTag && (
        <div className="section-content-header line-bottom text-primary mb-3">
          <h5 className="section-content-title">{`Tag for "${viewTag}"`}</h5>
        </div>
      )}
      <div className="primary-box mb-5 mb-md-0">
        <ul className="list-flexiable list-unstyled">
          {dataBlogs?.map((dataBlog) => (
            <li key={dataBlog.id}>
              <div className="card card-flexiable border-0">
                <div className="row">
                  <div className="col-md-5 col-thumb-wrap">
                    <div className="card-thumb mb-3 mb-md-0">
                      <Link href={`/blogs/${dataBlog.friendly_url}`}>
                        <a>
                          <img
                            src={dataBlog.url_image_meta}
                            className="card-img-top img-item-main"
                            alt={dataBlog.title}
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7 col-content-wrap">
                    <div className="card-body p-0">
                      <div className="card-meta mb-1">
                        <p style={{marginRight: 8, display: 'inline-block'}}>{dataBlog.created_at.slice(0, 10)}</p>
                        {dataBlog.tags.length > 2
                          ? dataBlog.tags.slice(0, 2).map((tag, index) => (
                              <span
                                key={index}
                                className="badge bg-primary text-uppercase"
                                onClick={() => {
                                  handleChooseTag(tag)
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                {tag.name}
                              </span>
                            ))
                          : dataBlog.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="badge bg-primary text-uppercase"
                                onClick={() => {
                                  handleChooseTag(tag)
                                }}
                                style={{ cursor: 'pointer' }}
                              >
                                {tag.name}
                              </span>
                            ))}
                        {}
                      </div>
                      <h3 className="card-title">
                        <Link href={`/blogs/${dataBlog.friendly_url}`}>
                          <a className="text-hiden">{dataBlog.title}</a>
                        </Link>
                      </h3>
                      <div className="card-text text-hiden-3">{dataBlog.desc}</div>
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
