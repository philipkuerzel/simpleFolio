
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/header/Header'
import Main from './assets/components/main/Main'
import Footer from './assets/components/footer/Footer'

function App() {
  return (
    <>
    <section className='app'>
      <Header/>
      <Main/>
      <Footer/>
    </section>
    </>
  )
}

export default App
