import redLight from '../../assets/background/redLight.svg'
import purpleBall from '../../assets/background/purpleBall.svg'
import purpleLight from '../../assets/background/purpleLight.svg'
import redBallBig from '../../assets/background/redBall.svg'
import redBallSmall from '../../assets/background/redBall1.svg'

import './BackgroundBalls.scss'

export function BackgroundBalls() {
  return (
    <div className='balls'>
    <img style={{position:'absolute'}} src={redLight}/>
    <img style={{position:'absolute', left:'60%'}} src={purpleBall}/>
    <img style={{position:'absolute',}} src={purpleLight}/>
    <img style={{position:'absolute', left:'40%', top:'6%'}} src={redBallBig}/>
    <img style={{position:'absolute', left:'61%', top:'57%'}} src={redBallSmall}/>
  </div>
  )
}