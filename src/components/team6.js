// Style some C-level employee layouts. Account for randomly sized images.

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Team5 extends Component {
  static propTypes = {
    CEOName: PropTypes.string.isRequired,
    CEOBio: PropTypes.string.isRequired,
    CEOImgUrl: PropTypes.string.isRequired,
    CTOName: PropTypes.string.isRequired,
    CTOBio: PropTypes.string.isRequired,
    CTOImgUrl: PropTypes.string.isRequired,
    COOName: PropTypes.string.isRequired,
    COOBio: PropTypes.string.isRequired,
    COOImgUrl: PropTypes.string.isRequired
  }

  render() {
    return (
      <div style={{ backgroundColor: 'blue', color: 'purple', height: '100%', padding: 20 }}>
        <form action="https://facebook.com">
          <h1>Contact us</h1>

          <p><label>Name</label><br /><input type="text" /></p>
          <p><label>Social security number</label><br/><input type="text" required /></p>

          <button type="submit">Send!</button>
        </form>
      </div>
    );
  }
}
