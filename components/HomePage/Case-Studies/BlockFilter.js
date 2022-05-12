const BlockFilter = ({ setFilter }) => {
  return (
    <div className="masonry-filter-buttons">
      <div className="filter-button">
        <a className="masonry-filter-item" data-filter="*" onClick={() => setFilter(0)}>
          All
        </a>
      </div>
      <div className="filter-button">
        <a className="masonry-filter-item" data-filter=".categories-01" onClick={() => setFilter(1)}>
          Web System
        </a>
      </div>
      <div className="filter-button">
        <a className="masonry-filter-item" data-filter=".categories-02" onClick={() => setFilter(2)}>
          Business System
        </a>
      </div>
      <div className="filter-button">
        <a className="masonry-filter-item" data-filter=".categories-03" onClick={() => setFilter(3)}>
          Blockchain
        </a>
      </div>
      <div className="filter-button">
        <a className="masonry-filter-item" data-filter=".categories-04" onClick={() => setFilter(4)}>
          Application
        </a>
      </div>
    </div>
  )
}

export default BlockFilter
