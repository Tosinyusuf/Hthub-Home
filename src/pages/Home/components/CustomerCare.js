import React from 'react'
import customer from '../../../assets/images/customercare.svg'
import mark from '../../../assets/images/mark.svg' 

export const CustomerCare = () => {
  return (
    <div className='customerContainer'>
        <div><img src={customer} alt='' /></div>
        <div className='customerBody'>
            <div>
            We connect our customers with the best, and help them keep up-and stay open.
            </div>
              <div className='highlightWrapper'>
                  <div className='highlight'>
                  <div>We connect our customers with the best?</div>
                  <div><img src={mark} alt="" /></div>
                  </div>
                  <div className='highlight'>
                  <div>Android research & development rockstar? </div>
                  <div><img src={mark} alt="" /></div>
                  </div>
                  
              </div>
        </div>
    </div>
  )
}
