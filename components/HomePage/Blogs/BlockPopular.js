import Link from 'next/link'

const BlockPopular = ({ popularBlogs }) => {
  const top5PopularBlogs = popularBlogs.slice(0, 5)
  return (
    <div className="aside-right-box">
      <div className="section-content-header line-bottom text-primary mb-3">
        <h5 className="section-content-title">Popular Articles</h5>
      </div>
      <ul className="news-list-hoz list-unstyled">
        {top5PopularBlogs.map((popularBlog) => (
          <Link href={`/blogs/${popularBlog.friendly_url}`} key={popularBlog.id}>
            <li className='pointer'>
              <div className="card card-horizontal-news border-0">
                <div className="card-thumb mb-0">
                  <img
                    className="card-img-top img-item-popular"
                    src={popularBlog.url_image_meta}
                    width="105"
                    height="58"
                    alt={popularBlog.title}
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    <a className="text-hiden-3">{popularBlog.title}</a>
                  </h4>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default BlockPopular
