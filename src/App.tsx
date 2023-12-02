import React from 'react';
import './App.scss';
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import { BackgroundBalls } from './components/BackgroundBalls/BackgroundBalls';

function App() {
  return (
    <div className="App">
      <Container containerWidth={1140} customClassName='App_container'>
        <Header/>
        <Main/>
        <Footer/>
      </Container>
      <BackgroundBalls/>
    </div>
  );
}

export default App;
