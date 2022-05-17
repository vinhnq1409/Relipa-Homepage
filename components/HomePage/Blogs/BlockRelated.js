import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { addTag } from '../../../redux/slices/tagSlice'

const BlockRelated = ({ dataBlog }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const handleChooseTag = (tag) => {
    dispatch(addTag(tag.id))
    router.push('/blogs')
  }
  return (
    <section className="section section-aos" data-aos="fade-up">
      <div className="container">
        <div className="section-content">
          <div className="section-content-header line-bottom text-primary mb-3">
            <h3 className="section-content-title">Related article</h3>
          </div>
          <div className="row">
            {dataBlog.dataBlogsForTags.map((blog) => (
              <div key={blog.id} className="col-sm-6 col-md-3">
                <div className="card card-news short">
                  <div className="card-thumb">
                    <Link href={`/blogs/${blog.friendly_url}`}>
                      <a>
                        <img
                          className="card-img-top img-item-related"
                          src={blog.url_image_meta}
                          width="260"
                          height="192"
                          alt="..."
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="card-body">
                    <div className="card-meta mb-1">
                      {blog.created_at.slice(0, 10)}{' '}
                      {blog.tags.length > 2
                        ? blog.tags.slice(0, 2).map((tag, index) => (
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
                        : blog.tags.map((tag, index) => (
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
                      <span className="badge bg-primary text-uppercase"></span>
                    </div>
                    <h3 className="card-title">
                      <Link href={`/blogs/${blog.friendly_url}`}>
                        <a className="text-hiden">{blog.title}</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockRelated
