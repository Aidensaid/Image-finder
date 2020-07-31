import React, { useState } from 'react'

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userSelection, setUserSelection] = useState(null)
  const [firstQuestionAnswer, setFirstQuestionAnswer] = useState(null)
  const [secondQuestionAnswer, setSecondQuestionAnswer] = useState(null)
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
    setFirstQuestionAnswer(currentQuestion === 0 ? event.target.value : firstQuestionAnswer)
    setSecondQuestionAnswer(currentQuestion === 1 ? event.target.value : secondQuestionAnswer)
    console.log('usrSlct state', userSelection)
    console.log('firstQuestionAnswer', firstQuestionAnswer)
    console.log('secondQuestionAnswer', secondQuestionAnswer)
  }
  return (
    <>
      <div>{props.quiz[currentQuestion].title}</div>
      <form>{props.quiz[currentQuestion].options.map((option, idx) => <li>{option}<input name={option} onClick={handleSelection} checked={userSelection === option} style={{ marginLeft: "30px;" }} type="radio" value={idx}></input></li>)}</form>
      <button onClick={handlePrevQuestion}>Last question</button>
      <button disabled={userSelection === null} onClick={handleNextQuestion}>Next question</button>

    </>
  )
}

export default Questions