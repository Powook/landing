import React from 'react';
import './App.css';
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Main } from './components/Main/Main';
import redLight from './assets/background/redLight.svg'
import purpleBall from './assets/background/purpleBall.svg'
import purpleLight from './assets/background/purpleLight.svg'
import redBallBig from './assets/background/redBall.svg'
import redBallSmall from './assets/background/redBall1.svg'

function App() {
  return (
    <div className="App">
      <Container containerWidth={1140} customClassName='App_container'>
        <Header/>
        <Main/>
        <Footer/>
      </Container>
      <div className='balls'>
        <img style={{position:'absolute'}} src={redLight}/>
        <img style={{position:'absolute', left:'60%'}} src={purpleBall}/>
        <img style={{position:'absolute',}} src={purpleLight}/>
        <img style={{position:'absolute', left:'40%', top:'6%'}} src={redBallBig}/>
        <img style={{position:'absolute', left:'61%', top:'57%'}} src={redBallSmall}/>

      </div>
    </div>
  );
}

export default App;
