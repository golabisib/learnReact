import React from "react";
function Test(){
    return(
        <React.Fragment>
        <p>This is test component</p>
        <span>I am Roozbeh Rigi Jangjo</span>
        <p>{Math.round(Math.random() * 10)}</p>
        </React.Fragment>
        //or
        // <>
        // </> without import react
    );
}
export default Test
