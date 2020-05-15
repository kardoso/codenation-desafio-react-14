import React from 'react'

export default function FilterButton(props) {
  return (
    <button
      className={`filters__item ${props.isActive ? 'is-selected' : null}`}
      onClick={props.onClick}
    >
      {props.text} <i className="fas fa-sort-down" />
    </button>
  )
}