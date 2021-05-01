import heroStyles from '../styles/hero.module.css'

export default function Hero({ title, text, image }) {

  let { file, description } = image
  console.log("file.url", file.url);

  return <div className={heroStyles.heroimage}>
      <h2 className={heroStyles.title}>{title}</h2>
      <p className={heroStyles.submessage}>{text}</p>
    </div>
}
