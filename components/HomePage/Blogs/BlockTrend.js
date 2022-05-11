import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { addTag } from '../../../redux/slices/tagSlice'

const BlockTrend = ({ tagsTrend, params, setParams, isDetail = false }) => {
  const dispatch = useDispatch()
  const router = useRouter()

  const setParamsByTag = (idTrend) => {
    dispatch(addTag(idTrend))
    if (isDetail) {
      router.push('/blogs')
    } else {
      setParams({
        ...params,
        tag_id: idTrend
      })
    }
  }
  return (
    <div className='aside-right-box'>
      <div className='section-content-header line-bottom text-primary mb-3'>
        <h3 className='section-content-title'>Trend</h3>
      </div>
      <ul className='list-group-text-link list-group list-unstyled'>
        {tagsTrend.map((tagTrend) => (
          <li key={tagTrend.id} className='border-bottom py-3'>
            <a className='text-link-icon' onClick={() => setParamsByTag(tagTrend.id)} href='#'>
              <span className='text-link-icon-text'>{tagTrend.name}</span>
              <span className='text-link-icon-icon'>
                <svg width='25' height='6' viewBox='0 0 25 6' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M18.8551 1.07104L23 5.07105H1' stroke='#3B3B3B' strokeLinecap='round' />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlockTrend
