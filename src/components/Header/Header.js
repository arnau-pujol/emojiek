import React from 'react'

import './Header.css'

export const Header = (props) => {
  const {title, subtitle} = props

  return (
    <header className="header">
      <h1 className="header__title">{title}</h1>
      <p className="header__subtitle">{subtitle}</p>
    </header>
  )
}