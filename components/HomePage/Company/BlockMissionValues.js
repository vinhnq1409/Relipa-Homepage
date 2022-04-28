import useTrans from '../../../i18n/useTrans'

const BlockMissionValues = () => {
  const trans = useTrans()
  const language = trans.company.company.MissionValues
  return (
    <section className='section section-aos' id='mission' data-aos='fade-up'>
      <div className='section-content-header line-bottom text-primary'>
        <h2 className='section-content-title'>{language.MissionValues}</h2>
      </div>
      <div className='mission-box text-center'>
        <h2 className='card-title text-primary mb-2'>{language.MISSION}</h2>
        <ol className='style-numric'>
          <li>{language.mission1}</li>
          <li>{language.mission2}</li>
          <li>{language.mission3}</li>
        </ol>
      </div>
      <div className='mission-box text-center'>
        <h2 className='mission-box-title text-primary mb-2'>{language.VISION}</h2>
        <div>{language.vision1}</div>
      </div>
      <div className='mission-box text-center'>
        <h2 className='card-title text-primary mb-2'>{language.CORE_VALUES}</h2>
        <ol className='style-numric'>
          <li>{language.core_values1}</li>
          <li>{language.core_values2}</li>
          <li>{language.core_values3}</li>
          <li>{language.core_values4}</li>
          <li>{language.core_values5}</li>
          <li>{language.core_values6}</li>
        </ol>
      </div>
    </section>
  )
}

export default BlockMissionValues
