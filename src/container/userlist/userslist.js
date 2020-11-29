import React, { useState } from "react";
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Buttons from "../../components/UI/Button/button";
import Input from "../../components/UI/Input/input";
import Table from '../../components/UI/Table/table';
import columns from './columns'
import './userslist.css';

const UserList = (props) => {
    const [userInput, setUserInput] = useState("");
    return (
        <div className="usersListContainer">
            <div className="searchArea">
                <Input
                    getValue={(input) => { setUserInput(input) }}
                />
                <Buttons
                    onClickHandler={() => { props.fetchUsersList(userInput) }}
                    variant="contained"
                    color="primary">
                    Search
                </Buttons>
            </div>
            {
                props.data.length !== 0 ?
                    <div className="tblContainer">
                        <Table col={columns} tableData={props.data} />
                    </div>
                    : null
            }

        </div>
    )
}

const mapStateToProps = state => {
    return {
        data: state.userlist.usersData
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersList: (usrlist) => dispatch(actions.getUsersListData(usrlist))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);