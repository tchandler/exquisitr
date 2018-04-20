// Style two paragraphs of text

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Color from 'color-js'

import './team5.css'

const nouns = [
  'mom',
  'bumper',
  'colorimeter',
  'consecrator',
  'troublement',
  'gaggle',
  'beauty contestant',
  'mushroom',
  'centaur',
  'aura',
  'rust',
  'bathometer',
  'bananas'
]

const verbs = [
  'floating',
  'swim',
  'perceive',
  'hoard',
  'trudge',
  'speak quietly',
  'savor',
  'launch',
  'deceive',
  'whisper',
  'unchurch',
  'brighten'
]

const adjectives = [
  'unspookish',
  'wrong',
  'nonhistoric',
  'thunderous',
  'majestic',
  'overarching',
  'angry',
  'dejected',
  'incoherent',
  'tyrannical',
  'beneficial',
  'hotheaded'
]

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
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      companyName: '<fish>',
      color1: Color('red'),
      color2: Color('blue')
    }
    setInterval(this.randomUpdateState, 2000);
  }

  componentDidMount () {
    this.randomUpdateState();
    this.colorTimer = window.setInterval(() => {
      this.setState({
        color1: this.state.color1.shiftHue(-1),
        color2: this.state.color1.shiftHue(1)
      })
    }, 60)

    this.colorTimer = window.setInterval(() => {
      this.setState({
        bgIndex: Math.round(Math.random()*bgImages.length)
      })
    }, 1000)
  }

  getRandomArbitrary = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomUpdateState = () => {
    this.setState({
      targetAudience: nouns[this.getRandomArbitrary(0, nouns.length - 1)],
      verb: verbs[this.getRandomArbitrary(0, nouns.length - 1)],
      nameOfConsumableProduct: nouns[this.getRandomArbitrary(0, nouns.length - 1)],
      pretentiousDescriptionOfProduct: adjectives[this.getRandomArbitrary(0, nouns.length - 1)],
      anotherWayToDescribeProduct: adjectives[this.getRandomArbitrary(0, nouns.length - 1)],
      adjective: adjectives[this.getRandomArbitrary(0, nouns.length - 1)],
      descriptiveNounClause: nouns[this.getRandomArbitrary(0, nouns.length - 1)],
      lifeGoal: nouns[this.getRandomArbitrary(0, nouns.length - 1)],
      adjectiveDescribingGreatness: adjectives[this.getRandomArbitrary(0, nouns.length - 1)],
    });
  }

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

  render() {
    const paragraph1 = `${this.state.companyName} is on a mission to help ${this.state.targetAudience} ${this.state.verb} more ${this.state.nameOfConsumableProduct} every day. Starting with the first ${this.state.pretentiousDescriptionOfProduct} that makes ${this.state.anotherWayToDescribeProduct} with the touch of a button, the ${this.state.companyName} system represents three years of hard work to bring ${this.state.adjective} technology (and ${this.state.descriptiveNounClause}) to the home.`

    const paragraph2 = `It’s all in the spirit of manifesting ${this.state.lifeGoal}, and it’s just the ${this.state.adjectiveDescribingGreatness}.`

    return (
      <div className='container' style={{background: `url(${bgImages[this.state.bgIndex]})`, backgroundSize: 'cover', fontSize: '600%'}}>
        <p className='p1' style={{ color: `${this.state.color1}`}}>{paragraph1}</p>
        <p className='p2' style={{ color: `${this.state.color2}`}}>{paragraph2}</p>
      </div>
    )
  }
}
