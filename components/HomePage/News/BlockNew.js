import Link from 'next/link'

const BlockNew = ({ dataNews }) => {
  let top5News
  dataNews.length > 5 ? (top5News = dataNews.slice(0, 5)) : (top5News = dataNews)

  return (
    <div className="aside-right-box">
      <div className="section-content-header line-bottom text-primary mb-3">
        <h5 className="section-content-title">New Articles</h5>
      </div>
      <ul className="news-list-hoz list-unstyled">
        {top5News.map((newItem) => (
          <Link href={`/news/${newItem.friendly_url}`} key={newItem.id}>
            <li className="pointer">
              <div className="card card-horizontal-news border-0">
                <div className="card-thumb mb-0">
                  <img
                    className="card-img-top img-item-popular"
                    src={newItem.url_image_meta}
                    width="105"
                    height="58"
                    alt={newItem.title}
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">
                    <a className="text-hiden-3">{newItem.title}</a>
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

export default BlockNew
