import Link from 'next/link'
import styles from '../../../../styles/user/Service.module.css'

function BlockCaseStudies({ dataCaseStudy, itemCard }) {
  return (
    <section className='section section-aos' data-aos='fade-up'>
      <div className='container'>
        <div className='section-content'>
          <div className='section-content-header line-bottom text-primary'>
            <h2 className='section-content-title'>Case Studies</h2>
          </div>
          <div className='row justify-content-center'>
            {dataCaseStudy?.data?.slice(0, 4).map((item, id) => (
              <div className='col-sm-6 col-md-3' key={id}>
                <div className='card card-news'>
                  <div className='card-thumb'>
                    <div className='img-thumb'>
                      <a href='#' onClick={() => itemCard(item)} data-bs-toggle='modal' data-bs-target='#studyModal'>
                        <img
                          src={`http://${item?.works[0]}`}
                          className={`card-img-top  ${styles.cardImg} `}
                          alt='...'
                        />
                      </a>
                    </div>
                  </div>
                  <div className='card-body'>
                    <h3 className='card-title'>
                      <a href='#' onClick={() => itemCard(item)} data-bs-toggle='modal' data-bs-target='#studyModal'>
                        {item?.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='text-center pt-1'>
            <Link href='/case-studies'>
              <a className='btn btn-outline-greyish btn-lg rounded-0 px-5'>SEE MORE</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlockCaseStudies
