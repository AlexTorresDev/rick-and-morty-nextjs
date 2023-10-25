import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import Layout from '@/components/Layout'
import '@/styles/globals.css'

const myFont = localFont({
  src: './get_schwifty.woff2',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        h1 {
          font-family: ${myFont.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
