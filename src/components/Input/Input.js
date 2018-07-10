import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Input.css'

export class Input extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    textChange: PropTypes.func
  }

  handleChange = event => {
    this.props.textChange(event);
  }

  render () {
    const {placeholder} = this.props
    return (
      <input className="input" type="text" name="search" placeholder={placeholder} onChange={this.handleChange} />
    )
  }
}
