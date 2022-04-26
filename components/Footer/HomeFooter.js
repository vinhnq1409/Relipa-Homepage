/*eslint-disable*/
import React from 'react'
// @material-ui/core components

// core components
import styles from '../../styles/user/Footer.module.css'

export default function HomeFooter(props) {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <div className='widget text-center text-lg-start'>
              <h2>
                <a className='footer-logo mb-2' href='#'>
                  <img
                    className='fluid'
                    src={require('/public/user-page/img/logo.png')}
                    width='118'
                    height='54'
                    alt='Relipa supports your success'
                  />
                </a>
              </h2>
              <div className='socials'>
                <a className='social-circle' href='#' aria-label='facebook'>
                  <i className='lab la-facebook-f'></i>
                </a>
                <a className='social-circle' href='#' aria-label='instagram'>
                  <i className='lab la-instagram'></i>
                </a>
                <a className='social-circle' href='#' aria-label='youtube'>
                  <i className='lab la-youtube-square'></i>
                </a>
                <a className='social-circle' href='#' aria-label='twitter'>
                  <i className='lab la-twitter'></i>
                </a>
              </div>
            </div>
            <div className='widget'>
              <h3 className='widget-title'>日本</h3>
              <div className='widget-content'>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/location.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>
                    〒151-0063 東京都渋谷区富ヶ谷1-14-14スタンフォードアネックスビル3F
                  </span>
                </div>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/mobile.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>(+81)3 6804 9294</span>
                </div>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/sms.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>sales@relipasoft.com</span>
                </div>
              </div>
            </div>
            <div className='widget'>
              <h3 className='widget-title'>ベトナム</h3>
              <div className='widget-content'>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/location.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>
                    22nd Floor, B Tower, HH4 Building, Pham Hung Street, Nam Tu Liem District, Ha Noi, Vietnam
                  </span>
                </div>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/mobile.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>(+84)24 3200 4725</span>
                </div>
                <div className='text-icon'>
                  <span className='text-icon__icon'>
                    <img src={require('/public/user-page/img/icons/sms.svg')} width='24' height='24' alt='' />
                  </span>
                  <span className='text-icon__content'>sales@relipasoft.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5 offset-lg-1'>
            <div className='row'>
              <div className='col-6'>
                <div className='widget'>
                  <h3 className='widget-title'> 企業情報 </h3>
                  <div className='widget-content'>
                    <ul className='list-unstyled sidebar-list'>
                      <li className=''>
                        <a href='#'>会社概要</a>
                      </li>
                      <li className=''>
                        <a href='#'>代表メッセージ</a>
                      </li>
                      <li className=''>
                        <a href='#'>コアメンバー紹介</a>
                      </li>
                      <li className=''>
                        <a href='#'>ミッションとコア・バリュー</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='widget'>
                  <h3 className='widget-title'> 企業情報 </h3>
                  <div className='widget-content'>
                    <ul className='list-unstyled sidebar-list'>
                      <li className=''>
                        <a href='#'>サービスについて</a>
                      </li>
                      <li className=''>
                        <a href='#'>ラボ型開発</a>
                      </li>
                      <li className=''>
                        <a href='#'>コアメンバー紹介</a>
                      </li>
                      <li className=''>
                        <a href='#'>ミッションとコア・バリュー</a>
                      </li>
                      <li className=''>
                        <a href='#'>ミッションとコア・バリュー</a>
                      </li>
                      <li className=''>
                        <a href='#'>ミッションとコア・バリュー</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='widget'>
                  <h3 className='widget-title'> 企業情報 </h3>
                  <div className='widget-content'>
                    <ul className='list-unstyled sidebar-list'>
                      <li className=''>
                        <a href='#'>会社概要</a>
                      </li>
                      <li className=''>
                        <a href='#'>代表メッセージ</a>
                      </li>
                      <li className=''>
                        <a href='#'>コアメンバー紹介</a>
                      </li>
                      <li className=''>
                        <a href='#'>ミッションとコア・バリュー</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-6'>
                <div className='widget'>
                  <h3 className='widget-title'> 企業情報 </h3>
                  <div className='widget-content'>
                    <ul className='list-unstyled sidebar-list'>
                      <li className=''>
                        <a href='#'>会社概要</a>
                      </li>
                      <li className=''>
                        <a href='#'>代表メッセージ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='widget'>
                  <h3 className='widget-title'> 企業情報 </h3>
                  <div className='widget-content'>
                    <ul className='list-unstyled sidebar-list'>
                      <li>
                        <a href='#'>サービスについて </a>
                      </li>
                      <li>
                        <a href='#'>ラボ型開発</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <div>Copyright © 2021 RELIPA CO., LTD. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}
