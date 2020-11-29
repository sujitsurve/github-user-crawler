import React from "react";
import Button from "@material-ui/core/Button";


const Buttons = (props) => {

    return (
        <Button onClick={props.onClickHandler} variant={props.variant} color={props.color}>
            {props.children}
        </Button>
    )
};

export default Buttons;