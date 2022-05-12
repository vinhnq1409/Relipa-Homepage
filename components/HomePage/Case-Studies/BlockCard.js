function BlockCard({ data, itemCard }) {
  console.log('block card', data)
  const itemCardCaseStudy = (item) => {
    itemCard(item)
  }
  return (
    <div className="row masonry-grid" id="masonry-grid">
      {data?.data?.map((item) => (
        <>
          <div className="col-sm-6 col-lg-4 masonry-grid-item categories-01" data-category="categories-01">
            <div className="card card-news card-padding-sm bg-lighter">
              <div className="card-thumb">
                <a href="#" onClick={() => itemCardCaseStudy(item)} data-bs-toggle="modal" data-bs-target="#studyModal">
                  <img
                    className="card-img-top"
                    src={`http://${item.works[0]}`}
                    style={{ width: '260px', height: '192px' }}
                    alt="..."
                  />
                </a>
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  <a
                    href="#"
                    onClick={() => itemCardCaseStudy(item)}
                    data-bs-toggle="modal"
                    data-bs-target="#studyModal"
                  >
                    {item.title}
                  </a>
                </h3>
                <div className="card-text">{item.desc} </div>
                <span className="badge bg-primary-opacity in-category">{item.tags}</span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default BlockCard
