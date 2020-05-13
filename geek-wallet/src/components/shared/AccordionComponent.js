import React, { Component } from 'react';

export default class AccordionComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: [false, false, false]
    }
  }

  toggleExpand = (index) => {
    const open = this.state.active;

    open[index] = !this.state.active[index];
    this.setState({ active: open });
  }

  render() {
    return(
      <ul className='accordion fa-ul'>
        {this.props.listItems.map((item, index) => (
          <>
            <li className='list-items' key={index} onClick={() => this.toggleExpand(index)}>
              {item.header}
              <span class='fa-li'>
                <i class={`fas fa-${this.state.active[index] ? 'chevron-up' : 'chevron-down'}`}></i>
              </span>
            </li>
            <p className={this.state.active[index] ? 'show' : 'hide'}>{item.detail}</p>
            <hr/>
          </>
        ))}
      </ul>
    )
  }
}
