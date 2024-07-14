
import { useEffect, useState } from 'react'
import './App.css'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  let heroData = [
    { textOne: "Dive into", textTwo: " what you love", },
    { textOne: "Indulge", textTwo: "your passion" },
    { textOne: "Give into", textTwo: "your passion" }
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1
      })
    }, 3000)
  }, [])

  return (
    <div>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero setPlayStatus={setPlayStatus} setHeroCount={setHeroCount}
        heroData={heroData[heroCount]} heroCount={heroCount} playStatus={playStatus} />
    </div>
  )
}

export default App
