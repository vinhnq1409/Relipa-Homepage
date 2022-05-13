import React from 'react'
import Link from 'next/link'

const BlockContent = () => {
  return (
    <section className="section section-aos" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="">
            <div>
              <strong>Handling of personal information</strong>
              <p>
                Relipa Co., Ltd. is deeply aware that the personal information of customers is important information
                that constitutes privacy in conducting business, and when handling personal information in business, it
                is subject to laws and regulations regarding personal information and protection of personal
                information. We will respect our customers and meet the expectations and trust of our company by
                establishing the internal rules that we have set for this purpose, establishing an organizational
                structure, and striving to appropriately protect personal information.
              </p>
              <br />
              <strong>Acquisition, use and provision of personal information</strong>
              <p>
                We will specify the purpose of use of personal information within the scope of our business activities,
                and will acquire, use and provide personal information fairly and appropriately to the extent necessary
                to achieve that purpose. In addition, we will take measures to prevent the acquired personal information
                from being used for purposes other than the intended purpose.
              </p>
              <br />
              <strong>Compliance with laws and norms</strong>
              <p>
                We will comply with laws and regulations regarding personal information, guidelines set by the
                government, other norms and social order, and strive to appropriately protect personal information.
              </p>
              <br />
              <strong>Appropriate management of personal information</strong>
              <p>
                We are fully aware of the risks of unauthorized access, loss, destruction, falsification, leakage, etc.
                of the personal information we handle, implement reasonable safety measures, and appropriately correct
                any problems that occur. Take measures.
              </p>
              <br />
              <strong>Responding to inquiries</strong>
              <p>
                We will respond appropriately to any inquiries regarding the personal information we handle, such as
                disclosure, correction, suspension of use, and complaint consultation.
              </p>
              <br />
              <strong>Continuous improvement</strong>
              <p>
                We have established a management rule and management system regarding the protection of personal
                information, and all employees will thoroughly operate it and regularly review it to make continuous
                improvements.
                <br />* Inquiries regarding personal information: Email: sales@relipasoft.com
              </p>
              <br />
              <div className="pagination-buttons">
                <Link href="contact">
                  <a className="pagination-button pagination-button-prev" href="#">
                    <span className="pagination-button-icon"></span>
                    <span className="pagination-button-text length" style={{ height: 'auto' }}>
                      Click here to contact Relipa
                    </span>
                    <span className="pagination-button-text short">Contact</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockContent
