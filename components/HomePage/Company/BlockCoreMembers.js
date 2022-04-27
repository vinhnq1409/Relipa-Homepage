import useTrans from '../../../i18n/useTrans'

const BlockCoreMembers = () => {
    const trans = useTrans()
    const language = trans.user.company.CoreMember
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
                                <a href="#">
                                    <img className="card-img-top" src="user-page/img/company/img-2.png" width="210" height="350" alt="..." />
                                </a>
                            </div>
                            <div className="card-body text-center">
                                <h3 className="card-title">
                                    <a href="#">Tran Xuan Duc</a>
                                </h3>
                                <div className="card-meta">{language.PresidentCEO}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 member-col">
                        <div className="card card-norm border-0">
                            <div className="card-thumb">
                                <a href="#">
                                    <img className="card-img-top" src="user-page/img/company/img-3.png" width="210" height="350" alt="..." />
                                </a>
                            </div>
                            <div className="card-body text-center">
                                <h3 className="card-title">
                                    <a href="#">Phung Quang Huy</a>
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
                                <a href="#">
                                    <img className="card-img-top" src="user-page/img/company/img-4.png" width="210" height="350" alt="..." />
                                </a>
                            </div>
                            <div className="card-body text-center">
                                <h3 className="card-title">
                                    <a href="#">Nguyen Quang Tuyen</a>
                                </h3>
                                <div className="card-meta">{language.Representative}</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 member-col">
                        <div className="card card-norm border-0">
                            <div className="card-thumb">
                                <a href="#">
                                    <img className="card-img-top" src="user-page/img/company/img-5.png" width="210" height="350" alt="..." />
                                </a>
                            </div>
                            <div className="card-body text-center">
                                <h3 className="card-title">
                                    <a href="#">Nguyen Kim Giang</a>
                                </h3>
                                <div className="card-meta">{language.DevelopmentDepartment}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default BlockCoreMembers;