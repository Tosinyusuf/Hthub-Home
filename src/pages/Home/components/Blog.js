import React from 'react'
import { CardsContent3 } from '../../../utils/Cards'
import { Search } from './Search'
import AuthButton from '../../../components/AuthButton'

export const Blog = () => {
  return (
    <div className='service'>
    <p>Our Blog</p>
    <h2>Value proposition accelerator product management venture</h2>
<div className="Cards">
  {CardsContent3.map((CardsContent, index) => (
    <div className="CardsContent1" key={index}>
      <div className='CardsContent1Wrap'>
        <div className="cardImg">
          <img src={CardsContent.img} alt={CardsContent.img} />
        </div>
        <h3><span>Category</span> {CardsContent.title}</h3>
        <div className="cardTitle">{CardsContent.content}</div>
          <div className='cardPosition'>
          <div><img src={CardsContent.img2} alt='profile pics' /></div>
          <h5>{CardsContent.name}</h5>
          </div>
       
      </div>
    </div>
  ))}
      </div>
      <div>
      <AuthButton
            type="submit"
            text={'Load more'}
            className={'load'}
            />
      </div>
      <div className='enterprise'>
        <div>
          <div>
            <h2>An enterprise template to ramp up your company website</h2>
            <div className='actions'>
            <Search />  
            <AuthButton
                type="submit"
                text={'Start now'}
            className={'buy'}
            />
            </div>
        
          </div>
        </div>
        
      </div>
    </div>
  )
}
