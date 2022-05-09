import useTrans from '../../../i18n/useTrans'

const BlockFilter = () => {
  const trans = useTrans()
  const language = trans.company.company.Breadcrumb
  return (
    <div className='masonry-filter-buttons'>
      <div className='filter-button'>
        <a className='masonry-filter-item' href='/' data-filter='*'>
          All
        </a>
      </div>
      <div className='filter-button'>
        <a className='masonry-filter-item' href='.categories-01' data-filter='.categories-01'>
          Web System
        </a>
      </div>
      <div className='filter-button'>
        <a className='masonry-filter-item' href='.categories-02' data-filter='.categories-02'>
          Business System
        </a>
      </div>
      <div className='filter-button'>
        <a className='masonry-filter-item' href='.categories-03' data-filter='.categories-03'>
          Blockchain
        </a>
      </div>
      <div className='filter-button'>
        <a className='masonry-filter-item' href='.categories-04' data-filter='.categories-04'>
          Application
        </a>
      </div>
    </div>
  )
}

export default BlockFilter
