import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './SearchResult.css'

export class SearchResult extends Component {
  static propTypes = {
    title: PropTypes.string,
    symbol: PropTypes.string,
    helpText: PropTypes.string,
    helpTextSuccess: PropTypes.string
  }

  render () {
    const codePointHex = this.props.symbol.codePointAt(0).toString(16)
    const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`
    const {
      symbol,
      title,
      helpText,
      helpTextSuccess
    } = this.props

    return (
      <div className="search-result clipboard" data-clipboard-text={symbol}>
        <img className="search-result__img" alt={title} src={src}/>
        <div className="search-result__title">{this.props.title}</div>
        <div className="search-result__help">
          <span className="search-result__help-text">{helpText}</span>
          <span className="search-result__help-success">{helpTextSuccess}</span>
        </div>
      </div>
    )
  }
}
