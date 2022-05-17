import Link from 'next/link'
import useTrans from '../../../../i18n/useTrans'

const BlockBanner = () => {
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
              {language.about_service}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  )
}

export default BlockBanner
