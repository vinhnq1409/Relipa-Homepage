const BlockFilter = ({ params, setParams }) => {
  const onFilter = (value) => {
    if (value === 0) {
      const filterAll = { ...params }
      delete filterAll.type
      return setParams(filterAll)
    }
    setParams({
      ...params,
      page: 1,
      type: value,
    })
  }
  return (
    <div className="masonry-filter-buttons " id="btn-filter">
      <div className="filter-button">
        <a className="masonry-filter-item active-filter" href="#" data-filter="All" onClick={() => onFilter(0)}>
          All
        </a>
      </div>
      <div className="filter-button">
        <a className="masonry-filter-item" href="#" data-filter="websystem" onClick={() => onFilter(1)}>
          Web System
        </a>
      </div>
      <div className="filter-button">
        <a className="masonry-filter-item" href="#" data-filter="bussinessSystem" onClick={() => onFilter(2)}>
          Business System
        </a>
      </div>
      <div className="filter-button">
        <a className="masonry-filter-item" href="#" data-filter="blockchain" onClick={() => onFilter(3)}>
          Blockchain
        </a>
      </div>
      <div className="filter-button">
        <a className="masonry-filter-item" href="#" data-filter="application" onClick={() => onFilter(4)}>
          Application
        </a>
      </div>
    </div>
  )
}

export default BlockFilter
