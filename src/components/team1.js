// Design the above-the-fold portion of this page

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Team1 extends Component {
  static propTypes = {
    companyName: PropTypes.string.isRequired,
    logoUrl: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    subhead: PropTypes.string.isRequired,
    primaryButtonText: PropTypes.string.isRequired,
    secondaryButtonText: PropTypes.string.isRequired,
    heroImageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
    menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  render() {
    return (
      <div>
        <div style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          { this.props.heroImageUrls.map(image => <img key='image' style={{width: '50%', height: '200px' }} src={ image } />) }
        </div>

        <nav>
          <a>{ this.props.companyName }</a>
          <a><img src={ this.props.logoUrl } style={{ width: 200 }}/></a>
          {
            this.props.menuItems.map(
              title => <a key={title}>{ title }</a>
            )
          }
        </nav>
        <marquee>{this.props.headline}</marquee>
        <marquee><pre>{this.props.subhead}</pre></marquee>
        <pre>{this.props.subhead}</pre>
      </div>
    )
  }
}
