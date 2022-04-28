import useTrans from '../../../i18n/useTrans'

const BlockSideBar = () => {
  const trans = useTrans()
  const language = trans.company.company.SideBar
  return (
    <div className='col-lg-2 d-none d-lg-block'>
      <section className='section section-aos' data-aos='fade-up'>
        <div className='navigator-section'>
          <a className='active' href='#company'>
            {language.Company_Profile}
          </a>
          <a href='#message'>{language.CEO_Message}</a>
          <a href='#mission'>{language.MissionValues}</a>
          <a href='#core-member'>{language.Core_Members}</a>
        </div>
      </section>
    </div>
  )
}

export default BlockSideBar
