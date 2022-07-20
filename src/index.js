import React from 'react';
import ReactDOM from 'react-dom/client';

// CSS
import './index.css';

// container components section
import HoriBar from './components/HoriBar.js';
import LogoContainer from './components/LogoContainer.js';
import ButtonContainer from './components/ButtonContainer.js';
import AboutContainer from './components/AboutContainer.js';

// end of container components section


// content components section 
import FavoriteContent from './components/contents/FavoriteContent.js';
import ProjectsContent from './components/contents/ProjectsContent.js';
import ResumeContent from './components/contents/ResumeContent.js'
import BlogContent from './components/contents/BlogContent.js'

// end content componenets section


//react-router
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// ../../VGS/JS/resume


const MainNav = () => {
  return (
    <div>
      <AboutContainer />
        <HoriBar />
      <ButtonContainer />
        <HoriBar />
      <LogoContainer />
   </div>
  )
}


class Main extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return(
      <div>
        <main>
          <BrowserRouter>
            <nav className="Maincont">
              <MainNav />
            </nav>
            <Routes>
              <Route path="/blog" element={<BlogContent/>} />
              <Route path="/resume" element={<ResumeContent/>} />
              <Route path="/projects" element={<ProjectsContent/>} />
              <Route path="/favorites" element={<FavoriteContent/>} />
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);


