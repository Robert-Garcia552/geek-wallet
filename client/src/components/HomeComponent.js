import React, { Component } from 'react';
import Button from './shared/ButtonComponent';

export default class HomeComponent extends Component {
  render() {
    return (
      <div>
        <p>Test</p>
        <Button 
          btnText="Cliker"
        />
      </div>
    )
  }
}
