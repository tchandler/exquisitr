import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Team1 extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    subhead: PropTypes.string.isRequired,
    primaryButtonText: PropTypes.string.isRequired,
    secondaryButtonText: PropTypes.string.isRequired,
    heroImageUrls: PropTypes.arrayOf(PropTypes.string).isRequired
  }

  render() {
    return (<div>
      {this.props.title}
    </div>)
  }
}
