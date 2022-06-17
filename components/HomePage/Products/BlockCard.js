import styles from '../../../styles/user/CaseStudy.module.css'

function BlockCard({ data, itemCard }) {
  return (
    <div className="row masonry-grid" id="masonry-grid">
      {data?.data?.map((item, id) => (
        <>
          <div className="col-sm-6 col-lg-4 masonry-grid-item categories-01" data-category="categories-01" key={id}>
            <div className="card card-news card-padding-sm bg-lighter">
              <div className="card-thumb ">
                <a href="#" onClick={() => itemCard(item)} data-bs-toggle="modal" data-bs-target="#studyModal">
                  <img
                    src={`http://${item?.works[0]}`}
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
                <span className="badge bg-primary-opacity in-category">{item?.tags}</span>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default BlockCard
