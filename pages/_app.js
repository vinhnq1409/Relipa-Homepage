import React from 'react'
import App from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import Script from 'next/script'
import { DefaultSeo } from 'next-seo'
import store from '../redux/store'
import SEO from '../next-seo.config'

const queryClient = new QueryClient()
export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    const Layout = Component.layout || (({ children }) => <>{children}</>)

    return (
      <>
        <DefaultSeo {...SEO} />
        <React.Fragment>
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </QueryClientProvider>
        </React.Fragment>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-DWKNRMVFC9`}
        />
        <Script strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-DWKNRMVFC9');`}
        </Script>
      </>
    )
  }
}
