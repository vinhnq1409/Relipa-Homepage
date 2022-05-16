import Link from 'next/link'

const BlockNew = ({ blogs }) => {
  let top5NewBlogs = []
  blogs.length > 5 ? (top5NewBlogs = blogs.slice(0, 5)) : (top5NewBlogs = blogs)

  return (
    <div className="aside-right-box">
      <div className="section-content-header line-bottom text-primary mb-3">
        <h5 className="section-content-title">New Articles</h5>
      </div>
      <ul className="news-list-hoz list-unstyled">
        {top5NewBlogs.map((newBlog) => (
          <li key={newBlog.id}>
            <div className="card card-horizontal-news border-0">
              <div className="card-thumb mb-0">
                <img
                  className="card-img-top img-item-popular"
                  src={newBlog.url_image_meta}
                  width="105"
                  height="58"
                  alt="..."
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">
                  <Link href={`/blogs/${newBlog.friendly_url}`}>
                    <a>{newBlog.title}</a>
                  </Link>
                </h4>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlockNew
