import React, { useState } from 'react'

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    console.log(currentQuestion)
  }
  return (
    <>
      <div>{props.quiz[currentQuestion].title}</div>
      <div>{props.quiz[currentQuestion].options.map((option) => <li>{option}<input style={{ marginLeft: "30px;" }} type="radio" value={option}></input></li>)}</div>
      <button>Submit answer</button>
      <button onClick={handleNextQuestion}>Next question</button>
    </>
  )
}

export default Questions