
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Services from './pages/services'; 

function App() {

  return (
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path = '/about' element={<About />} />
          <Route path = '/portfolio' element={<Portfolio />} />
          <Route path = '/blog' element ={<Blog />} />
          <Route path = '/contact' element={<Contact />} />
          <Route path = '/services' element={<Services />} />
        </Routes>
 
  )
}

export default App;
