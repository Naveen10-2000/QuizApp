import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the color of the sky?",
    options: ["Green", "Blue", "Red", "Yellow"],
    answer: "Blue",
  },
];

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption('');
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption('');
    setShowResult(false);
  };

  return (
    <div className="quiz-app">
      {!showResult ? (
        <div className="quiz-container">
          <h1>Quiz App</h1>
          <div className="question">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  className={`option-button ${selectedOption === option ? 'selected' : ''}`}
                  onClick={() => handleOptionChange(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button className="submit-button" onClick={handleSubmit}>Next</button>
          </div>
        </div>
      ) : (
        <div className="result">
          <h1>Quiz Completed</h1>
          <p>Your score: {score} / {questions.length}</p>
          <button className="restart-button" onClick={handleRestart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
}

export default App;
