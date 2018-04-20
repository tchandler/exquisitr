import React, { Component } from 'react';

import Team from './components/team'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Team id={ 1 } />
        </header>
        <article className='services'>
          <section>
            <Team id={ 2 } />
          </section>
          <section>
            <Team id={ 3 } />
          </section>
          <section>
            <Team id={ 4 } />
          </section>
        </article>

        <article className='mission'>
            <Team id={ 5 } />
        </article>
        <article className='team'>
          <section>
            <Team id={ 6 } />
          </section>
          <section>
            <Team id={ 7 } />
          </section>
        </article>

        <footer>
          <Team id={ 8 } />
        </footer>
      </div>
    )
  }
}

export default App;
