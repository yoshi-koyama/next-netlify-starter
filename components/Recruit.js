import recruitStyles from '@styles/recruit.module.scss'
import utilStyles from '@styles/util.module.scss'

export default function Recruit() {

  return (
    <>
      <div className={recruitStyles.recruit}>
        <h2 className={utilStyles.sectionTitle}>Recruit</h2>
        <div className={recruitStyles.recruit__message}>儲け話求む。</div>
        <div className={recruitStyles.recruit__row}>
          <dt className={recruitStyles.recruit__title}>雇用形態</dt>
          <dd className={recruitStyles.recruit__description}>正社員</dd>
        </div>
        <div className={recruitStyles.recruit__row}>
          <dt className={recruitStyles.recruit__title}>給与</dt>
          <dd className={recruitStyles.recruit__description}>当社規定による</dd>
        </div>
        <div className={recruitStyles.recruit__row}>
          <dt className={recruitStyles.recruit__title}>交通費</dt>
          <dd className={recruitStyles.recruit__description}>全額支給</dd>
        </div>
        <div className={recruitStyles.recruit__row}>
          <dt className={recruitStyles.recruit__title}>勤務地</dt>
          <dd className={recruitStyles.recruit__description}>本社又は都内近郊請負先</dd>
        </div>
        <div className={recruitStyles.recruit__row}>
          <dt className={recruitStyles.recruit__title}>休暇</dt>
          <dd className={recruitStyles.recruit__description}>夏季、年末年始、慶弔休暇、有給休暇</dd>
        </div>
        <div className={recruitStyles.recruit__row}>
          <dt className={recruitStyles.recruit__title}>福利厚生</dt>
          <dd className={recruitStyles.recruit__description}>各種社会保険完備（健康保険、厚生年金、雇用保険）</dd>
        </div>
      </div>
    </>
  )
}
