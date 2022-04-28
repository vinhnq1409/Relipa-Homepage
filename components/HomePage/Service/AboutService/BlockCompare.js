import useTrans from '../../../../i18n/useTrans'

const BlockCompare = () => {
  const trans = useTrans()
  const language = trans.user.service.aboutService
  return (
    <section className='section section-compare pb-0 section-aos' data-aos='fade-up'>
      <div className='container'>
        <div className='section-content'>
          <div className='section-content-header line-bottom text-primary'>
            <h2 className='section-content-title'>Compare</h2>
          </div>
          <div className='compare-table table-responsive'>
            <table className='table mb-0'>
              <thead>
                <th>{language.item}</th>
                <th>RELIPA</th>
                <th>
                  {language.CertainA}
                  <small>{language.Majoroffshore}</small>
                </th>
                <th>
                  {language.CertainB}
                  <small>{language.Smalloffshore}</small>
                </th>
                <th>
                  {language.CertainC}
                  <small>{language.Domestic}</small>
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>{language.engineering}</strong>
                  </td>

                  <td>
                    <img src='/user-page/img/icons/status-1.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-1.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-4.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-2.svg' width='30' height='30' alt='...' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{language.development}</strong>
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-1.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-3.svg' width='32' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-4.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-3.svg' width='32' height='30' alt='...' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong> {language.Supports}</strong>
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-1.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-2.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-3.svg' width='32' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-3.svg' width='32' height='30' alt='...' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{language.Introducing}</strong>
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-1.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-1.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-4.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-3.svg' width='32' height='30' alt='...' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{language.Offering}</strong>
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-1.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-3.svg' width='32' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-2.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-3.svg' width='32' height='30' alt='...' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{language.Thoroughly}</strong>
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-1.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-2.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-3.svg' width='32' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-2.svg' width='30' height='30' alt='...' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{language.regularcustomer}</strong>
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-1.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-2.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-4.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-3.svg' width='32' height='30' alt='...' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{language.maintenance}</strong>
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-1.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-2.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-4.svg' width='30' height='30' alt='...' />
                  </td>
                  <td>
                    <img src='/user-page/img/icons/status-2.svg' width='30' height='30' alt='...' />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockCompare
