import React, { Component } from 'react';

import Team1 from './team1'
import Team2 from './team2'
import Team3 from './team3'
import Team4 from './team4'
import Team5 from './team5'
import Team6 from './team6'
import Team7 from './team7'
import Team8 from './team8'

import team1Props from '../props/team1'
import team2Props from '../props/team2'
import team3Props from '../props/team3'
import team4Props from '../props/team4'
import team5Props from '../props/team5'
import team6Props from '../props/team6'
import team7Props from '../props/team7'
import team8Props from '../props/team8'

const DEV = true

const MY_TEAM = 8


const componentsMap = {
  Team1, Team2, Team3, Team4, Team5,
  Team6, Team7, Team8,
}

const propsMap = {
  team1Props, team2Props, team3Props, team4Props, team5Props,
  team6Props, team7Props, team8Props,
}

export default class App extends Component {
  render () {
    const id = this.props.id.toString()
    const Component = componentsMap["Team" + id]
    const props = propsMap["team" + id + "Props"]

    return !DEV || MY_TEAM === this.props.id
      ? <Component {...props} />
      : <div className='filler' />
  }
}
