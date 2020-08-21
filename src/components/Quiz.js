import React, { useState } from 'react'

const Questions = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userSelection, setUserSelection] = useState()
  const [radioChecked, setRadioChecked] = useState(0)
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
  const returnResults = () => {
    const answers = props.quiz.map((question) => question.answer)
    setSubmitted(true)

    const updateResults = (index, answersArr) => {
      userSelection.forEach(answer => answer === answersArr[index] ? setResults(+ 1) : null)
    }
    updateResults(answers)
  }

  // const handleSelection = () => {
  //   setUserSelection()
  //   console.log('user selection', userSelection)
  // }
  // onClick={() => setUserSelection([...userSelection, idx])}
  //onClick={() => setUserSelection([userSelection, 'poo'])}


  return (
    <>
      {!submitted && <div>{props.quiz[currentQuestion].title}</div>}

      {!submitted && <form>{props.quiz[currentQuestion].options.map((option, idx) =>
        <li>{option}<input name={option} value={idx} checked={radioChecked === idx} onClick={() => setRadioChecked(idx)} type="radio"></input></li>)}</form>}

      <button onClick={handlePrevQuestion}>Last question</button>
      <button onClick={handleNextQuestion} disabled={userSelection === null}>Next question</button>
      <button onClick={returnResults}>submit</button>
      {submitted && <div>`You scored {results} out of 1`</div>}
    </>
  )
}


export default Questions