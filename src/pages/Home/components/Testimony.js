import React from 'react'
import { CardsContent2 } from '../../../utils/Cards'
import rightArr from '../../../assets/images/arrowLeft.svg' 
import leftArr from '../../../assets/images/arrow.svg' 
import '../../../assets/styles/Home.css';

export const Testimony = () => {
  return (
      <div className='testimonies'>
      <div className='testimoniesWrapper'>
        <div>
        <h1>An enterprise template to ramp up your company website</h1>
          <div>
            <div className='testimonyImg'>
              <div><img src={rightArr} alt='' /></div>
              <div><img src={leftArr} alt='' /></div>
            </div>
          </div>
        </div>
        
        <div>
            <div className="Cards">
            {CardsContent2.map((CardsContent, index) => (
          <div className="CardsContent" key={index}>
            <div className="CardsWrapper">
                <div className="cardContent">
                  {CardsContent.content}
                </div>
                  <div className='titles'>
                    <div><img src={CardsContent.img} alt={CardsContent.img} /></div>
                    <div>
                      <h4>{CardsContent.name}</h4>
                      <div>{CardsContent.position}</div>
                    </div>
                  </div>   
            </div> 
          </div>
        ))}
            </div>
        </div>
        </div>
      </div>
  )
}
