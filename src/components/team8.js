import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './team8.css'

export default class Team1 extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div>
        <div className='contact'>
          <h2>Contact Us</h2>
          <img className='contact-img' src='https://media0.giphy.com/media/R4hiYuzvIgEKs/giphy-downsized.gif' />
        </div>
        <div className='sitemap'>
          <ul>
            <li><a>Hey, Wait, Where Am I?</a></li>
            <li><a>It's so dark and cold</a></li>
            <li><a>Can anyone hear me?</a></li>
            <li><a>Privacy Policy</a></li>
          </ul>
        </div>
        <div className='copyright'>
          <img src='https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FRTA%2F7E6%2FRTA7E6Ekc.png&f=1' />
        </div>
      </div>
    )
  }
}
