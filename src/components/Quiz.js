import React, { useState } from 'react'

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userSelection, setUserSelection] = useState(null)
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    console.log(currentQuestion)
  }
  const handlePrevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1)
    console.log(currentQuestion)
  }
  const handleSelection = (event) => {
    setUserSelection(event.target.name)
    console.log(event.target.checked)
  }
  return (
    <>
      <div>{props.quiz[currentQuestion].title}</div>
      <form>{props.quiz[currentQuestion].options.map((option) => <li>{option}<input name={option} onClick={handleSelection} checked={userSelection === option} style={{ marginLeft: "30px;" }} type="radio" value={option}></input></li>)}</form>
      {/* <button>Submit answers</button> */}
      <button onClick={handlePrevQuestion}>Last question</button>
      <button disabled={userSelection === null} onClick={handleNextQuestion}>Next question</button>

    </>
  )
}

export default Questions