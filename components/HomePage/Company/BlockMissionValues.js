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
        <h2 className='mission-box-title text-primary mb-2'>{language.MISSION}</h2>
        
          <div>{language.mission1}</div>
          <div>{language.mission2}</div>
          <div>{language.mission3}</div>
      
      </div>
      <div className='mission-box text-center'>
        <h2 className='mission-box-title text-primary mb-2'>{language.VISION}</h2>
        <div>{language.vision1}</div>
        <div>{language.vision2}</div>
      </div>
      <div className='mission-box text-center'>
        <h2 className='mission-box-title text-primary mb-2'>{language.CORE_VALUES}</h2>
        
          <div>{language.core_values1}</div>
          <div>{language.core_values2}</div>
          <div>{language.core_values3}</div>
          <div>{language.core_values4}</div>
          <div>{language.core_values5}</div>
          <div>{language.core_values6}</div>
      
      </div>
    </section>
  )
}

export default BlockMissionValues
