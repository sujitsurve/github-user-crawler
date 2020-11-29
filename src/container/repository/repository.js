import React from 'react';
import { AiOutlineFork } from 'react-icons/ai';

import './repository.css';

const Repository = (props) => {
    const repoDetails = props.data.map(repo => {
        return <div className="repoDiv" key={repo.id}>
            <div className="repoName">{repo.name}</div>
            <div className="repoDesc">{repo.description}</div>
            <div className="fork">
                <span className="forkIcon"><AiOutlineFork /> </span>
                <span className="forkCount">{repo.forks_count} </span>
            </div>
        </div>
    })
    return (
        repoDetails
    )
}

export default Repository;