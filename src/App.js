import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css'; 
import {Button, ButtonToolbar} from 'react-bootstrap';

function App() {
    const [from, setFrom] = useState([]);
    const [to, setTo] = useState('');
    const [flightDate, setFlightDate] = useState();
 
    useEffect(() => {
        let myInit = {  method: 'GET',
                        headers: {
                            "X-RapidAPI-Host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                            "X-RapidAPI-Key": "975351462fmshaede6b9b63d323ap1216aejsn37c2602aebe0",
                        }};
        axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/PH/JPY/Philippines/?query=Japan`,　myInit)
        .then(res => {
            setFrom(res.data.Places);
        })
    }, []);
    console.log(from);
    return (
        <div>
            <h1>Minimam Price Checker</h1>
            <h2>from : something</h2>
            <h2>to : something</h2>
            <h2>Price : ¥999</h2>
            <div>
                <ul>
                    <li>list</li>
                </ul>
            </div>
        </div>
    );
}

export default App;