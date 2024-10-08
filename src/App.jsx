
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/Nav-Bar';
import { Section } from 'lucide-react';
import { Section13 } from './components/section13';
// import { Section14 } from './components/section14';
// import { Section14 } from './components/section14';
import { Home } from './components/Home';
// import { VideoSection } from './components/video-section';
// import { VideoBanne } from './components/video-banner';
// import { Section13 } from './components/section13';
// import { Section12 } from './components/section12';
// import { Section11 } from './components/section-11';
// import Courses from './components/Courses';
// import Features from './components/Features';
// import { Section10 } from './components/section-10';
// import { Menu } from './components/menu';
// import { Preparation } from './components/prepration';
// import { VideoSection } from './components/video-section';

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
          {/* <Section14 /> */}
          {/* <Section13 /> */}
        </header>
        <section>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
