import heroStyles from '@styles/hero.module.scss'

export default function Hero({ title, text, image }) {

  let file = image

  return <div className={heroStyles.hero}>
      <h1 className={heroStyles.hero__title}>{title}</h1>
      <p className={heroStyles.hero__submessage}>{text}</p>
    </div>
}
