import useTrans from '../../../i18n/useTrans'
import BlockPopup from './BlockPopup'

const BlockCoreMembers = ({ infoCoreMember, setInfoCoreMember }) => {
  const trans = useTrans()
  const language = trans.company.company.CoreMember
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
                        name: 'Tran Xuan Duc',
                        title: 'Chủ tịch và Giám đốc điều hành',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                      alt="Tran Xuan Duc"
                    />
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    <a
                      onClick={() =>
                        setInfoCoreMember({
                          name: 'Tran Xuan Duc',
                          title: 'Chủ tịch và Giám đốc điều hành',
                          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                          img: 'Layer-1.png',
                        })
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#studyModal"
                      style={{ cursor: 'pointer' }}
                    >
                      Tran Xuan Duc
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
                        name: 'Phung Quang Huy',
                        title: 'Chủ tịch và Giám đốc điều hành',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                      alt="Phung Quang Huy"
                    />
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    <a
                      onClick={() =>
                        setInfoCoreMember({
                          name: 'Phung Quang Huy',
                          title: 'Chủ tịch và Giám đốc điều hành',
                          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                        name: 'Nguyễn Quang Tuyến',
                        title: 'Chủ tịch và Giám đốc điều hành',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                      alt="Nguyen Quang Tuyen"
                    />
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    <a
                      onClick={() =>
                        setInfoCoreMember({
                          name: 'Nguyen Quang Tuyen',
                          title: 'Chủ tịch và Giám đốc điều hành',
                          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                          img: 'Layer-3.png',
                        })
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#studyModal"
                      style={{ cursor: 'pointer' }}
                    >
                      Nguyen Quang Tuyen
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
                        name: 'Nguyen Kim Giang',
                        title: 'Chủ tịch và Giám đốc điều hành',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
                      alt="Nguyen Kim Giang"
                    />
                  </a>
                </div>
                <div className="card-body text-center">
                  <h3 className="card-title">
                    <a
                      onClick={() =>
                        setInfoCoreMember({
                          name: 'Nguyen Kim Giang',
                          title: 'Chủ tịch và Giám đốc điều hành',
                          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                          img: 'Layer-4.png',
                        })
                      }
                      data-bs-toggle="modal"
                      data-bs-target="#studyModal"
                      style={{ cursor: 'pointer' }}
                    >
                      Nguyen Kim Giang
                    </a>
                  </h3>
                  <div className="card-meta">{language.DevelopmentDepartment}</div>
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
