import React, { Component } from 'react'

import filter from '../utils/filter'

import { Header } from './Header/Header'
import { Input } from './Input/Input'
import { SearchResults } from './SearchResults/SearchResults'

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      results: filter()
    }
  }

  handleSearchChange = event => {
    this.setState({
      results: filter(event.target.value, 999)
    })
  }

  render () {
    return (
      <React.Fragment>
        <Header title="Emojiek" subtitle="An Emoji Seeker"/>
        <Input placeholder="Type a word to filter" textChange={this.handleSearchChange}/>
        <SearchResults results={this.state.results}/>
      </React.Fragment>
    )
  }
}

export default App
