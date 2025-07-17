import React from 'react';
import './styles/style.css';
import FloatingBoxesManager from './components/FloatingBoxesManager';
import Footer from './components/Footer';
import HeaderBar from './components/HeaderBar';

function App() {
  return (
    <>
    
    <HeaderBar/>{}

    <div className="main-box">
        
      <div className="nav-bar">home</div>

      <div className="box-content">
        <h1>
          hello! <span className="highlight">i’m Atika</span>
        </h1>
        <p>developer, illustrator and Computer Science major</p>
      </div>

      <FloatingBoxesManager />

      <Footer />
    </div>
    </>
    
  );
}

export default App;
