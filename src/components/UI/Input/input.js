import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
const Input = (props) => {
    const [inputval, setInputval] = useState("");

    const userChangeHandler = (event) => {
        setInputval(event.target.value)
        props.getValue(event.target.value)
    }

    return (
        <TextField value={inputval}
            onChange={userChangeHandler}
            id="standard-basic"
            label="Enter users"
        />
    )
}

export default Input;