// Style two paragraphs of text

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Color from 'color-js'

import './team5.css'

export default class Team1 extends Component {
  static propTypes = {
    companyName: PropTypes.string.isRequired,
    targetAudience: PropTypes.string.isRequired,
    verb: PropTypes.string.isRequired,
    nameOfConsumableProduct: PropTypes.string.isRequired,
    pretentiousDescriptionOfProduct: PropTypes.string.isRequired,
    anotherWayToDescribeProduct: PropTypes.string.isRequired,
    adjective: PropTypes.string.isRequired,
    descriptiveNounClause: PropTypes.string.isRequired,
    lifeGoal: PropTypes.string.isRequired,
    adjectiveDescribingGreatness: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props)
    this.state = {
      color1: Color('#f00'),
      color2: Color('#00f')
    }
  }

  componentDidMount () {
    this.colorTimer = setInterval(() => {
      this.setState({
        color1: this.state.color1.shiftHue(1),
        color2: this.state.color1.shiftHue(1)
      })
    }, 60)
  }

  render() {
    const paragraph1 = `${this.props.companyName} is on a mission to help ${this.props.targetAudience} ${this.props.verb} more ${this.props.nameOfConsumableProduct} every day. Starting with the first ${this.props.pretentiousDescriptionOfProduct} that makes ${this.props.anotherWayToDescribeProduct} with the touch of a button, the ${this.props.companyName} system represents three years of hard work to bring ${this.props.adjective} technology (and ${this.props.descriptiveNounClause}) to the home.`


    const paragraph2 = `It’s all in the spirit of manifesting ${this.props.lifeGoal}, and it’s just the ${this.props.adjectiveDescribingGreatness}.`



    return (
      <div className='container' style={{
        background: linear-gradient(to bottom left, this.state.color1, this.state.color2)
      }}>
        <p className='p1'>{paragraph1}</p>
        <p className='p2'>{paragraph2}</p>
      </div>
    )
  }
}
