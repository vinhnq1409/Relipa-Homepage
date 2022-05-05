const BlockBanner = () => {
  return (
    <div class='container'>
      <section class='section section-aos section-banner section-sub-banner py-0' data-aos='fade-down'>
        <div class='main-banner-item main-banner-item-sm'>
          <div class='main-banner-item-bg'>
            <picture>
              <source media='(min-width:768px)' srcset='/user-page/img/business/banner.png' />
              <img src='/user-page/img/business/banner-sp.png' width='345' height='188' alt='' />
            </picture>
          </div>
          <div class='container'>
            <div class='section-heading section-heading-shadow'>
              <h2 class='section-title' title='Business System Development'>
                Business System Development
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlockBanner
