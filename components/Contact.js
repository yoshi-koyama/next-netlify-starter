import contactStyles from '@styles/contact.module.scss'
import utilStyles from '@styles/util.module.scss'

export default function Contact() {

  return (
    <>
      <div className={contactStyles.contact}>
        <h2 className={utilStyles.sectionTitle}>Contact</h2>
        <p className={contactStyles.contact__message}>お問い合わせは以下よりお願いします。</p>
        <p className={contactStyles.contact__phonenumber}>03-4405-4563</p>
        <p className={contactStyles.contact__email}>muta@reytech.co.jp</p>
      </div>
    </>
  )
}
