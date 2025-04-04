import { useState } from 'react'
import Header from './components/header'
import Main from './components/main'
import Banner from './components/banner'
import FooterTop from './components/footer-top'
import FooterBottom from './components/footer-bottom'

function App() {
  const links = [
    "Characters",
    "comics",
    "movies",
    "tv",
    "collectibles",
    "videos",
    "fans",
    "news",
    "shop"
  ]
  return (
    <div>
      <Header links={links} />
      <Main />
      <Banner />
      <FooterTop />
      <FooterBottom />

    </div>



  )
}

export default App
