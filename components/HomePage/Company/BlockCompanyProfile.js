import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import useTrans from '../../../i18n/useTrans'

const BlockCompanyProfile = () => {

  const trans = useTrans()
  const language = trans.company.company.profile
  return (
    <section className="section section-aos" id="company" data-aos="fade-up">
      <div className="section-content-header line-bottom text-primary">
        <h2 className="section-content-title">{language.Company_Profile}</h2>
      </div>
      {/* <div className="navigator-section d-lg-none ">
        <a className="active menu-company-siderbar  " href="#company" >
         Company Profile
        </a>
        <a className="active menu-company-siderbar " href="#message" >
          CEO Message
        </a>
        <a className="active menu-company-siderbar " href="#mission" >
          Mission & Values
        </a>
        <a className="active menu-company-siderbar " href="#core-member" >
          Core Members
        </a>
      </div> */}
      <div className="row">
        <div className="col-md-6">
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-12">
                <h3 className="mb-0">{language.Japanese_corporation}</h3>
              </div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.Company}</strong>
              </div>
              <div className="col-8">{language.Company_Relipa}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.Established}</strong>
              </div>
              <div className="col-8">{language.jp2018}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.CEO}</strong>
              </div>
              <div className="col-8">{language.Chang_Suan_Duc}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.AddressJP}</strong>
              </div>
              <div className="col-8">{language.Address_Tokyo}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="map-block">
                  <div className="img-fluid" style={{ width: 463, height: 367 }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6482.816291410384!2d139.691454!3d35.666951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbfbe989a567f68c4!2zKOagqinjgrnjgr_jg7Pjg5Xjgqnjg7zjg4k!5e0!3m2!1sja!2sjp!4v1651029385426!5m2!1sja!2sjp"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.Business_content}</strong>
              </div>
              <div className="col-8">{language.Business_description}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.Email}</strong>
              </div>
              <div className="col-8">{language.Email_Relipasoft}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.Phone_number}</strong>
              </div>
              <div className="col-8">{language.Phone_number_81}</div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-12">
                <h3 className="mb-0">{language.Vietnam_Headquarters}</h3>
              </div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.Company}</strong>
              </div>
              <div className="col-8">{language.Company_RELIPA}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.Established}</strong>
              </div>
              <div className="col-8">{language.vn2016}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.CEO}</strong>
              </div>
              <div className="col-8">{language.Chang_Suan_Duc}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.AddressVN}</strong>
              </div>
              <div className="col-8">{language.Address_HaNoi}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="map-block">
                  <div className="img-fluid" style={{ width: 463, height: 367 }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7448.68577240962!2d105.782507!3d21.018962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe05c647fe184c739!2sRELIPA%20CO.%2C%20LTD!5e0!3m2!1sja!2sus!4v1651029601655!5m2!1sja!2sus"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.Business_content}</strong>
              </div>
              <div className="col-8">{language.Business_description}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.Email}</strong>
              </div>
              <div className="col-8">{language.Email_Relipasoft}</div>
            </div>
          </div>
          <div className="row-item">
            <div className="row align-items-center">
              <div className="col-4">
                <strong>{language.Phone_number}</strong>
              </div>
              <div className="col-8">{language.Phone_number_84}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockCompanyProfile
