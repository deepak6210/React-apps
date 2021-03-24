import React from "react";
import './Greating.css'

const morning = 'Good Morning';
const afternon = "Good AfterNon";
const evening = "Good Evening";
const night  = "Good Night"
let greet = '';

const time = new Date()
const hours = time.getHours();
const cssStyle = {};

if(hours >= 1 && hours <=11 ){
      greet = `${morning}`;
      cssStyle.color = "Green";
}else if (hours >= 12 && hours <= 17){
    greet = `${afternon}`;
    cssStyle.color = "Red";
}else if (hours >= 18 && hours <= 21){
    greet = `${evening}`;
    cssStyle.color = "Orange";
}else{
    greet =`${night}`;
    cssStyle.color = "black";
}

function Greating() {
    return (
    <>
    <div className = "greating">
    <h1 className="text">Hello Sir, <span style={cssStyle}>{greet}</span></h1>
    </div>
    </>
    )
}

export default Greating;