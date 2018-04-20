// Style two paragraphs of text

import React, { Component } from 'react'
import PropTypes from 'prop-types'

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

  render() {
    const paragraph1 = `${this.props.companyName} is on a mission to help ${this.props.targetAudience} ${this.props.verb} more ${this.props.nameOfConsumableProduct} every day. Starting with the first ${this.props.pretentiousDescriptionOfProduct} that makes ${this.props.anotherWayToDescribeProduct} with the touch of a button, the ${this.props.companyName} system represents three years of hard work to bring ${this.props.adjective} technology (and ${this.props.descriptiveNounClause}) to the home.`


    const paragraph2 = `It’s all in the spirit of manifesting ${this.props.lifeGoal}, and it’s just the ${this.props.adjectiveDescribingGreatness}.`


    return (
      <div>
        <p>{paragraph1}</p>
        <p>{paragraph2}</p>
      </div>
    )
  }
}
