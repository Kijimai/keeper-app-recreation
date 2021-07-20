import React from 'react'
import { Header } from "./components/Header.component"
import { Footer } from "./components/Footer.component"
import { NotesContainer } from './components/Notes-container.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <NotesContainer />
      <Footer />
    </div>
  );
}

export default App;
