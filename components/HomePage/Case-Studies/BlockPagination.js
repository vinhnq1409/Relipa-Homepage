function BlockPagination() {
  return (
    <nav class='pagination-wrapper mt-3' aria-label='Page navigation example'>
      <ul class='pagination justify-content-center'>
        <li class='page-item'>
          <a class='page-link' href='#' aria-label='Previous'>
            <i class='las la-angle-left'></i>
          </a>
        </li>
        <li class='page-item active'>
          <a class='page-link' href='#'>
            1
          </a>
        </li>
        <li class='page-item'>
          <a class='page-link' href='#'>
            2
          </a>
        </li>
        <li class='page-item'>
          <a class='page-link' href='#'>
            3
          </a>
        </li>
        <li class='page-item'>
          <a class='page-link' href='#'>
            4
          </a>
        </li>
        <li class='page-item'>
          <a class='page-link' href='#'>
            5
          </a>
        </li>
        <li class='page-item'>
          <a class='page-link' href='#' aria-label='Next'>
            <i class='las la-angle-right'></i>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default BlockPagination
