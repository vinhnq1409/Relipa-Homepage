import { useRouter } from 'next/router'
import useTrans from '../../../i18n/useTrans'

const BlockFilter = ({ params, setParams }) => {
  const trans = useTrans()
  const language = trans.caseStudies
  const router = useRouter()
  const onFilter = (value) => {
    switch (value) {
      case 1:
        router.push('/products?slug=webSystem', undefined, { shallow: true })
        break
      // case 2:
      //   router.push('/products?slug=businessSystem', undefined, { shallow: true })
      //   break
      case 3:
        router.push('/products?slug=blockchain', undefined, { shallow: true })
        break
      case 4:
        router.push('/products?slug=application', undefined, { shallow: true })
        break
      default:
        router.push('/products', undefined, { shallow: true })
        break
    }
  }

  const valueFilter = [1, 2, 3, 4]

  return (
    <div className="masonry-filter-buttons " id="btn-filter">
      <div className="filter-button">
        <div
          className={`cursor-pointer masonry-filter-item ${!valueFilter.includes(params.type) && 'active-filter'}`}
          onClick={() => onFilter(0)}
        >
          {language.all}
        </div>
      </div>
      <div className="filter-button">
        <div
          className={`cursor-pointer masonry-filter-item ${params.type === 1 && 'active-filter'}`}
          onClick={() => onFilter(1)}
        >
          {language.websystem}
        </div>
      </div>
      {/* <div className="filter-button" >
        <div
          className={`cursor-pointer masonry-filter-item ${params.type === 2 && 'active-filter'}`}
          onClick={() => onFilter(2)}
        >
          {language.businessSystem}
        </div>
      </div> */}
      <div className="filter-button">
        <div
          className={`cursor-pointer masonry-filter-item ${params.type === 4 && 'active-filter'}`}
          onClick={() => onFilter(4)}
        >
          {language.blockchain}
        </div>
      </div>
      <div className="filter-button">
        <div
          className={`cursor-pointer masonry-filter-item ${params.type === 3 && 'active-filter'}`}
          onClick={() => onFilter(3)}
        >
          {language.application}
        </div>
      </div>
    </div>
  )
}

export default BlockFilter
