import React from 'react'

const EasterEgg = (props) => {
  return <li>{props.name}</li>
}

const Egglist = (props) => {
  const renderedList = props.eggs.map((egg) => {
    return <EasterEgg name={egg} />
  })
  return <ul>{renderedList}</ul>
}

export default Egglist





