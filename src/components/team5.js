// Style two paragraphs of text

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Color from 'color-js'

import './team5.css'

const bgImages = [
  process.env.PUBLIC_URL + '/team5/bg1.png',
  process.env.PUBLIC_URL + '/team5/bg2.png',
  process.env.PUBLIC_URL + '/team5/bg3.png',
  process.env.PUBLIC_URL + '/team5/bg4.png',
  process.env.PUBLIC_URL + '/team5/bg5.png',
  process.env.PUBLIC_URL + '/team5/bg6.png',
  process.env.PUBLIC_URL + '/team5/bg7.png',
]

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
      color1: Color('red'),
      color2: Color('blue')
    }
  }

  componentDidMount () {
    this.colorTimer = window.setInterval(() => {
      this.setState({
        color1: this.state.color1.shiftHue(-1),
        color2: this.state.color1.shiftHue(1)
      })
    }, 60)
  }

  render() {
    const paragraph1 = `${this.props.companyName} is on a mission to help ${this.props.targetAudience} ${this.props.verb} more ${this.props.nameOfConsumableProduct} every day. Starting with the first ${this.props.pretentiousDescriptionOfProduct} that makes ${this.props.anotherWayToDescribeProduct} with the touch of a button, the ${this.props.companyName} system represents three years of hard work to bring ${this.props.adjective} technology (and ${this.props.descriptiveNounClause}) to the home.`


    const paragraph2 = `It’s all in the spirit of manifesting ${this.props.lifeGoal}, and it’s just the ${this.props.adjectiveDescribingGreatness}.`



    return (
      <div className='container' style={{background: `url(${bgImages[0]})`, backgroundSize: 'cover', fontSize: '600%'}}>
        <p className='p1' style={{ color: `${this.state.color1}`}}>{paragraph1}</p>
        <p className='p2' style={{ color: `${this.state.color2}`}}>{paragraph2}</p>
      </div>
    )
  }
}
