import { useNavigate } from "react-router-dom";
import './Home.css';
import naruto from './Pictures/naruto_processed.jpg';
import tanjiro from './Pictures/tanjiro_processed.jpg';
import nissan from './Pictures/350-back_processed.webp';
import bmw from './Pictures/e36-back_processed.jpg';
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export default function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('quiz')
    }
    return (
        <div className="home-div">
            <h1>Random Facts About Cash Quiz!</h1>
            <h1>Answer to the best of your abilities!</h1>
            <div className="img-div-1">
                <img className='bmw' src={bmw} alt='bmw' />
                <img className="nissan" src={nissan} alt='350z'/>
            </div>
            <Button color='info' size='lg' onClick={handleClick}>Take Quiz</Button>
            <div className="img-div-2">
                <img className="naruto" src={naruto} alt='naruto'/>
                <img className="tanjiro" src={tanjiro} alt='tanjiro'/>
            </div>
        </div>
    )
}