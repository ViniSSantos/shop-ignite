
//import { globaStyles } from '@/styles/global' //import do index.ts da pasta styles
import type { AppProps } from 'next/app'

//É um container para as páginas da nossa aplicação.
// O app é um component que é carregado em qualquer página da nossa aplicação.
//O CSSglobal é uma função kkk
//globaStyles(); //Aqui chamamos o css blobal da aplicação, antes que qualquer pg ou componete seja carregado

//import logoImg from '../assets/logo.svg'
///import { Container, Header } from '@/styles/pages/app';
export default function App({ Component, pageProps }: AppProps) {
  return ( //todas as pages carregam através do <Component {...pageProps} />
  <Component {...pageProps} />


  )
}

