import React, { Component } from 'react';
import './App.css';

import team1Props from './props/team1'
import team2Props from './props/team2'
import team3Props from './props/team3'
import team4Props from './props/team4'
import team5Props from './props/team5'
import team6Props from './props/team6'
import team7Props from './props/team7'
import team8Props from './props/team8'
import team9Props from './props/team9'
import team10Props from './props/team10'

import Team1 from './components/team1'
import Team2 from './components/team2'
import Team3 from './components/team3'
import Team4 from './components/team4'
import Team5 from './components/team5'
import Team6 from './components/team6'
import Team7 from './components/team7'
import Team8 from './components/team8'
import Team9 from './components/team9'
import Team10 from './components/team10'

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Team9 {...team9Props} />
        </nav>
        <header>
          <Team1 {...team1Props} />
        </header>
        <article className='services'>
          <section>
            <Team2 {...team2Props} />
          </section>
          <section>
            <Team3 {...team3Props} />
          </section>
          <section>
            <Team4 {...team4Props} />
          </section>
        </article>

        <article className='team'>
          <section>
            <Team5 {...team5Props} />
          </section>
          <section>
            <Team6 {...team6Props} />
          </section>
        </article>

        <article clasName='products'>  
          <section>
            <Team7 {...team7Props} />
          </section>
          <section>
            <Team8 {...team8Props} />
          </section>
        </article>
        <footer>
          <Team10 {...team10Props} />
        </footer>
      </div>
    );
  }
}

export default App;
