import React, { Component } from 'react';
import PrimaryButton from './shared/PrimaryButtonComponent';
import Accordion from './shared/AccordionComponent';

export default class HomeComponent extends Component {

  render() {
    return (
      <div>
        <div className='container blue-background'>
          <h2 className='header'>Make Smart Decisions With Your Wallet</h2>
          <p className='sub-header'>Valuable information aimed to help you become a financial geek. Articles coming soon.</p>
          <PrimaryButton 
            text='Get Started'
            href='/sign-up'
          />
        </div>
        <div className='flex-container details'>
          <div className='details-text'>
            <p className='muted-text'>Free Articles</p>
            <h3 className='header'>Learn about various financial principles</h3>
            <p className='sub-header'>Find out what impacts your credit score, how to increase your savings, or about investment options.</p>
            <Accordion 
              listItems={[
                {'header': 'Increase Your Credit Score', 'detail': "Managing your credit score shouldn't be a mystery. Let's get you on the right track."},
                {'header': 'Find the Best Credit Cards', 'detail': "Credit cards can be a headache to understand. Get the information you need to know if you're getting the right card."},
                {'header': 'Implement a Savings Program', 'detail': "Savings are important as you don't know what will happen tomorrow. Find out how much you should have saved."}
              ]}
            />
          </div>
          <div>
            <video src="https://www.nerdwallet.com/cdn/homepage/animations/membership.mp4" poster="https://www.nerdwallet.com/cdn/homepage/animations/membership-poster.png" width="340" autoplay="" muted="" playsinline="" loop=""></video>
          </div>
        </div>
        <div className='flex-container cards'>
          <div className='blue-background card'>
            <p className='card-header'>FAST TRACK TO FREEDOM</p>
            <p className='card-text'>Refinancing your student loan may allow you to pay it off sooner.</p>
          </div>
          <div className='green-background card'>
            <p className='card-header'>NO QUESTION</p>
            <p className='card-text'>Wondering "Will another outing break my budget?"</p>
          </div>
        </div>
      </div>
    )
  }
}
