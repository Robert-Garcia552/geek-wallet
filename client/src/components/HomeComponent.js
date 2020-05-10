import React, { Component } from 'react';
import Button from './shared/ButtonComponent';
import Accordion from './shared/AccordionComponent';

export default class HomeComponent extends Component {

  render() {
    return (
      <div>
        <div className='container blue-background'>
          <h2 className='header'>Make Smart Decisions With Your Wallet</h2>
          <p className='sub-header'>Valuable information aimed to help you become a financial geek. Articles coming soon.</p>
          <Button 
            btnText='Get Started'
            href=''
          />
        </div>
        <div className='flex-container details'>
          <div className='details-text'>
            <p className='muted-text'>Free for Now</p>
            <h3 className='header'>Learn even more about your options</h3>
            <p className='sub-header'>Finding out what impacts your credit score or how interest rates affect you just got easier.</p>
            <Accordion 
              listItems={[
                {'header': 'Increase Your Credit Score', 'detail': "Managing your credit score shouldn't be a mystery. Let's get you on the right track."},
                {'header': 'Find the Best Credit Cards', 'detail': "Credit cards can be a headache to understand. Get the information you need to know if you're getting the right card."},
                {'header': 'Implement a Savings Program', 'detail': "Savings are important as you don't know what will happen tomorrow. Find out how much you should have saved."}
              ]}
            />
          </div>
          <div>
            <video class="animation" src="https://www.nerdwallet.com/cdn/homepage/animations/membership.mp4" poster="https://www.nerdwallet.com/cdn/homepage/animations/membership-poster.png" width="340" autoplay="" muted="" playsinline="" loop=""></video>
          </div>
        </div>
      </div>
    )
  }
}
