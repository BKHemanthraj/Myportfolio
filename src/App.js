
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Project from './components/Project';
import Techstack from './components/Techstack';

function App() {
  return (
 <>
 <Navbar/>
   <div className="section-wrapper">
   <Profile/>
       <About/>
 <Techstack/>
 <Experience/>
<Project/>
</div>
 <Footer/>
 </>
  );
}

export default App;
