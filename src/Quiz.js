import React, { useState } from "react";
import choices from './Questions';
import './Quiz.css';

export default function Quiz() {
    const [ currQuest, setCurrQuest ] = useState(0);
    const [ score, setScore ] = useState(0);
    const [ selected, setSelected ] = useState('');

    const handleChange = (value) => {
        setSelected(value);
    }

    const handleNext = () => {
        if (selected === choices[currQuest].correct) {
            setScore(score + 1);
        }

        if (currQuest < choices.length - 1) {
            setCurrQuest(currQuest + 1);
            setSelected('')
        } else {
            console.log('Selected Answers:', selected)
        }
    }

    const { quest, c1, c2, c3, c4 } = choices[currQuest];

    return (
            <div className="quiz-div">
                <h1>Answer to the best of your abilities!</h1>
                <div className="question">
                        <p>Question {choices[currQuest].id}/20 </p>
                        <h3>{quest}</h3>
                        <label>
                            <input 
                            type='radio' 
                            name={`question-${choices[currQuest].id}`} 
                            value={c1} 
                            onChange={() => handleChange(c1)}
                            checked={selected === c1}
                            />
                            {c1}
                        </label>
                        <label>
                            <input 
                            type='radio'
                            name={`question-${choices[currQuest].id}`}
                            value={c2}
                            onChange={() => handleChange(c2)}
                            checked={selected === c2}
                            />
                            {c2}
                        </label>
                        <label>
                            <input 
                            type='radio'
                            name={`question-${choices[currQuest].id}`}
                            value={c3}
                            onChange={() => handleChange(c3)}
                            checked={selected === c3}
                            />
                            {c3}
                        </label>
                        <label>
                            <input 
                            type='radio'
                            name={`question-${choices[currQuest].id}`}
                            value={c4}
                            onChange={() => handleChange(c4)}
                            checked={selected === c4}
                            />
                            {c4}
                        </label>
                        <button 
                        onClick={handleNext} 
                        className="next" 
                        disabled={!selected}
                        >
                        Next
                        </button>
                    </div>
            </div>
    )
}