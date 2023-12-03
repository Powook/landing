/* eslint-disable jsx-a11y/alt-text */
import redLight from '../../assets/background/redLight.svg'
import purpleBall from '../../assets/background/purpleBall.svg'
import purpleLight from '../../assets/background/purpleLight.svg'
import redBallBig from '../../assets/background/redBall.svg'
import redBallSmall from '../../assets/background/redBall1.svg'

import './BackgroundBalls.scss'

export function BackgroundBalls() {
  return (
    <div className='balls'>
    <img style={{maxWidth:'100%', maxHeight:'100%', position:'absolute'}} src={redLight}/>
    <img style={{maxWidth:'100%', maxHeight:'100%', position:'absolute', left:'60%'}} src={purpleBall}/>
    <img className='purpleLight' style={{maxWidth:'100%', maxHeight:'100%', position:'absolute',}} src={purpleLight}/>
    <img style={{maxWidth:'100%', maxHeight:'100%', position:'absolute', left:'40%', top:'6%'}} src={redBallBig}/>
    <img style={{maxWidth:'100%', maxHeight:'100%', position:'absolute', left:'61%', top:'57%'}} src={redBallSmall}/>
  </div>
  )
}