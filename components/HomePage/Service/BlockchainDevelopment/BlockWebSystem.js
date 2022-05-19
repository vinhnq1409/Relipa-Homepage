import useTrans from '../../../../i18n/useTrans'
import { onPreventDefault } from '../../../PreventDefault/onPreventDefault'

function BlockWebSystem() {
  const trans = useTrans()
  const language = trans.blockchain
  return (
    <section className="section section-aos" data-aos="fade-up">
      <div className="container">
        <div className="section-content">
          <div className="section-content-header line-bottom text-primary">
            <h2 className="section-content-title">Blockchain Development Service</h2>
          </div>
          <div className="overview">
            <div className="overview-inner">
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img
                        src="/user-page/img/icons/ruler-pen.svg"
                        width="40"
                        height="40"
                        alt="Providing ICO services"
                      />
                    </div>
                    <h3 className="card-title">
                      <a href="#" onClick={onPreventDefault}>
                        {language.provider.title}
                      </a>
                    </h3>
                    <div className="card-text">
                      <ul>
                        <li>{language.provider.content.One}</li>
                        <li>{language.provider.content.Two}</li>
                        <li>{language.provider.content.Three}</li>
                        <li>{language.provider.content.Fource}</li>
                      </ul>
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
                      alt="Font-0 Providing ICO services"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/blockchain/img-2.png"
                        width="334"
                        height="236"
                        alt="Font-1 Providing ICO services"
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
                        src="/user-page/img/icons/keyboard-open.svg"
                        width="40"
                        height="40"
                        alt="Converting existing games to NFT"
                      />
                    </div>
                    <h3 className="card-title">
                      <a href="#" onClick={onPreventDefault}>
                        {language.converterNFT.title}
                      </a>
                    </h3>
                    <div className="card-text">
                      <ul>
                        <li> {language.converterNFT.content.one}</li>
                        <li> {language.converterNFT.content.two}</li>
                        <li> {language.converterNFT.content.three}</li>
                        <li> {language.converterNFT.content.fource}</li>
                        <li> {language.converterNFT.content.five}</li>
                      </ul>
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
                      alt="Font-0 Converting existing games to NFT"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/blockchain/img-3.png"
                        width="334"
                        height="236"
                        alt="Font-1 Converting existing games to NFT"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img src="/user-page/img/icons/empty-wallet.svg" width="40" height="40" alt="Wallet service" />
                    </div>
                    <h3 className="card-title">
                      <a href="#" onClick={onPreventDefault}>
                        {language.Walletservice.title}
                      </a>
                    </h3>
                    <div className="card-text">
                      <ul>
                        <li> {language.Walletservice.content.one}</li>
                        <li> {language.Walletservice.content.two}</li>
                        <li> {language.Walletservice.content.three}</li>
                        <li> {language.Walletservice.content.fource}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-3.png"
                      width="418"
                      height="322"
                      alt="Font-0 Wallet service"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/blockchain/img-4.png"
                        width="334"
                        height="236"
                        alt="Font-1 Wallet service"
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
                        src="/user-page/img/icons/simcard.svg"
                        width="40"
                        height="40"
                        alt="Official chain development"
                      />
                    </div>
                    <h3 className="card-title">
                      <a href="#" onClick={onPreventDefault}>
                        {language.Officialchain.title}
                      </a>
                    </h3>
                    <div className="card-text">
                      <ul>
                        <li> {language.Officialchain.content.one}</li>
                        <li> {language.Officialchain.content.two}</li>
                        <li> {language.Officialchain.content.three}</li>
                        <li> {language.Officialchain.content.fource}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-4.png"
                      width="414"
                      height="317"
                      alt="Font-0 Official chain development"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/blockchain/img-5.png"
                        width="334"
                        height="236"
                        alt="Font-1 Official chain development"
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
                        src="/user-page/img/icons/messages.svg"
                        width="40"
                        height="40"
                        alt="NFT items Sales support"
                      />
                    </div>
                    <h3 className="card-title">
                      <a href="#" onClick={onPreventDefault}>
                        {language.NFTitems.title}
                      </a>
                    </h3>
                    <div className="card-text">
                      <ul>
                        <li>
                          {language.NFTitems.content.one} / {language.NFTitems.content.two}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-5.png"
                      width="414"
                      height="317"
                      alt="Font-0 NFT items Sales support"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/blockchain/img-6.png"
                        width="334"
                        height="236"
                        alt="Font-1 NFT items Sales support"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-media border-0">
                <div className="card-body p-0 mb-md-0">
                  <div className="card-content">
                    <div className="card-icon mb-2">
                      <img src="/user-page/img/icons/discover.svg" width="40" height="40" alt="Other services" />
                    </div>
                    <h3 className="card-title">
                      <a href="#" onClick={onPreventDefault}>
                        {language.OtherServices.title}
                      </a>
                    </h3>
                    <div className="card-text">
                      <ul>
                        <li>{language.OtherServices.content.one}</li>
                        <li>{language.OtherServices.content.two}</li>
                        <li>{language.OtherServices.content.three}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-thumb">
                  <div className="card-frame">
                    <img
                      className="img-fluid"
                      src="/user-page/img/common/frame-6.png"
                      width="414"
                      height="317"
                      alt="Font-0 Other services"
                    />
                    <div className="card-img">
                      <img
                        className="img-fluid"
                        src="/user-page/img/blockchain/img-7.png"
                        width="334"
                        height="236"
                        alt="Font-1 Other services"
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
