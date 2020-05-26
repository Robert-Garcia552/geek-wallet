import React, { Component } from 'react';
import PrimaryButton from './shared/PrimaryButtonComponent';
import Accordion from './shared/AccordionComponent';

export default class HomeComponent extends Component {

  render() {
    return (
      <div>
        <div className='container blue-background'>
          <h2 className='header'>Keep Track of Watched Movies</h2>
          <p className='sub-header'>Never forget a great film when you see one. Same for the bad flicks that you wish you didn't see.</p>
          <PrimaryButton 
            text='Get Started'
            href='/sign-up'
          />
        </div>
        <div className='flex-container details'>
          <div className='details-text'>
            <p className='muted-text'>Movie Chest</p>
            <h3 className='header'>Let's track movies today.</h3>
            <p className='sub-header'>Favorite those great films and don't favorite those you don't want to ever watch again.</p>
            <Accordion 
              listItems={[
                {'header': 'Track Movies', 'detail': "Search for your movie and add it to your watched movie collection."},
                {'header': 'Favorite Great Films', 'detail': "Never forget that great film ever again."},
                {'header': 'Remember Bad Flicks', 'detail': "Don't rewatch that bad movie, unless you want to."}
              ]}
            />
          </div>
          <div>
            <video src="https://www.nerdwallet.com/cdn/homepage/animations/membership.mp4" poster="https://www.nerdwallet.com/cdn/homepage/animations/membership-poster.png" width="340" autoplay="" muted="" playsinline="" loop=""></video>
          </div>
        </div>
        <div className='flex-container cards'>
          <div className='blue-background card'>
            <p className='card-header'>FAST TRACK TO MOVIE GREATNESS</p>
            <p className='card-text'>Relive watching a favorite by picking one you know is great.</p>
          </div>
          <div className='green-background card'>
            <p className='card-header'>NO QUESTION</p>
            <p className='card-text'>Wondering "Will another bad movie ruin my weekend?"</p>
          </div>
        </div>
      </div>
    )
  }
}
