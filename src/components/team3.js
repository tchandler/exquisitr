// Layout a call to action for a service the company provides

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const styles = {
  div: {
    background: "#00f url('http://code.divshot.com/geo-bootstrap/img/microfab.gif') top left",
    height: '100%',
    color: 'white',
    fontFamily: `"Comic Sans MS", cursive, sans-serif`,
    size: 15,
    cursor: 'wait'
  },
  image: {
    maxWidth: 300,
  }
}

export default class Team3 extends Component {
  static propTypes = {
    serviceName: PropTypes.string.isRequired,
    serviceDescription: PropTypes.string.isRequired,
    iconImageUrl: PropTypes.string.isRequired,
    callToAction: PropTypes.string.isRequired,
    callToInaction: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      currentImageIndex: 0
    }

  }

  componentDidMount () {
    this.cycleImage()
  }

  cycleImage () {
    const newIndex = this.state.currentImageIndex === this.props.images.length - 1 ? 0 : this.state.currentImageIndex + 1
    setTimeout(() => {
      this.setState({ currentImageIndex: newIndex })
      this.cycleImage()
    }, 2500)
  }

  render() {
    return (<div style={ styles.div }>
      <div>
        {this.props.serviceName}
      </div>
      <div>
        {this.props.serviceDescription}
      </div>
      <div>
        <img
          style={ styles.image }
          src={ this.props.images[this.state.currentImageIndex] } />
      </div>

      <img src="http://code.divshot.com/geo-bootstrap/img/test/construction.gif" />
    </div>)
  }
}
