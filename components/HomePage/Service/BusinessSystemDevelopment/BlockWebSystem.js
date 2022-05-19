import useTrans from '../../../../i18n/useTrans'

function BlockWebSystem() {
  const trans = useTrans()
  const language = trans.businessSystem
  return (
    <section className="section section-aos" data-aos="fade-up">
      <div className="container">
        <div className="section-content">
          <div className="section-content-header line-bottom text-primary">
            <h2 className="section-content-title">Business System Development Service</h2>
          </div>
          <div className="overview">
            <div className="overview-inner">
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img
                        src="/user-page/img/icons/house.svg"
                        width="40"
                        height="40"
                        alt="Warehouse Management System"
                      />
                    </div>
                    <h3 className="card-title">
                      <a href="#">{language.warehouse.title}</a>
                    </h3>
                    <div className="card-text">{language.warehouse.content}</div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-1.png"
                      width="411"
                      height="406"
                      alt="Font-0 Warehouse Management System"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/business/img-2.png"
                        width="334"
                        height="236"
                        alt="Font-1 Warehouse Management System"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img src="/user-page/img/icons/box.svg" width="40" height="40" alt="Sales Management System" />
                    </div>
                    <h3 className="card-title">
                      <a href="#">{language.sale.title}</a>
                    </h3>
                    <div className="card-text">{language.sale.content}</div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-2.png"
                      width="420"
                      height="290"
                      alt="Font-0 Sales Management System"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/business/img-3.png"
                        width="334"
                        height="236"
                        alt="Font-1 Sales Management System"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img
                        src="/user-page/img/icons/calendar.svg"
                        width="40"
                        height="40"
                        alt="Reservation Management System"
                      />
                    </div>
                    <h3 className="card-title">
                      <a href="#">{language.reservation.title}</a>
                    </h3>
                    <div className="card-text">{language.reservation.content}</div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-3.png"
                      width="418"
                      height="322"
                      alt="Font-0 Reservation Management System"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/business/img-4.png"
                        width="334"
                        height="236"
                        alt="Font-1 Reservation Management System"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img
                        src="/user-page/img/icons/group.svg"
                        width="40"
                        height="40"
                        alt="Vehicle Allocation Management System"
                      />
                    </div>
                    <h3 className="card-title">
                      <a href="#">{language.vehicle.title}</a>
                    </h3>
                    <div className="card-text">{language.vehicle.content}</div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-4.png"
                      width="414"
                      height="317"
                      alt="Font-0 Vehicle Allocation Management System"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/business/img-5.png"
                        width="334"
                        height="236"
                        alt="Font-1 Vehicle Allocation Management System"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockWebSystem
