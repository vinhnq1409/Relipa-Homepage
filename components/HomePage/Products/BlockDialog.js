import styles from '../../../styles/user/CaseStudy.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Virtual } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import React, { useCallback, useEffect, useRef } from 'react'

function BlockDialog({ item }) {
  const sliderRef = useRef(null);
  
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const valuePrev = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  useEffect(() => {
    const desc_object = document.getElementsByClassName("show-modal-products");
    if (desc_object) {
      valuePrev.map(()=>{
        handlePrev()
      })
    }
  },[item])

  return (
    <>
      <div className="modal fade" id="studyModal" tabIndex="-1" aria-labelledby="studyModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header align-items-start">
              <div className="modal-header-label">
                <h4 className="modal-title">{item?.title}</h4>
                <span className="badge bg-light-opacity">
                  {item?.tags && item?.tags[0] !== '' ? `#${item.tags}` : ''}
                </span>
              </div>
              <button type="button" className="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close">
                <i className="las la-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6">
                  <Swiper
                  ref={sliderRef}
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={false}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    virtual
                    modules={[Pagination, Navigation, Virtual]}
                  >
                    {item?.works?.map((value, id) => (
                      <div className="swiper-slide" key={id}>
                        <SwiperSlide>
                          <img src={value} className={`${styles.imgDialog}`} alt={`${item?.title}`} />
                        </SwiperSlide>
                      </div>
                    ))}
                  </Swiper>
                </div>
                <div className="col-lg-6">
                  <div className="boxed">
                    <h4 className="boxed-title">Overview</h4>
                    <div className="boxed-text">{item?.content}</div>
                  </div>
                  <div className="boxed">
                    <h4 className="boxed-title">Type of contract</h4>
                    <div className="boxed-text">{item?.type_of_contract}</div>
                  </div>
                  <div className="boxed">
                    <h4 className="boxed-title">Technology</h4>
                    <div className="boxed-text">
                    <div className="badges">
                        {item?.technology?.split(',').map((value) => (
                          <>
                            <span className="badge bg-primary-opacity">{value}</span>
                          </>
                        ))}
                      </div>
                      </div>
                  </div>
                  <div className="boxed">
                    <h4 className="boxed-title">Responsible content</h4>
                    <div className="boxed-text">
                      <div className="badges">
                        {item?.responsible_content?.split(',').map((value) => (
                          <>
                            <span className="badge bg-primary-opacity">{value}</span>
                          </>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="boxed">
                    <h4 className="boxed-title">Team structure</h4>
                    <div className="boxed-text">
                      {item?.team_structure && item?.team_structure !== 'null' ? `~${item.team_structure}` : ''}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default BlockDialog