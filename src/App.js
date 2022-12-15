import About from './pages/About';
import Customers from './pages/Customers';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      <Home id='home' />
      <About id='about' />
      <Services id='service' />
      <Projects id='projects' />
      <Customers />
      <Footer id='contact' />
    </div>
  );
}

export default App;
