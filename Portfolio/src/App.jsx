import About from './pages/About'
import Home from './pages/Home'
import Header from './ui/Header'
import Works from './pages/Works'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import SocialMediaLinks from './ui/SocialMediaLinks'
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
      {/* Add the Social Media Links component here */}
      <SocialMediaLinks position="right" /> {/* Change to "right" if you want it on the right side */}
    </>

  )
}

export default App
