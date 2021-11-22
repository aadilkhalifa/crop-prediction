import './TrialSection.scss'

import React, {useState, useEffect} from 'react'


function TrialSection() {

    const [data, setData] = useState("");

    var N_value;
    var P_value;
    var K_value;
    var Ph_value;
    var Temp_value;
    var Humidity_value;
    var Rainfall_value;

    function getData(){

        const requestOptions = {
            // mode:'no-cors',
            dataType: 'json',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                N: N_value, 
                P: P_value, 
                K: K_value, 
                Ph: Ph_value,  
                temprature: Temp_value,  
                humidity: Humidity_value,  
                rainfall: Rainfall_value,  
                // N: '83', 
                // P: '45', 
                // K: '60', 
                // Ph: '28',  
                // temprature: '70.3',  
                // humidity: '7',  
                // rainfall: '150.9',  
            })
        };
        
        fetch('http://localhost:5000/crop', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data.crop)
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }

    return (
        <div className="section trailSection">
            <div className="trailSectionLeft">
                <h1>
                    Try it out
                </h1>
                <h3>
                    Enter your soil information and get a crop recommendation
                </h3>
            </div>
            <div className="trailSectionRight">
                <form action="http://localhost:5000/crop" method="POST">
                    <h3>Soil Data</h3>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="nitrogen">Nitrogen value</label>
                            <input name="nitrogen" type="text" placeholder="Enter value" 
                                onChange={(value)=>N_value=value.target.value} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="phosphorus">Phosphorus value</label>
                            <input name="phosphorus" type="text" placeholder="Enter value"
                                onChange={(value)=>P_value=value.target.value} />
                        </div>
                    </div>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="potassium">Potassium value</label>
                            <input name="potassium" type="text" placeholder="Enter value"
                                onChange={(value)=>K_value=value.target.value} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="ph">Ph value</label>
                            <input name="ph" type="text" placeholder="Enter value"
                                onChange={(value)=>Ph_value=value.target.value}  />
                        </div>
                    </div>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="temprature">Temprature value</label>
                            <input name="temprature" type="text" placeholder="Enter value"
                                onChange={(value)=>Temp_value=value.target.value} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="humidity">Humidity value</label>
                            <input name="humidity" type="text" placeholder="Enter value"
                                onChange={(value)=>Humidity_value=value.target.value}  />
                        </div>
                    </div>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="rainfall">Rainfall value</label>
                            <input name="rainfall" type="text" placeholder="Enter value"
                                onChange={(value)=>Rainfall_value=value.target.value} />
                        </div>
                    </div>
                    {/* <div className="inputRow">
                        <div className="inputDiv">
                            <h3>Location Data</h3>
                            <label htmlFor="">Location</label>
                            <input type="text" placeholder="Enter value"  />
                        </div>
                        <div className="inputDiv">
                            <h3>Time Data</h3>
                            <label htmlFor="">Time Period</label>
                            <input type="text" placeholder="Enter value"  />
                        </div>
                    </div> */}
                    <button onClick={ getData } type="button">Submit</button>
                    {
                        data !== "" ?
                            <div className="resultDiv">
                                Recommeded Crop: {data}
                            </div> : null
                    }
                </form>
            </div>
        </div>
    )
}

export default TrialSection
