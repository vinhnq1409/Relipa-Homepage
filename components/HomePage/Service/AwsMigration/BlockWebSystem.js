import { onPreventDefault } from '../../../PreventDefault/onPreventDefault'

function BlockWebSystem() {
  return (
    <section className="section section-aos" data-aos="fade-up">
      <div className="container">
        <div className="section-content">
          <div className="section-content-header line-bottom text-primary">
            <h2 className="section-content-title">Provided Service</h2>
          </div>
          <div className="overview">
            <div className="overview-inner">
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img src="/user-page/img/icons/simcard.svg" width="40" height="40" alt="Web & App Development" />
                    </div>
                    <h3 className="card-title">
                      <a href="#" onClick={onPreventDefault}>
                        Web & App Development
                      </a>
                    </h3>
                    <div className="card-text">
                      Relipa is confident in the field of Web & App Development and is proud to be entrusted by many
                      customers. In this field, we specialize in providing services such as EC sites, CMS systems, job
                      information sites, and reservation matching platforms, with a focus on Java / PHP development. We
                      always strive to create the most complete products based on your needs.
                    </div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-1.png"
                      width="411"
                      height="406"
                      alt="Font-0 Web & App Development"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/aws/img-2.png"
                        width="334"
                        height="236"
                        alt="Font-1 Web & App Development"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img src="/user-page/img/icons/simcard.svg" width="40" height="40" alt="..." />
                    </div>
                    <h3 className="card-title">
                      <a href="#" onClick={onPreventDefault}>
                        Web & App Development
                      </a>
                    </h3>
                    <div className="card-text">
                      Relipa is confident in the field of Web & App Development and is proud to be entrusted by many
                      customers. In this field, we specialize in providing services such as EC sites, CMS systems, job
                      information sites, and reservation matching platforms, with a focus on Java / PHP development. We
                      always strive to create the most complete products based on your needs.
                    </div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-2.png"
                      width="420"
                      height="290"
                      alt="..."
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/aws/img-3.png"
                        width="334"
                        height="236"
                        alt="..."
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
