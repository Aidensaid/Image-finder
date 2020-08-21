import React, { useState } from 'react'

const Questions = (props) => {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userSelection, setUserSelection] = useState([])
  const [radioChecked, setRadioChecked] = useState(null)
  const [results, setResults] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleNextQuestion = () => {
    if (currentQuestion < 1) {
      setCurrentQuestion(currentQuestion + 1)
      setRadioChecked(null)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0)
      setCurrentQuestion(currentQuestion - 1)
  }

  const handleUserSelection = (idx) => {
    setRadioChecked(idx)
    setUserSelection(userSelection.concat(idx))
    console.log('userSelection', userSelection)
  }

  const returnResults = () => {
    const answers = props.quiz.map((question) => question.answer)
    console.log('answers', answers)
    setSubmitted(true)

    const updateResults = () => {
      let correctAnswers = 0

      userSelection.forEach((answer, idx) => answer === answers[idx] ? correctAnswers++ : null)
      console.log('correct answers', correctAnswers)
      setResults(correctAnswers)
      //this log is async? console.log('results', results)
    }

    updateResults(answers)
  }

  return (
    <>
      {!submitted && <div>{props.quiz[currentQuestion].title}</div>}
      {!submitted && <form>{props.quiz[currentQuestion].options.map((option, idx) =>
        <li>{option}<input name={option} value={idx} checked={radioChecked === idx} onClick={() => handleUserSelection(idx)} type="radio"></input></li>)}</form>}
      <button onClick={handlePrevQuestion}>Last question</button>
      <button onClick={handleNextQuestion} disabled={userSelection === null}>Next question</button>
      <button onClick={returnResults}>submit</button>
      {submitted && <div>`You scored {results} out of {props.quiz.length}`</div>}
    </>
  )
}

export default Questions