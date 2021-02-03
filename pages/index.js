import Head from 'next/head'
import ArticleList from '../components/ArticleList'

export default function Home({articles}) {
  console.log()
  return (
    <div >
      <Head>
        <title>WebDev Newz</title>
        <meta name="keywords" content="web development, programing" />
      </Head>
      <h1>Welcome to Next</h1>
      <ArticleList articles={articles.data}/>
    </div>
  )
}

export const getStaticProps = async()=>{
  const res = await fetch(`https://reqres.in/api/users`)
  const articles = await res.json();

  return {
    props:{
      articles
    }
  }
}
