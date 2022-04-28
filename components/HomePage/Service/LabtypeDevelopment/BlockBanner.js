const BlockBanner = () => {
  return (
    <>
      <section className='section-aos section-breadcrumb' data-aos='fade-up'>
        <div className='container'>
          <nav aria-label='breadcrumb'>
            <ol className='breadcrumb'>
              <li className='breadcrumb-item'>
                <a href='#'>Home</a>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                Lab-type Development
              </li>
            </ol>
          </nav>
        </div>
      </section>
    </>
  )
}

export default BlockBanner