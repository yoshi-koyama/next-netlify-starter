import Head from 'next/head'
import Footer from '@components/Footer'

import { fetchHero, fetchCompanyInfo, fetchTodos } from '../util/contentfulPosts'

import Hero from '@components/Hero'
import CompanyInfo from '@components/CompanyInfo'
import About from '@components/About'
import Recruit from '@components/Recruit'
import Contact from '@components/Contact'

import indexStyles from '../styles/index.module.scss'


export default function Home({ hero, companyInfo }) {
  return (
    <>
      <Head>
        <title>Rey Tech</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Brush up what I learn from Paiza Skill Check Test"
        />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/17bs4cqi7kdy/5MqjfavYZwupNSKacZzO6e/a611475b9f2ce2baf710194b249c8c93/ogp.png"
        />
        <meta name="og:title" content="Rey Tech" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className="hero">
        <Hero  key={hero.title} title={hero.title} text={hero.text} image={hero.heroImage.fields}/>
      </header>
      <main>
        <div className={indexStyles.inner}>
          <CompanyInfo key={companyInfo.name} name={companyInfo.name} location={companyInfo.location} phone={companyInfo.phone}/>
        </div>
        <div className={indexStyles.inner}>
          <About />
        </div>
        <div className={indexStyles.inner}>
          <Recruit />
        </div>
        <div className={indexStyles.inner}>
          <Contact />
        </div>
      </main>
      <Footer />
      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const heroRes = await fetchHero()
  const hero = await heroRes.fields

  const companyInfoRes = await fetchCompanyInfo()
  const companyInfo = await companyInfoRes.fields

  return {
    props: {
      hero,
      companyInfo,
    },
  }
}