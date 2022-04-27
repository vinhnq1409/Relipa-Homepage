import useTrans from '../../../i18n/useTrans'

const BlockBreadcrumb = () => {
  const trans = useTrans()
  const language = trans.user.company.Breadcrumb
  return (
    <section className='section-aos section-breadcrumb' data-aos='fade-up'>
      <div className='container'>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='#'>{language.Home}</a>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              {language.Company}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default BlockBreadcrumb
