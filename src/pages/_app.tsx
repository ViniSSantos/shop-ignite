import { globaStyles } from '@/styles/global'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

//É um container para as páginas da nossa aplicação.
// O app é um component que é carregado em qualquer página da nossa aplicação.

globaStyles();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} /> //todas as pages carregam através do <Component {...pageProps} />
}
