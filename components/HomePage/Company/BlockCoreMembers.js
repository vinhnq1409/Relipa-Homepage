import useTrans from '../../../i18n/useTrans'

const BlockCoreMembers = ({ infoCoreMember, setInfoCoreMember }) => {
  const trans = useTrans()
  const language = trans.company.company.CoreMember
  const languagePopup = trans.company.company.CoreMemberPopup

  return (
    <section className="section section-aos" id="core-member" data-aos="fade-up">
      <div className="section-content-header line-bottom text-primary">
        <h2 className="section-content-title">{language.Core_Members}</h2>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-md-6 member-col">
              <div className="card card-norm border-0">
                <div className="card-thumb">
                  <a
                    onClick={() =>
                      setInfoCoreMember({
                        name: languagePopup.ceo.name,
                        title: languagePopup.ceo.title,
                        desc: languagePopup.ceo.desc,
                        img: 'Layer-1.png',
                      })
                    }
                    data-bs-toggle="modal"
                    data-bs-target="#studyModal"
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className="card-img-top"
                      src="/user-page/img/company/img-2.png"
                      width="210"
                      height="350"
                      alt={languagePopup.ceo.name}
                    />
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    <a
                      onClick={() =>
                        setInfoCoreMember({
                          name: languagePopup.ceo.name,
                          title: languagePopup.ceo.title,
                          desc: languagePopup.ceo.desc,
                          img: 'Layer-1.png',
                        })
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#studyModal"
                      style={{ cursor: 'pointer' }}
                    >
                      {languagePopup.ceo.name}
                    </a>
                  </h3>
                  <div className="card-meta">{language.PresidentCEO}</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 member-col">
              <div className="card card-norm border-0">
                <div className="card-thumb">
                  <a
                    onClick={() =>
                      setInfoCoreMember({
                        name: languagePopup.div1.name,
                        title: languagePopup.div1.title,
                        desc: languagePopup.div1.desc,
                        img: 'Layer-2.png',
                      })
                    }
                    data-bs-toggle="modal"
                    data-bs-target="#studyModal"
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className="card-img-top"
                      src="/user-page/img/company/img-3.png"
                      width="210"
                      height="350"
                      alt={languagePopup.div1.name}
                    />
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    <a
                      onClick={() =>
                        setInfoCoreMember({
                          name: languagePopup.div1.name,
                          title: languagePopup.div1.title,
                          desc: languagePopup.div1.desc,
                          img: 'Layer-2.png',
                        })
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#studyModal"
                      style={{ cursor: 'pointer' }}
                    >
                      Phung Quang Huy
                    </a>
                  </h3>
                  <div className="card-meta">{language.DevelopmentManager}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6 pt-5 pt-md-0">
          <div className="row">
            <div className="col-md-6 member-col">
              <div className="card card-norm border-0">
                <div className="card-thumb">
                  <a
                    onClick={() =>
                      setInfoCoreMember({
                        name: languagePopup.vicePresident.name,
                        title: languagePopup.vicePresident.title,
                        desc: languagePopup.vicePresident.desc,
                        img: 'Layer-3.png',
                      })
                    }
                    data-bs-toggle="modal"
                    data-bs-target="#studyModal"
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className="card-img-top"
                      src="/user-page/img/company/img-4.png"
                      width="210"
                      height="350"
                      alt={languagePopup.vicePresident.name}
                    />
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    <a
                      onClick={() =>
                        setInfoCoreMember({
                          name: languagePopup.vicePresident.name,
                          title: languagePopup.vicePresident.title,
                          desc: languagePopup.vicePresident.desc,
                          img: 'Layer-3.png',
                        })
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#studyModal"
                      style={{ cursor: 'pointer' }}
                    >
                      {languagePopup.vicePresident.name}
                    </a>
                  </h3>
                  <div className="card-meta">{language.Representative}</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 member-col">
              <div className="card card-norm border-0">
                <div className="card-thumb">
                  <a
                    onClick={() =>
                      setInfoCoreMember({
                        name: languagePopup.div2.name,
                        title: languagePopup.div2.title,
                        desc: languagePopup.div2.desc,
                        img: 'Layer-4.png',
                      })
                    }
                    data-bs-toggle="modal"
                    data-bs-target="#studyModal"
                    style={{ cursor: 'pointer' }}
                  >
                    <img
                      className="card-img-top"
                      src="/user-page/img/company/img-5.png"
                      width="210"
                      height="350"
                      alt={languagePopup.div2.name}
                    />
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    <a
                      onClick={() =>
                        setInfoCoreMember({
                          name: languagePopup.div2.name,
                          title: languagePopup.div2.title,
                          desc: languagePopup.div2.desc,
                          img: 'Layer-4.png',
                        })
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#studyModal"
                      style={{ cursor: 'pointer' }}
                    >
                      {languagePopup.div2.name}
                    </a>
                  </h3>
                  <div className="card-meta">{language.DevelopmentDepartment}</div>
                  <div className="card-meta">{language.DevelopmentDepartmentTitle}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockCoreMembers
