import './TrialSection.scss'

import React, {useState, useEffect} from 'react'


function TrialSection() {

    const [data2, setData2] = useState("");

    const [N_value, setN_value] = useState('');
    const [P_value, setP_value] = useState('');
    const [K_value, setK_value] = useState('');
    const [Ph_value, setPh_value] = useState('');
    const [state_value, setstate_value] = useState('');
    const [district_value, setdistrict_value] = useState('');
    const [Moisture_value, setMoisture_value] = useState('');
    const [CropType_value, setCropType_value] = useState('');
    const [SoilType_value, setSoilType_value] = useState('');

    function getData(){

        var requestOptions = {
            // mode:'no-cors',
            dataType: 'json',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                N: N_value, 
                P: P_value, 
                K: K_value, 
                Ph: Ph_value,  
                state: state_value,  
                district: district_value,
                moisture: Moisture_value,
                soil_type: SoilType_value,
                crop_type: CropType_value
            })
        };
        
        fetch('http://localhost:5000/fertilizer', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData2(data.crop)
            })
            .catch(error => {
                console.error('There was an error!', error);
                setData2("Error")
            });
    }

    return (
        <div className="section trailSection">
            <div className="trailSectionLeft" style={{backgroundColor:"black", backgroundImage: 'none'}}>
                <h1>
                    Fertilizer 
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
                            <label htmlFor="nitrogen2">Nitrogen value</label>
                            <input name="nitrogen2" type="text" placeholder="Enter value" value={N_value}
                                onInput={e => setN_value(e.target.value)} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="phosphorus2">Phosphorus value</label>
                            <input name="phosphorus2" type="text" placeholder="Enter value" value={P_value}
                                onInput={e => setP_value(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="potassium2">Potassium value</label>
                            <input name="potassium2" type="text" placeholder="Enter value" value={K_value}
                                onInput={e => setK_value(e.target.value)} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="ph2">Ph value</label>
                            <input name="ph2" type="text" placeholder="Enter value" value={Ph_value}
                                onInput={e => setPh_value(e.target.value)}  />
                        </div>
                    </div>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="moisture2">Moisture value</label>
                            <input name="moisture2" type="text" placeholder="Enter value" value={Moisture_value}
                                onInput={e => setMoisture_value(e.target.value)} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="soilType2">Soil type</label>
                            <input name="soilType2" type="text" placeholder="Enter value" value= {SoilType_value}
                                onInput={e => setSoilType_value(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="cropType2">Crop type</label>
                            <input name="cropType2" type="text" placeholder="Enter value" value={CropType_value}
                                onInput={e => setCropType_value(e.target.value)}/>
                        </div>
                    </div>
                    {/* <h3>Location Data</h3> */}
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="state2">State</label>
                            <input name="state2" type="text" placeholder="Enter value" value={state_value}
                                onInput={e => setstate_value(e.target.value)} />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="district2">District</label>
                            <input name="district2" type="text" placeholder="Enter value" value={district_value} 
                                onInput={e => setdistrict_value(e.target.value)} />
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
                        data2 !== "" ?
                            <div className="resultDiv">
                                Recommeded Fertilizer: {data2}
                            </div> : null
                    }
                </form>
            </div>
        </div>
    )
}

export default TrialSection
