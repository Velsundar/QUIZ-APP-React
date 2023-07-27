import React, { useState } from 'react'
import { createContext } from 'react'

const QuizContext = createContext();

const quizzes = [
    {
        "question": "Which is the biggest continent in the world?",
        "a": "North America",
        "b": "Asia",
        "c": "Africa",
        "d": "Australia",
        "correct": "b"
    },
    {
        "question": " Which is the longest river in the world?",
        "a": "Ganga",
        "b": "Nile",
        "c": "Amazon",
        "d": "Niger",
        "correct": "b"
    },
    {
        "question": "Which is the largest ocean in the world?",
        "a": "Indian Ocean",
        "b": "Pacific Ocean",
        "c": "Arctic Ocean",
        "d": "Atlantic Ocean",
        "correct": "b"
    },
    {
        "question": "Which is the largest animal in the world?",
        "a": "Blue whale",
        "b": "Shark",
        "c": "Giraffe",
        "d": "Elephant",
        "correct": "a"
    },
    {
        "question": "Which is largest animal on land?",
        "a": "Tiger",
        "b": "White Elephant",
        "c": "African Elephant",
        "d": "Crocodile",
        "correct": "c"
    },
    {
        "question": "Which is largest island in the world?",
        "a": "New Guinea",
        "b": "Andaman Nicobar",
        "c": "Hawaii",
        "d": "Greenland",
        "correct": "d"
    },
    {
        "question": "When was Mahatma Gandhi born?",
        "a": "October 2, 1869",
        "b": "December 15, 1872",
        "c": "July 18, 1918",
        "d": "January 15, 1929",
        "correct": "a"
    },
    {
        "question": "Which state has the longest coastal line in India?",
        "a": "Gujarat",
        "b": "Kerala",
        "c": "Karnataka",
        "d": "West Bengal",
        "correct": "a"
    },
    {
        "question": "Which is the smallest country in the world?",
        "a": "Bhutan",
        "b": "Nepal",
        "c": "Vatican City",
        "d": "Sri Lanka",
        "correct": "c"
    },
    {
        "question": "What is the 19th letter of the English alphabet?",
        "a": "S",
        "b": "M",
        "c": "W",
        "d": "N",
        "correct": "a"
    },
    {
        "question": "Which is largest desert in the world?",
        "a": "KALAHARI",
        "b": "TAKLAMAKAN",
        "c": "GOBI",
        "d": "SAHARA",
        "correct": "d"
    },
    {
        "question": " Which Indian state has a separate constitution?",
        "a": "Goa",
        "b": "West Bengal",
        "c": "Jammu and Kashmir",
        "d": "Haryana",
        "correct": "c"
    }
]

export default function QuizHolder(props) {

    const [start, setStart] = useState(false);
    const [exit, setExit] = useState(false);
    const [correct,setCorrect] = useState(0);
    return (
        <QuizContext.Provider value={{
            start, exit, setStart, setExit, quizzes,correct,setCorrect
        }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export { QuizContext };
