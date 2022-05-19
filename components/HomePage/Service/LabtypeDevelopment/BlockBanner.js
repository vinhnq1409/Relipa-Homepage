import useTrans from '../../../../i18n/useTrans'

const BlockFontBanner = () => {
  const trans = useTrans()
  const language = trans.labtypeDevelopment.labTypeDevelopment
  return (
    <>
      <div className="container">
        <section className="section section-aos section-banner section-sub-banner py-0" data-aos="fade-down">
          <div className="main-banner-item main-banner-item-sm">
            <div className="main-banner-item-bg">
              <picture>
                <source media="(min-width:768px)" srcSet="/user-page/img/lab/banner.png" />
                <img src="/user-page/img/lab/banner-sp.png" width="345" height="188" alt="Banner Labtype Development" />
              </picture>
            </div>
            <div className="container">
              <div className="section-heading section-heading-shadow">
                <h2 className="section-title" title={language.title}>
                  {language.title}
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlockFontBanner
