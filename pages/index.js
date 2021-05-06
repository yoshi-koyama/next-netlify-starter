import Head from 'next/head'
import Footer from '@components/Footer'

import { fetchHero, fetchCompanyInfo, fetchTodos } from '../util/contentfulPosts'

import Hero from '@components/Hero'
import CompanyInfo from '@components/CompanyInfo'
import About from '@components/About'

import indexStyles from '../styles/index.module.css'


export default function Home({ hero, companyInfo }) {
  return (
    <>
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
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