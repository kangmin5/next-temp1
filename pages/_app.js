import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import Nav from '@/components/Nav'
import '@/styles/globals.css'

function MyApp({Component, pageProps}) {
  return (
    <>
      <Header />
      <Nav/>
      <Layout>
          <Component {...pageProps} />
      </Layout> 
      <Footer/>
    </>
  )
}

export default MyApp