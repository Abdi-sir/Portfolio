import About from './pages/About'
import Home from './pages/Home'
import Header from './ui/Header'
import Works from './pages/Works'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Works />
        <Skills />
        <Contact/>
      </main>

    </>

  )
}

export default App
