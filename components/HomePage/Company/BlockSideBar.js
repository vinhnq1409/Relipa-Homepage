import useTrans from '../../../i18n/useTrans'

const BlockSideBar = () => {
  const trans = useTrans()
  const language = trans.company.company.SideBar
  return (
    <div className="col-lg-2 d-none d-lg-block side-bar-wrap">
      <section className="section section-aos side-bar" data-aos="fade-up">
        <div className="navigator-section">
          <a className="active" href="#company">
            {language.Company_Profile}
          </a>
          <a className="active" href="#message">
            {language.CEO_Message}
          </a>
          <a className="active" href="#mission">
            {language.MissionValues}
          </a>
          <a className="active" href="#core-member">
            {language.Core_Members}
          </a>
        </div>
      </section>
    </div>
  )
}

export default BlockSideBar
