import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getDemo } from '../../redux/slices/demoSlice'

const DemoRedux = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDemo())
  }, [])
  return <div>DemoRedux</div>
}

export default DemoRedux
