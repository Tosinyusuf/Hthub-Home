import React from 'react'
import chart from '../../../assets/images/hero graphics.svg'
import menu from '../../../assets/images/Logo Wall.svg'
// import Arrow1 from '../../../assets/images/Darkarr.svg'
// import Arrow2 from '../../../assets/images/NormalArr.svg'
import AuthButton from '../../../components/AuthButton'

export const Hero = () => {
  return (
    <div className="hero">
      <div className="BusinessContainer">
      <div className="BusinessWrapper">
        <h2>
        Save time by building  fast with Boldo Template 
        </h2>
        <p>
        Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.
        </p>
        <div className="AuthBtn">
          <AuthButton
            type="submit"
            text={'Buy template'}
            className={'buy'}
          />
          <AuthButton
            type="submit"
            text={'Explore'}
            className={'explore'}
          />
        </div>
      </div>
      <div>
        <img src={chart} alt="chart img" />
      </div>
      </div>
      <div className='brands'>
      <img src={menu} alt="Dashboard img" />
      </div>
    </div>
  )
}
