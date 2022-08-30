import React from 'react'
import { CardsContent1 } from '../../../utils/Cards'
import { Testimony } from './Testimony'
import { CustomerCare } from './CustomerCare'
import AuthButton from '../../../components/AuthButton'
import mark from '../../../assets/images/mark.svg'
import arrow from '../../../assets/images/arrow-right.svg'
import call from '../../../assets/images/manPhone.svg'
import eye from '../../../assets/images/eye.svg'
import sun from '../../../assets/images/sun.svg'
import lady from '../../../assets/images/ladyPhone.svg'
import flower from '../../../assets/images/flower.svg'


export const Services = () => {
  return (
    <div className='service'>
          <p>Our Services</p>
          <h2>Handshake infographic mass market crowdfunding iteration.</h2>
      <div className="Cards">
        {CardsContent1.map((CardsContent, index) => (
          <div className="CardsContent" key={index}>
            <div className='CardsContent1Wrap'>
              <div className="cardImg">
                <img src={CardsContent.img} alt="service" />
              </div>
              <h3>{CardsContent.title}</h3>
              <div className="title">{CardsContent.content}</div>
                <div className="page"><div>{CardsContent.btn}</div><div><img src={arrow} alt="" /></div> </div>
            </div>
          </div>
        ))}
      </div>
      <div className='connect'>
              <div><img src={call} alt="" /></div>
              <div>
                  <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
                  <div className='mark'>
                    <div><img src={mark} alt="" /></div>
                    <p>We connect our customers with the best.</p> 
                  </div>
                  <div className='mark'>
                    <div><img src={mark} alt="" /></div>
                    <p>Advisor success customer launch party.</p> 
                  </div>
                  <div className='mark'>
                    <div><img src={mark} alt="" /></div>
                    <p>Business-to-consumer long tail.</p> 
          </div>
          <div className='btn'>
                  <AuthButton
            type="submit"
            text={'Start now'}
            className={'start'}
            />
            </div>
              </div>
           
      </div>
      <div className='connect2'>
              <div className='connect2Body'>
                  <h3>We connect our customers with the best, and help them keep up-and stay open.</h3>
                  <div className='marks'>
                    <div><img src={flower} alt="" /></div>
                    <div>We connect our customers with the best.</div> 
                  </div>
                  <div className='bulletin'>
                    <div><img src={eye} alt="" /></div>
                    <div>Advisor success customer launch party.</div> 
                  </div>
                  <div className='bulletin'>
                    <div><img src={sun} alt="" /></div>
                    <div>Business-to-consumer long tail.</div> 
                  </div>
                  
              </div>
              <div><img src={lady} alt="" /></div>
      </div>
      
          <Testimony />
          <CustomerCare />
    </div>
  )
}
