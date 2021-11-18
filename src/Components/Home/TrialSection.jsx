import './TrialSection.scss'

import React from 'react'

function TrialSection() {
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
                <form action="">
                    <h3>Soil Data</h3>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="">Nitrogen value</label>
                            <input type="text" placeholder="Enter value" />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="">Phosphorus value</label>
                            <input type="text" placeholder="Enter value" />
                        </div>
                    </div>
                    <div className="inputRow">
                        <div className="inputDiv">
                            <label htmlFor="">Potassium value</label>
                            <input type="text" placeholder="Enter value" />
                        </div>
                        <div className="inputDiv">
                            <label htmlFor="">Ph value</label>
                            <input type="text" placeholder="Enter value"  />
                        </div>
                    </div>
                    <div className="inputRow">
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
                    </div>
                    <button>Submit</button>
                    <div className="resultDiv">
                        Recommeded Crop: Jute
                    </div>
                </form>
            </div>
        </div>
    )
}

export default TrialSection
