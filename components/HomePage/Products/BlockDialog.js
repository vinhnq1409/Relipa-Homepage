import styles from '../../../styles/user/CaseStudy.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

function BlockDialog({ item }) {

  return (
    <>
      <div className="modal fade" id="studyModal" tabIndex="-1" aria-labelledby="studyModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header align-items-start">
              <div className="modal-header-label">
                <h4 className="modal-title">{item?.title}</h4>
                <span className="badge bg-light-opacity">{item?.tags&&item?.tags[0]!=="" ? `#${item.tags}` : ""}</span>
              </div>
              <button type="button" className="btn-close btn-close-modal" data-bs-dismiss="modal" aria-label="Close">
                <i className="las la-times"></i>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={false}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    observeParents={true}
                    observer={true}
                    modules={[Pagination, Navigation]}
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
                    <div className="boxed-text">{item?.technology}</div>
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
                    <div className="boxed-text">{item?.team_structure&&item?.team_structure!=="null" ? `~${item.team_structure}` : ""}</div>
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
