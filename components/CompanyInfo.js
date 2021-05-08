import companyInfoStyles from '@styles/companyinfo.module.scss'
import utilStyles from '@styles/util.module.scss'

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
        <div className={companyInfoStyles.companyInfo__row}>
          <dt className={companyInfoStyles.companyInfo__title}>設立年月日</dt>
          <dd className={companyInfoStyles.companyInfo__description}>平成29年11月01日</dd>
        </div>
        <div className={companyInfoStyles.companyInfo__row}>
          <dt className={companyInfoStyles.companyInfo__title}>資本金</dt>
          <dd className={companyInfoStyles.companyInfo__description}>200万円</dd>
        </div>
        <div className={companyInfoStyles.companyInfo__row}>
          <dt className={companyInfoStyles.companyInfo__title}>代表取締役</dt>
          <dd className={companyInfoStyles.companyInfo__description}>小川　健太郎</dd>
        </div>
        <div className={companyInfoStyles.companyInfo__row}>
          <dt className={companyInfoStyles.companyInfo__title}>事業内容</dt>
          <dd className={companyInfoStyles.companyInfo__description}>
            <ul>
              <li className={companyInfoStyles.companyInfo___descriptionAdjuster}>SIサービス事業</li>
              <li>Webサービス事業</li>
            </ul>
          </dd>
        </div>
        <div className={companyInfoStyles.companyInfo__row}>
          <dt className={companyInfoStyles.companyInfo__title}>取引銀行</dt>
          <dd className={companyInfoStyles.companyInfo__description}>三菱東京UFJ銀行 大山支店</dd>
        </div>
      </dl>
    </>
  )

}