import companyInfoStyles from '../styles/companyinfo.module.css'

export default function CompanyInfo({name, location, phone}) {

  return (
    <>
      <div className={companyInfoStyles.wrapper}>
        <dl>
          <dt>商号</dt>
          <dd>{name}</dd>
          <dt>所在地</dt>
          <dd>{location}</dd>
          <dt>電話番号</dt>
          <dd>{phone}</dd>
        </dl>
      </div>
    </>
  )

}