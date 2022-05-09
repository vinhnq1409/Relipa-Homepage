function BlockDialog() {
  return (
    <div className='modal fade' id='studyModal' tabIndex='-1' aria-labelledby='studyModalLabel' aria-hidden='true'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header align-items-start'>
            <div className='modal-header-label'>
              <h4 className='modal-title'>WIDILAND: NFT game</h4>
              <span className='badge bg-light-opacity'>NFT item sale</span>
            </div>
            <button type='button' className='btn-close btn-close-modal' data-bs-dismiss='modal' aria-label='Close'>
              <i className='las la-times'></i>
            </button>
          </div>
          <div className='modal-body'>
            <div className='row'>
              <div className='col-lg-6'>
                <div
                  className='swiper-stydies swiper-carousel swiper-carousel--arrow-length'
                  data-aos='zoom-in'
                  data-aos-delay='400'
                  data-carousel='swiper'
                  data
                  slide-item='1'
                >
                  <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                      <div className='swiper-slide'>
                        <img src='/user-page/img/case-studies/banner.png' alt='...' />
                      </div>
                      <div className='swiper-slide'>
                        <img src='/user-page/img/case-studies/banner.png' alt='...' />
                      </div>
                      <div className='swiper-slide'>
                        <img src='/user-page/img/case-studies/banner.png' alt='...' />
                      </div>
                      <div className='swiper-slide'>
                        <img src='/user-page/img/case-studies/banner.png' alt='...' />
                      </div>
                      <div className='swiper-slide'>
                        <img src='/user-page/img/case-studies/banner.png' alt='...' />
                      </div>
                    </div>

                    <div className='swiper-pagination'></div>
                  </div>
                  <div className='swiper-controls'>
                    <div className='swiper-button-prev'></div>
                    <div className='swiper-button-next'></div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='boxed'>
                  <h4 className='boxed-title'>Overview</h4>
                  <div className='boxed-text'>
                    With blockchain technology, in-game digital items, lands, characters, etc. have entertainment
                    elements and monetary value.With blockchain technology, in-game digital items, lands, characters,
                    etc. have entertainment elements and monetary value.
                  </div>
                </div>
                <div className='boxed'>
                  <h4 className='boxed-title'>Type of contract</h4>
                  <div className='boxed-text'>Lab Type</div>
                </div>
                <div className='boxed'>
                  <h4 className='boxed-title'>Technology</h4>
                  <div className='boxed-text'>Unity, Solidity</div>
                </div>
                <div className='boxed'>
                  <h4 className='boxed-title'>Responsible content</h4>
                  <div className='boxed-text'>
                    <div className='badges'>
                      <span className='badge bg-primary-opacity'>Requirement definition</span>
                      <span className='badge bg-primary-opacity'>basic design</span>
                      <span className='badge bg-primary-opacity'>design</span>
                      <span className='badge bg-primary-opacity'>test</span>
                      <span className='badge bg-primary-opacity'>release</span>
                      <span className='badge bg-primary-opacity'>Operation / maintenance</span>
                    </div>
                  </div>
                </div>
                <div className='boxed'>
                  <h4 className='boxed-title'>Team structure</h4>
                  <div className='boxed-text'>~ 20 million yen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockDialog
