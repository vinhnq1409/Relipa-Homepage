import useTrans from '../../../i18n/useTrans'

const BlockFilter = () => {
  const trans = useTrans()
  const language = trans.company.company.Breadcrumb
  return (
    <div class='masonry-filter-buttons'>
      <div class='filter-button'>
        <a class='masonry-filter-item' href='/' data-filter='*'>
          All
        </a>
      </div>
      <div class='filter-button'>
        <a class='masonry-filter-item' href='.categories-01' data-filter='.categories-01'>
          Web System
        </a>
      </div>
      <div class='filter-button'>
        <a class='masonry-filter-item' href='.categories-02' data-filter='.categories-02'>
          Business System
        </a>
      </div>
      <div class='filter-button'>
        <a class='masonry-filter-item' href='.categories-03' data-filter='.categories-03'>
          Blockchain
        </a>
      </div>
      <div class='filter-button'>
        <a class='masonry-filter-item' href='.categories-04' data-filter='.categories-04'>
          Application
        </a>
      </div>
    </div>
  )
}

export default BlockFilter
