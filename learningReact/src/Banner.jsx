// props
import PropTypes from "prop-types";
import { useState } from "react";
// styled components
import styled from "styled-components";

const Div = styled.div`
    padding-left: 10px;
    color: ${(props) => (props.selected ? "blue" : "red") };
    background-color: silver ;

    @media (max-width: 200px){
        background-color: aqua;
    }`
// &:hover{} : all of div is hovered and changed
// :hover{} : each of lines hovered is changed
//------------------------------------------------------
function Banner({title , description, numOfStudent}) {
    const [selected, setSelected] = useState(true)
    return (
    <Div selected={selected}>  {/*prev is <> & selected like props is used*/}
        <button onClick={() => setSelected((s) => !s)}>change</button>{/*s is means state*/}
        <hr />
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{numOfStudent}</span>
        <hr />
    </Div>
        )
}

export default Banner

Banner.propTypes={
        title: PropTypes.string.isRequired,
        description:PropTypes.string.isRequired,
        numOfStudent:PropTypes.number.isRequired
}
