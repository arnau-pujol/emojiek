import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Clipboard from 'clipboard'

import { SearchResult } from '../SearchResult/SearchResult'

import './SearchResults.css'

export class SearchResults extends Component {
  static propTypes = {
    results: PropTypes.array
  }

  componentDidMount() {
    const rows = document.querySelectorAll('.search-result')

    this.clipboard = new Clipboard('.clipboard');
    this.clipboard.on('success', (e) => {
      const toggleClass = 'is-copied'

      rows.forEach((row) => {
        row.classList.remove(toggleClass)
      })
      e.trigger.classList.add(toggleClass);

      setTimeout(() => {
        e.trigger.classList.remove(toggleClass);
      }, 3000);
    });
  }

  componentWillUnmount() {
    this.clipboard.destroy();
  }

  render () {
    const helpText = 'Click on the row to copy the emoji'
    const helpTextSuccess = 'The emoji has been copied'
    const {results} = this.props

    return (
      <div className="searchResults">
        {
          results.map(result => (
            <SearchResult
              key={result.title}
              symbol={result.symbol}
              title={result.title}
              helpText={helpText}
              helpTextSuccess={helpTextSuccess}
            />
          ))
        }
      </div>
    )
  }
}
