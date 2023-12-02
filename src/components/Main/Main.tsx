import { Button } from '../Button/Button'
import './Main.css'

export function Main () {
  return (
    <div className='contentContainer'>
    <div className='leftBlock' style={{maxWidth:362}}>
      <p className='title'>Зарабатывайте<br/>больше</p>
      <p className='markedTitle'>с WELBEX</p>
      <p className='fefefe'>Развиваем и контролируем продажи за вас</p>
    </div>
    <div className='rightBlock'>
      <p className='rightBlock_title'>Вместе с <span className='rightBlock_title_marked'>бесплатной консультацией</span> мы дарим:</p>
      <div className='features_block'>
          <div className='features'>
            <p>Виджеты</p>
            <span>30 готовых решений</span>
          </div>
          <div className='features'>
            <p>Dashboard</p>
            <span>с показателями вашего бизнеса</span>
          </div>
          <div className='features'>
            <p>Skype Аудит</p>
            <span>отдела продаж и CRM системы</span>
          </div>
          <div className='features'>
            <p>35 дней</p>
            <span>использования CRM</span>
          </div>
      </div>
    <Button text='Получить консультацию' type='primary' width={262} height={61}/>
    </div>
    </div>
  )
}