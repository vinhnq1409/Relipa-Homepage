const BlockCard = ({ data, itemCard }) => {
  return (
    <div className="row masonry-grid" id="masonry-grid">
      {data?.data?.map((item, id) => (
        <>
          <div className="col-sm-6 col-lg-4 masonry-grid-item categories-01" data-category="categories-01" key={id}>
            <div className="card card-news card-padding-sm bg-lighter">
              <div className="card-thumb ">
                <a href="#" onClick={() => itemCard(item)} data-bs-toggle="modal" data-bs-target="#studyModal">
                  <img
                    src={item?.works[0]}
                    className="card-img-top img-item-related-medium"
                    alt={`${item.title}`}
                  />
                </a>
              </div>
              <div className="card-body">
                <h3 className="card-title">
                  <a href="#" onClick={() => itemCard(item)} data-bs-toggle="modal" data-bs-target="#studyModal">
                    {item?.title}
                  </a>
                </h3>
                <div className="card-text">{item?.desc}... </div>
                {item?.tags.map((tag, index) => (
                  <span key={index} className="badge bg-primary-opacity in-category mr12">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default BlockCard
