// Layout a call to action for a service the company provides

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './team4.css';

export default class Team4 extends Component {
  static propTypes = {
    serviceName: PropTypes.string.isRequired,
    serviceDescription: PropTypes.string.isRequired,
    iconImageUrl: PropTypes.string.isRequired,
    callToAction: PropTypes.string.isRequired,
    callToInaction: PropTypes.string.isRequired
  }

  render() {
    return (
      <div className='team4'>
        <blockquote>
          <p>
            Clop, clop, clop like you just can't stop.<br/><br/>
            When I say hip... you say... <br /><br />
            <cite>-- Richard Nixon ✌️</cite>
          </p>
        </blockquote>
      </div>
    );
  }
}
