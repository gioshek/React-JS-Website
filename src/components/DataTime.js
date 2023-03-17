import React from "react";

class DataTime extends React.Component {
    render() {
        return (
            <div className="date">
                <h2>Сейчас: {new Date().toLocaleTimeString()}</h2>
            </div>
        ) 
    } 
};




export default DataTime;