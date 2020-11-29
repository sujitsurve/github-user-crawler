import React, { Component } from "react";
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Repository from '../repository/repository'
import './selecteduser.css';

class SelectedUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedUserDetails: this.props.location.state
        }
    }
    componentDidMount() {
        this.props.fetchFollowerList(this.state.selectedUserDetails.followers_url);
        this.props.fetchRepoList(this.state.selectedUserDetails.repos_url);
    }
    render() {
        const followerCount = this.props.data ? this.props.data.length : 0
        const repoCount = this.props.repoData ? this.props.repoData.length : 0
        const repoDetails = repoCount > 0 ?
                        <Repository data={this.props.repoData} /> :
                        <div className="noRepo">"No Repository"</div>;
        return (
            <div className="selectedUsersContainer">
                <div className="userProfileDetails">
                    <div className="userProfile">
                        <Avatar alt="Remy Sharp" src={this.state.selectedUserDetails.avatar_url}
                            style={{ width: "250px", height: "250px" }}
                        />
                        <div className="userName">
                            <div>{this.state.selectedUserDetails.login}</div>
                            <span className="followers">{followerCount} followers</span>
                            <span className="followers">{repoCount} Repository</span>
                        </div>
                    </div>
                </div>
                <div className="userRepository">
                    {repoDetails}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        data: state.selectedUserData.followeData,
        repoData: state.selectedUserData.repoData,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchFollowerList: (usrlist) => dispatch(actions.getFollwersData(usrlist)),
        fetchRepoList: (repo) => dispatch(actions.getRepoData(repo))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedUser);