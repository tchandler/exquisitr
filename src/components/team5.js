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
    return (<div>
      {this.props.CEOName}
    </div>)
  }
}
