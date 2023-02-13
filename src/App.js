import About from './pages/About';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import { Element } from 'react-scroll'

function App() {
  return (
    <div className="App">
      <Element id='home' name='home'>
        <Home />
      </Element>

      <Element id='about' name='about'>
        <About />
      </Element>

      <Element id='service' name='service'>
        <Services />
      </Element>

      <Element id='projects' name='projects'>
        <Projects />
      </Element>

      <Element id='contact' name='contact'>
        <Footer />
      </Element>
    </div>
  );
}

export default App;
