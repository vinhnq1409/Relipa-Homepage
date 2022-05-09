import React from 'react'
import Link from 'next/link'

const BlockMain = ({ dataBlogs }) => {
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
                            width='362'
                            height='200'
                            className='card-img-top'
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
                          <span key={index} className='badge bg-primary text-uppercase'>{tag.name}</span>
                        ))}
                      </div>
                      <h3 className='card-title'>
                        <Link href={`/blogs/${dataBlog.friendly_url}`}>
                          <a>{dataBlog.title}</a>
                        </Link>
                      </h3>
                      <div className='card-text'>{dataBlog.desc}</div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <nav className='pagination-wrapper mt-3' aria-label='Page navigation example'>
          <ul className='pagination justify-content-center'>
            <li className='page-item'>
              <a className='page-link' href='#' aria-label='Previous'>
                <i className='las la-angle-left'></i>
              </a>
            </li>
            <li className='page-item active'>
              <a className='page-link' href='#'>
                1
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                2
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                3
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                4
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                5
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#' aria-label='Next'>
                <i className='las la-angle-right'></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default BlockMain
