// Style some employee layouts. Account for randomly sized images.

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
    return (
      <div style={{ height: '100%', backgroundColor: 'green' }}>
        <h1 style={{color: 'white'}}>SECURITY IS IMPORTANT TO US</h1>

        <textarea
          placeholder="We build SECURE software"
          style={{width: '100%', margin: 20}}
          rows={10}
          onChange={event => eval(event.target.value)}>
        </textarea>

      </div>
    )
  }
}
