import companyInfoStyles from '../styles/companyinfo.module.css'
import utilStyles from '../styles/util.module.css'

export default function CompanyInfo({name, location, phone}) {

  return (
    <>
      <h2 className={utilStyles.sectionTitle}>Company</h2>
      <dl className={companyInfoStyles.companyInfo}>
        <div className={companyInfoStyles.companyInfo__row}>
          <dt className={companyInfoStyles.companyInfo__title}>商号</dt>
          <dd className={companyInfoStyles.companyInfo__description}>{name}</dd>
        </div>
        <div className={companyInfoStyles.companyInfo__row}>
          <dt className={companyInfoStyles.companyInfo__title}>所在地</dt>
          <dd className={companyInfoStyles.companyInfo__description}>{location}</dd>
        </div>
        <div className={companyInfoStyles.companyInfo__row}>
          <dt className={companyInfoStyles.companyInfo__title}>電話番号</dt>
          <dd className={companyInfoStyles.companyInfo__description}>{phone}</dd>
        </div>
      </dl>
    </>
  )

}