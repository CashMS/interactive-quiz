import React, { useState } from "react";
import { useLocation } from "react-router-dom"
import './Fin.css';
import choices from "./Questions";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ski from './Pictures/ski_processed.webp';
import myz from './Pictures/350z2_processed.jpeg';
import me from './Pictures/IMG_0895_processed.PNG';
import kaneki from './Pictures/kaneki_processed.jpg';
import eclipse from './Pictures/eclipse_processed.jpeg';


export default function Fin() {
    const location = useLocation();
    const score = location.state?.score || 0
    const [ ansBool, setAnsBool ] = useState(false)
    const [ spin, setSpin ] = useState('')

    const handleAnswers = () => {
        setAnsBool(true);
    }
    const handleSpin = () => {
        if (spin !== 'spin') {
            setSpin('spin')
        } else {
            setSpin('');
        }
    }

    return (
        <div className="fin-div">
            <h1 className={spin}>Fin.</h1>
            <h1 className={spin}>Your score: {score}/20</h1>
            {!ansBool && 
            <div className="img-div-1">
                <img className={`eclipse ${spin}`} src={eclipse} alt='eclipse'/>
                <img className={`myz ${spin}`} src={myz} alt='myz' /> 
            </div>
            }
            {!ansBool && <Button onClick={handleAnswers} color='info' className={spin}>See Answers?</Button>}
            {!ansBool && <Button onClick={handleSpin} color='info' className="spin">Spin?</Button>}
            {!ansBool && 
            <div className="img-div-2">
                <img className={`me ${spin}`} src={me} alt='me' />
                <img className={`ski ${spin}`} src={ski} alt='ski' />
                <img className={`kaneki ${spin}`} src={kaneki} alt='kaneki'/>
            </div>
            }
            <div className="answers-div">
                {ansBool && choices.map((quest) => 
                    <div  key={quest.id} className="quest-ans">
                        <p>Question #{quest.id}: {quest.quest}</p>
                        <p>Answer: {quest.correct}</p>
                    </div>
                )}
            </div>
        </div>
    )
}