import React, { useState } from 'react'

const questions = (props) => {
  return (
    <>
      <div>{props.quiz[0].title}</div>
      <div>{props.quiz[0].options.map((option) => <li>{option}<input style={{ marginLeft: "30px;" }} type="radio" value={option}></input></li>)}</div>
    </>
  )
}

export default questions