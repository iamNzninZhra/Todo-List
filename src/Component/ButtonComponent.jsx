/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from "react";
import Button from 'react-bootstrap/Button';

const BtnBootstrap = ({ backgroundColor, buttonlable, borderColor, onClick, completed }) => {
    return (
        <>
            <Button as="a" variant={backgroundColor} onClick={onClick} style={{
                // backgroundColor: backgroundColor,
                color: "#000",
                display: "flex",
                padding: "15px 20px 15px 20px",
                marginLeft: "20px",
                border: `1px solid ${borderColor}`,
                borderRadius: "10px",
                cursor: "pointer",
                textDecoration: completed ? "line-through" : "none",
            }}>
                {buttonlable}
            </Button>
        </>
    );
};

const DeleteButton = ({ onClick, borderColor, backgroundColor, buttonlable }) => (
    <button
        style={{
            backgroundColor: backgroundColor,
            color: "black",
            border: `1px solid ${borderColor}`,
            borderRadius: "5px",
            padding: "5px 10px",
            marginLeft: "10px",
            cursor: "pointer",
        }}
        onClick={onClick}
    >
        {buttonlable}
    </button>
);
const AddButton = ({ backgroundColor, buttonlable, borderColor, onClick }) => {
    // const AddButtonStyle = {

    // }
    return (
        <Button onClick={onClick} style={{
            backgroundColor: backgroundColor,
            display: "flex",
            position: "relative",
            left: "-50px",
            cursor: "pointer",
            // position: "absolute",
            // top: "30px",
            // left: "-50px",

        }}>
        {buttonlable}
        </Button>
    )
}
export default BtnBootstrap;