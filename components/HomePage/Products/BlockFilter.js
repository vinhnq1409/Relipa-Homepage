import { useRouter } from 'next/router'
import useTrans from '../../../i18n/useTrans'

const BlockFilter = ({ params, setParams }) => {
  const trans = useTrans()
  const language = trans.caseStudies
  const router = useRouter()
  const onFilter = (value) => {
    switch(value){
      case 1:{
        router.push({
          pathname:"/products",
          query:{slug:"webSystem"}
        })

      }
      break
      case 2:{
        router.push({
          pathname:"/products",
          query:{slug:"businessSystem"}
        })
      }
      break
      case 3:{
        router.push({
          pathname:"/products",
          query:{slug:"blockchain"}
        })
      }
      break
      case 4:{
        router.push({
          pathname:"/products",
          query:{slug:"application"}
        })
      }
      break
      default :{
        router.push({
          pathname:"/products",
        })
      }
      break
    }
    // if (value === 0) {
    //   const filterAll = { ...params }
    //   delete filterAll.type
    //   return setParams(filterAll)
    // }
    // setParams({
    //   ...params,
    //   page: 1,
    //   type: value,
    // })
    
  }

  const valueFilter = [1,2,3,4]

  return (
    <div className="masonry-filter-buttons " id="btn-filter">
      <div className="filter-button">
        <div className={`cursor-pointer masonry-filter-item ${!valueFilter.includes(params.type)&&"active-filter"}`}  onClick={() => onFilter(0)}>
          {language.all}
        </div>
      </div>
      <div className="filter-button">
        <div className={`cursor-pointer masonry-filter-item ${params.type===1&&"active-filter"}`}  onClick={() => onFilter(1)}>
          {language.websystem}
        </div>
      </div>
      <div className="filter-button">
        <div className={`cursor-pointer masonry-filter-item ${params.type===2&&"active-filter"}`}  onClick={() => onFilter(2)}>
          {language.businessSystem}
        </div>
      </div>
      <div className="filter-button">
        <div className={`cursor-pointer masonry-filter-item ${params.type===3&&"active-filter"}`}  onClick={() => onFilter(3)}>
          {language.blockchain}
        </div>
      </div>
      <div className="filter-button">
        <div className={`cursor-pointer masonry-filter-item ${params.type===4&&"active-filter"}`}  onClick={() => onFilter(4)}>
          {language.application}
        </div>
      </div>
    </div>
  )
}

export default BlockFilter
