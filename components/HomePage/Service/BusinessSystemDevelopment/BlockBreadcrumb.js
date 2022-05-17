import Link from 'next/link'
import useTrans from '../../../../i18n/useTrans'

const BlockBreadcrumb = () => {
  const trans = useTrans()
  const language = trans.headerFooter.header
  return (
    <section className="section-aos section-breadcrumb" data-aos="fade-up">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link href="/">
                <a>{language.home}</a>
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {language.business_system}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default BlockBreadcrumb
