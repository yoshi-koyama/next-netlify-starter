import Head from 'next/head'
import Footer from '@components/Footer'

import { fetchHero, fetchCompanyInfo, fetchTodos } from '../util/contentfulPosts'

import Hero from '@components/Hero'
import CompanyInfo from '@components/CompanyInfo'


export default function Home({ hero, companyInfo }) {
  return (
    <>
      <Head>
        <title>Next + Contentful Starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hero">
        <Hero  key={hero.title} title={hero.title} text={hero.text} image={hero.heroImage.fields}/>
      </div>
      <div className="container">
        <main>
          <CompanyInfo key={companyInfo.name} name={companyInfo.name} location={companyInfo.location} phone={companyInfo.phone}/>
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

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .posts {
            display: flex;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
              Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
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