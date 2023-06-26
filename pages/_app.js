import '../global.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
// import { Provider } from 'next-auth/client'
import Navigation from '../components/Navigation'
// import SimpleNavBox from '../components/SimpleNavBox'
import Footer from '../components/Footer'

// reduces flicker https://github.com/rnosov/react-reveal#server-side-rendering
// import config from 'react-reveal/globals'
// config({ ssrFadeout: true })

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Trafficking Spotters</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image" sizes="32x32" href="/icons/favicon-32x32.gif" />
        <link rel="icon" type="image" sizes="16x16" href="/icons/favicon-16x16.gif" />
      </Head>
      <Navigation />
      <div id="page-container">
        <main>
          <Container>
            <Component {...pageProps} />
            {/* <SimpleNavBox /> */}
          </Container>
        </main>
        <Footer />
      </div>
    </>
  )
}