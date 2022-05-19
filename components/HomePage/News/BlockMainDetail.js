import React, { useEffect, useRef } from 'react'
const BlockMainDetail = ({ title, created_at, url_image_meta, content }) => {
  const refContent = useRef()

  useEffect(() => {
    refContent.current.innerHTML = content
  }, [])

  return (
    <div className="col-md-8 col-lg-9">
      <div className="primary-box mb-5 mb-md-0">
        <article className="post mb-5">
          <div className="post-header">
            <div className="post-ago card-meta mb-2">{created_at.slice(0, 10)}</div>
            <h3 className="post-title mb-0">{title}</h3>
          </div>
          <div className="post-body">
            <figure>
              <img className="img-fluid" src={url_image_meta} width="850" height="451" alt={title} />
            </figure>
            <div ref={refContent}></div>
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlockMainDetail
