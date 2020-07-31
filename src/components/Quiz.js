import React, { useState } from 'react'


const Questions = (props) => {
  // const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userSelection, setUserSelection] = useState([])
  // const [firstQuestionAnswer, setFirstQuestionAnswer] = useState(null)
  // const [secondQuestionAnswer, setSecondQuestionAnswer] = useState(null)
  const [results, setResults] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  // const handleNextQuestion = () => {
  //   setCurrentQuestion(currentQuestion + 1)
  //   console.log('user selection', userSelection)
  //   setFirstQuestionAnswer(userSelection)
  // }
  // const handlePrevQuestion = () => {
  //   setCurrentQuestion(currentQuestion - 1)
  // }

  // const handleSelection = (event) => {
  //   setUserSelection(event.target.name)
  //   console.log('user selection', userSelection)
  // }

  const returnResults = () => {

    console.log(userSelection)
    const answer = props.quiz[0].answer
    if (userSelection === answer) {
      setResults(+ 1)
      console.log('correct')
    }
    // let score = 0
    // setResults(score)
    setSubmitted(true)
  }

  return (
    <>
      {!submitted && <div>{props.quiz[0].title}</div>}
      {!submitted && <form>{props.quiz[0].options.map((option, idx) => <li>{option}<input name={option} onClick={() => setUserSelection(idx)} checked={userSelection === idx} style={{ marginLeft: "30px;" }} type="radio" value={idx}></input></li>)}</form>}
      {/* <button onClick={handlePrevQuestion}>Last question</button> */}
      <button disabled={userSelection === null}>Next question</button>
      <button onClick={returnResults}>submit</button>
      {submitted && <div>`You scored {results} out of 1`</div>}
    </>
  )
}

export default Questions