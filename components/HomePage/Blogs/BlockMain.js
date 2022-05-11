import React from 'react'
import Link from 'next/link'
import Pagination from '@material-ui/lab/Pagination'

const BlockMain = ({ dataBlogs, count, params, setParams }) => {
  const handlePaginationChange = (e, page) => {
    setParams({ ...params, page: page })
    window.scrollTo(0, 0)
  }
  return (
    <div className='col-md-8 col-lg-9'>
      <div className='primary-box mb-5 mb-md-0'>
        <ul className='list-flexiable list-unstyled'>
          {dataBlogs?.map((dataBlog) => (
            <li key={dataBlog.id}>
              <div className='card card-flexiable border-0'>
                <div className='row'>
                  <div className='col-md-5 col-thumb-wrap'>
                    <div className='card-thumb mb-3 mb-md-0'>
                      <Link href={`/blogs/${dataBlog.friendly_url}`}>
                        <a>
                          <img
                            src={dataBlog.url_image_meta}
                            className='card-img-top img-item-main'
                            alt='...'
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className='col-md-7 col-content-wrap'>
                    <div className='card-body p-0'>
                      <div className='card-meta mb-1'>
                        {dataBlog.created_at.slice(0, 10)}{' '}
                        {dataBlog.tags.map((tag, index) => (
                          <span key={index} className='badge bg-primary text-uppercase'>
                            {tag.name}
                          </span>
                        ))}
                      </div>
                      <h3 className='card-title'>
                        <Link href={`/blogs/${dataBlog.friendly_url}`}>
                          <a>{dataBlog.title}</a>
                        </Link>
                      </h3>
                      <div className='card-text text-hiden'>{dataBlog.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {count > 1 && (
          <Pagination
            className='flex-center'
            count={Math.ceil(count)}
            onChange={handlePaginationChange}
            page={params.page}
            size='large'
            shape='rounded'
            color='primary'
          />
        )}
      </div>
    </div>
  )
}

export default BlockMain
