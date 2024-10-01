import React from "react";

export default function ColourGrid (props){

return(
<div className="container">
    <div className="row">
    <div className="col bg-primary p-3 pointer" onClick={props.colourCode}></div>
    <div className="col bg-secondary p-3 pointer" onClick={props.colourCode}></div>
    <div className="col bg-danger p-3 pointer" onClick={props.colourCode}></div>
    <div className="col bg-success p-3 pointer" onClick={props.colourCode}></div>
    <div className="col bg-warning p-3 pointer" onClick={props.colourCode}></div>
    <div className="col bg-info p-3 pointer" onClick={props.colourCode}></div>
    </div>
</div>
)}
 
