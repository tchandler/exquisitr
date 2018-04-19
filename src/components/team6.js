import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Team6 extends Component {
  static propTypes = {
    teamMembers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
    )
  }

  render() {
    return (<div>
      {this.props.teamMembers[0].name}
    </div>)
  }
}
