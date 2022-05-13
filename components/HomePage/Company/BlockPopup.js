import styled from '../../../styles/user/PopupCoreMemember.module.css'
const BlockPopup = ({ infoCoreMember }) => {
  const { name, title, desc, img } = infoCoreMember
  return (
    <div className="modal fade" id="studyModal" tabindex="-1" aria-labelledby="studyModalLabel" aria-hidden="true">
      <div className={`modal-dialog modal-xl ${styled.marginAuto}`}>
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className={`btn-close btn-close-modal ${styled.btnClose}`}
              data-bs-dismiss="modal"
              aria-label="Close"
              style={{ color: '#3B3B3B' }}
            >
              <i className="las la-times"></i>
            </button>
            <div className="row">
              <div className="col-lg-6">
                <div className={styled.imgContain}>
                  <div className={styled.imgBgr1}></div>
                  <div className={styled.imgBgr3}></div>
                  <div
                    className={styled.imgBgr2}
                    style={{ backgroundImage: `url('/user-page/img/company/${img}')` }}
                  ></div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className={styled.content}>
                  <h4 className={styled.name}>{name}</h4>
                  <p className={styled.title}>{title}</p>
                  <p className={styled.bar}></p>
                  <p className={styled.desc}>{desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlockPopup
