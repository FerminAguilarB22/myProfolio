
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './components/LandingPage';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/work/Work';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <LandingPage></LandingPage>
      <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}

export default App;
