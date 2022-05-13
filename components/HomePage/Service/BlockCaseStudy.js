import { useQuery } from 'react-query'
import { get } from '../../../api/BaseRequest'
import BlockCaseStudies from './BlockCaseStudies'

function CaseStudy({ itemCard }) {
  const getCaseStudy = async() => {
    return await get(`user/en/works`)
  }
  const { data: dataCaseStudy } = useQuery('getBlog', getCaseStudy)

  return (
    <>
      <BlockCaseStudies dataCaseStudy={dataCaseStudy} itemCard={itemCard} />
    </>
  )
}

export default CaseStudy
