import aboutStyles from '../styles/about.module.css'
import utilStyles from '../styles/util.module.css'

export default function About() {

  return (
    <>
      <div className={aboutStyles.about}>
        <h2 className={utilStyles.sectionTitle}>About Us</h2>
        <div className={aboutStyles.about__card}>
          <div className={aboutStyles.about__image}></div>
          <div className={aboutStyles.about__text}>
            Rey Techは、より良いものを求めて常に挑戦し続ける企業です。<br/>
            やりたいことがある人、アイデアがある人、私たちと一緒に実現しましょう。
          </div>
        </div>
      </div>
    </>
  )
}
