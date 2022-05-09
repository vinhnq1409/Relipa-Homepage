function BlockPagination() {
  return (
    <nav className='pagination-wrapper mt-3' aria-label='Page navigation example'>
      <ul className='pagination justify-content-center'>
        <li className='page-item'>
          <a className='page-link' href='#' aria-label='Previous'>
            <i className='las la-angle-left'></i>
          </a>
        </li>
        <li className='page-item active'>
          <a className='page-link' href='#'>
            1
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            2
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            3
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            4
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            5
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#' aria-label='Next'>
            <i className='las la-angle-right'></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default BlockPagination
