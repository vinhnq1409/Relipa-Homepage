function BlockDialog() {
  return (
    <div class='modal fade' id='studyModal' tabindex='-1' aria-labelledby='studyModalLabel' aria-hidden='true'>
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header align-items-start'>
            <div class='modal-header-label'>
              <h4 class='modal-title'>WIDILAND: NFT game</h4>
              <span class='badge bg-light-opacity'>NFT item sale</span>
            </div>
            <button type='button' class='btn-close btn-close-modal' data-bs-dismiss='modal' aria-label='Close'>
              <i class='las la-times'></i>
            </button>
          </div>
          <div class='modal-body'>
            <div class='row'>
              <div class='col-lg-6'>
                <div
                  class='swiper-stydies swiper-carousel swiper-carousel--arrow-length'
                  data-aos='zoom-in'
                  data-aos-delay='400'
                  data-carousel='swiper'
                  data
                  slide-item='1'
                >
                  <div class='swiper-container'>
                    <div class='swiper-wrapper'>
                      <div class='swiper-slide'>
                        <img src='/user-page/img/case-studies/banner.png' alt='...' />
                      </div>
                      <div class='swiper-slide'>
                        <img src='/user-page/img/case-studies/banner.png' alt='...' />
                      </div>
                      <div class='swiper-slide'>
                        <img src='/user-page/img/case-studies/banner.png' alt='...' />
                      </div>
                      <div class='swiper-slide'>
                        <img src='/user-page/img/case-studies/banner.png' alt='...' />
                      </div>
                      <div class='swiper-slide'>
                        <img src='/user-page/img/case-studies/banner.png' alt='...' />
                      </div>
                    </div>

                    <div class='swiper-pagination'></div>
                  </div>
                  <div class='swiper-controls'>
                    <div class='swiper-button-prev'></div>
                    <div class='swiper-button-next'></div>
                  </div>
                </div>
              </div>
              <div class='col-lg-6'>
                <div class='boxed'>
                  <h4 class='boxed-title'>Overview</h4>
                  <div class='boxed-text'>
                    With blockchain technology, in-game digital items, lands, characters, etc. have entertainment
                    elements and monetary value.With blockchain technology, in-game digital items, lands, characters,
                    etc. have entertainment elements and monetary value.
                  </div>
                </div>
                <div class='boxed'>
                  <h4 class='boxed-title'>Type of contract</h4>
                  <div class='boxed-text'>Lab Type</div>
                </div>
                <div class='boxed'>
                  <h4 class='boxed-title'>Technology</h4>
                  <div class='boxed-text'>Unity, Solidity</div>
                </div>
                <div class='boxed'>
                  <h4 class='boxed-title'>Responsible content</h4>
                  <div class='boxed-text'>
                    <div class='badges'>
                      <span class='badge bg-primary-opacity'>Requirement definition</span>
                      <span class='badge bg-primary-opacity'>basic design</span>
                      <span class='badge bg-primary-opacity'>design</span>
                      <span class='badge bg-primary-opacity'>test</span>
                      <span class='badge bg-primary-opacity'>release</span>
                      <span class='badge bg-primary-opacity'>Operation / maintenance</span>
                    </div>
                  </div>
                </div>
                <div class='boxed'>
                  <h4 class='boxed-title'>Team structure</h4>
                  <div class='boxed-text'>~ 20 million yen</div>
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
