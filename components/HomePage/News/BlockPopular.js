import Link from 'next/link'

const BlockPopular = ({ popularNews }) => {
  const top5PopularNews = popularNews
  return (
    <div className="aside-right-box">
      <div className="section-content-header line-bottom text-primary mb-3">
        <h5 className="section-content-title">Popular Articles</h5>
      </div>
      <ul className="news-list-hoz list-unstyled">
        {top5PopularNews.map((popularNew) => (
          <li key={popularNew.id}>
            <div className="card card-horizontal-news border-0">
              <div className="card-thumb mb-0">
                <img
                  className="card-img-top img-item-popular"
                  src={popularNew.url_image_meta}
                  width="105"
                  height="58"
                  alt={popularNew.title}
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">
                  <Link href={`/news/${popularNew.friendly_url}`}>
                    <a className="text-hiden-3">{popularNew.title}</a>
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

export default BlockPopular
