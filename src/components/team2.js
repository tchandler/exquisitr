// Layout a call to action for a service the company provides

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Team2 extends Component {
  static propTypes = {
    serviceName: PropTypes.string.isRequired,
    serviceDescription: PropTypes.string.isRequired,
    iconImageUrl: PropTypes.string.isRequired,
    callToAction: PropTypes.string.isRequired,
    callToInaction: PropTypes.string.isRequired
  }

  render() {
    return (
      <div style={{ backgroundColor: 'black', color: 'white', height: '100%' }}>
        <img src="https://i.ytimg.com/vi/rxHOpjQoNKk/hqdefault.jpg" alt="meatloaf" />
        <h2 style={{ textAlign: 'center' }}>PAIN IS JUST WEAKNESS</h2>
        <h2 style={{ textAlign: 'center' }}>LEAVING THE BODY</h2>
      </div>
    );
  }
}
