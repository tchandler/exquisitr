// Layout a call to action for a service the company provides

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Team4 extends Component {
  static propTypes = {
    serviceName: PropTypes.string.isRequired,
    serviceDescription: PropTypes.string.isRequired,
    iconImageUrl: PropTypes.string.isRequired,
    callToAction: PropTypes.string.isRequired,
    callToInaction: PropTypes.string.isRequired
  }

  render() {
    return (<div>
      {this.props.serviceName}
    </div>)
  }
}
